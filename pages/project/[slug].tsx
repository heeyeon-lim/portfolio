import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Head from 'next/head';
import { getSingleProjectPost } from '@/services/notionService';
import { GetServerSideProps } from 'next';
import { Page } from '@/types/project';
import styled from '@emotion/styled';
import remarkGfm from 'remark-gfm';
// import { Prism as SyntaxHighlighter, nord } from 'react-syntax-highlighter';
import rehypeRaw from 'rehype-raw';

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
  console.log('MArKDOWN: ', markdown);
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
          {/* <ReactMarkdown remarkPlugins={[remarkGfm]} children={markdown} /> */}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              // code({ node, inline, className, children, ...props }) {
              //   const match = /language-(\w+)/.exec(className || '');
              //   return inline ? (
              //     // 강조 (``)
              //     <code
              //       style={{
              //         background: 'linear-gradient( to right, var(--sub-highlight-color) 15%, var(--highlight-color) 85%, var(--sub-highlight-color) )',
              //         padding: '2px',
              //         borderRadius: '3px',
              //       }}
              //       {...props}
              //     >
              //       {children}
              //     </code>
              //   ) : match ? (
              //     // 코드 (```)
              //     <SyntaxHighlighter style={nord} language={match[1]} PreTag="div" {...props}>
              //       {String(children)
              //         .replace(/\n$/, '')
              //         .replace(/\n&nbsp;\n/g, '')
              //         .replace(/\n&nbsp\n/g, '')}
              //     </SyntaxHighlighter>
              //   ) : (
              //     <SyntaxHighlighter style={nord} language="textile" PreTag="div" {...props}>
              //       {String(children).replace(/\n$/, '')}
              //     </SyntaxHighlighter>
              //   );
              // },
              // 인용문 (>)
              // blockquote({ node, children, ...props }) {
              //   return (
              //     <div
              //       style={{
              //         background: '#f0f0f0',
              //         padding: '1px 15px',
              //         borderRadius: '10px',
              //       }}
              //       {...props}
              //     >
              //       {children}
              //     </div>
              //   );
              // },
              // img({ node, ...props }) {
              //   return <img style={{ maxWidth: '60vw' }} src={props.src.replace('../../../../public/', '/')} alt="MarkdownRenderer__Image" />;
              // },
              em({ node, children, ...props }) {
                return (
                  <span style={{ fontStyle: 'italic' }} {...props}>
                    {children}
                  </span>
                );
              },
            }}
          >
            {markdown
              .replace(/\n\s\n\s/gi, '\n\n&nbsp;\n\n') //공백줄 표현
              .replace(/\*\*/gi, '@$_%!^')
              .replace(/@\$_%!\^/gi, '**')}
          </ReactMarkdown>
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
  max-width: 1100px;
  margin: 0 auto;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  color: #1c1e21;

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

  /* Headings */
  > h1 {
    font-size: 32px;
  }

  > h2 {
    font-size: 24px;
  }

  > h3 {
    font-size: 20px;
  }

  /* Paragraphs */
  > p {
    font-size: 16px;
    line-height: 1.5;
  }

  > h1,
  h2,
  h3 {
    font-weight: 700;
    margin-top: 2rem;
    margin: 1.5rem;
  }

  > h1,
  h2,
  h3,
  p {
    > img {
      width: 100%;
    }

    > u {
      text-decoration: underline;
    }

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

    > strong {
      font-weight: 700;
    }
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
    > strong {
      font-weight: 700;
    }

    > a {
      > strong {
        font-weight: 700;
      }
      color: #1a73e8;
      text-decoration: none;
      border-bottom: 2px solid #1a73e8;
      padding-bottom: 2px;
      &:hover {
        color: #0c5dab;
        border-bottom-color: #0c5dab;
      }
    }
  }

  > ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }

  > ol,
  li {
    margin-bottom: 0.5rem;
    > strong {
      font-weight: 700;
    }
    > a {
      > strong {
        font-weight: 700;
      }
      color: #1a73e8;
      text-decoration: none;
      border-bottom: 2px solid #1a73e8;
      padding-bottom: 2px;
      &:hover {
        color: #0c5dab;
        border-bottom-color: #0c5dab;
      }
    }
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

  /* Table */

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    vertical-align: middle;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    font-weight: 700;
    > strong {
      font-weight: 700;
    }
  }

  /* tr:nth-child(even) {
    background-color: #f8f8f8;
  } */
`;
