import { Page, ProjectPost } from '@/types/project';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });
const database = process.env.NOTION_DATABASE_ID ?? '';

// Get all published posts
export async function getPublishedProjectPost(): Promise<ProjectPost[]> {
  const response = await notion.databases.query({
    database_id: database,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'Entries',
        direction: 'descending',
      },
    ],
  });

  return response.results.map((res) => pageToPostTransformer(res));
}

// Get single post
export async function getSingleProjectPost(slug: string): Promise<Page> {
  const response = await notion.databases.query({
    database_id: database,
    filter: {
      property: 'Slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  console.log('response:', response);

  if (!response.results[0]) {
    throw new Error('No results available');
  }

  const page = response.results[0];

  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const markdown = n2m.toMarkdownString(mdBlocks);
  const post = pageToPostTransformer(page);

  return {
    post,
    markdown,
  };
}

// Transform page to post
function pageToPostTransformer(page: any): ProjectPost {
  return {
    id: page.id,
    title: page.properties.Name.title[0].plain_text,
    description: page.properties.Description.rich_text[0].text.content,
    durationStart: page.properties.Duration.date.start,
    durationEnd: page.properties.Duration.date.end,
    team: page.properties.Team.rich_text[0].text.content,
    role: page.properties.Role.multi_select,
    skills: page.properties.Skills.multi_select,
    url: page.properties.URL.url,
    github: page.properties.Github.url,
    figma: page.properties.Figma.url,
    cover: page.properties.Cover.files[0].file.url,
    slug: page.properties.Slug.formula.string,
  };
}
