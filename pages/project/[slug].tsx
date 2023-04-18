import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Head from 'next/head';
import { getSingleProjectPost } from '@/services/notionService';
import { GetServerSideProps } from 'next';
import { Page } from '@/types/project';
import styled from '@emotion/styled';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query.slug as string;
  const { post, markdown } = await getSingleProjectPost(slug);
  console.log('post:', post);

  return {
    props: {
      post,
      markdown,
    },
  };
};

const ProjectPage = ({ markdown, post }: Page) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name={'description'} title={'description'} content={post.description} />
        <meta name={'og:description'} title={'og:description'} content={post.description} />
        <meta name={'og:image'} title={'og:title'} content={post.cover} />
      </Head>
      <Main>
        <Article>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </Article>
      </Main>
    </>
  );
};

export default ProjectPage;

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

const Article = styled.article`
  max-width: 700px;
  margin: 0 auto;
  padding: 1rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #1c1e21;

  > h2,
  h3 {
    margin-top: 20px;
  }

  /* Style for code blocks */
  pre {
    background-color: #f7f7f7;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  /* Style for inline code */
  code {
    font-family: 'Fira Code', monospace;
    background-color: #f7f7f7;
    padding: 0.1rem 0.25rem;
    border-radius: 4px;
    font-size: 14px;
  }

  // from here

  /* Headings */
  > h1 {
    font-size: 32px;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    color: #1c1e21;
  }

  > h2 {
    font-size: 24px;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    color: #1c1e21;
  }

  > h3 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    color: #1c1e21;
  }

  /* Paragraphs */
  > p {
    margin-bottom: 1.5rem;
  }

  /* Links */
  > a {
    color: #1a73e8;
    text-decoration: none;
    border-bottom: 2px solid #1a73e8;
    padding-bottom: 2px;
    &:hover {
      color: #0c5dab;
      border-bottom-color: #0c5dab;
    }
  }

  /* Lists */
  > ul {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }

  > ul,
  li {
    margin-bottom: 0.5rem;
  }

  > ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }

  > ol,
  li {
    margin-bottom: 0.5rem;
  }

  /* Code blocks */
  > pre {
    background-color: #f7f7f7;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  /* Inline code */
  > code {
    font-family: 'Fira Code', monospace;
    background-color: #f7f7f7;
    padding: 0.1rem 0.25rem;
    border-radius: 4px;
    font-size: 14px;
  }

  /* Block quotes */
  > blockquote {
    margin: 1.5rem 0;
    padding: 0.5rem 1rem;
    background-color: #f5f5f5;
    border-left: 4px solid #d2d2d2;
  }

  > blockquote {
    border-left: 4px solid #e6e6e6;
    padding-left: 16px;
    margin: 16px 0;
    background-color: #f6f6f6;
    color: #333;
    font-size: 14px;
    font-style: normal;
  }

  > callout {
    background-color: #fff5cc;
    border: 1px solid #e6db55;
    border-radius: 3px;
    padding: 1rem;
    margin: 1.5rem 0;
    display: flex;
    align-items: center;
    > svg {
      margin-right: 0.5rem;
      color: #f1c40f;
    }

    > p {
      margin: 0;
      font-size: 16px;
      line-height: 1.5;
      color: #1c1e21;
    }
  }
`;
