import React from 'react';
import { FC } from 'react';
import { ProjectPost } from '@/types/project';
import Link from 'next/link';
import styled from '@emotion/styled';
import Image from 'next/image';
import { TagContainer, Tag } from '../common/Tag';

type ProjectCardProps = {
  project: ProjectPost;
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => (
  <Link href={`/project/${project.slug}`}>
    <Container onClick={(e) => e.stopPropagation()}>
      <Image src={project.cover} alt="cover-image" width={339} height={190} />
      <Content>
        <p className="project title">{project.title}</p>
        <p className="project description">{project.description}</p>
        <TagContainer className="project role">
          {project.role.map((role) => (
            <Tag key={role.id}>
              <span className="tag-name">{role.name}</span>
            </Tag>
          ))}
        </TagContainer>
      </Content>
      <LinkContainer>
        {project.url && (
          <a href={project.url} target="_blank" className="project url" rel="noreferrer">
            URL 바로가기
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" className="project github" rel="noreferrer">
            GitHub 바로가기
          </a>
        )}
        {project.figma && (
          <a href={project.figma} target="_blank" className="project figma" rel="noreferrer">
            Figma 바로가기
          </a>
        )}
      </LinkContainer>
    </Container>
  </Link>
);

export default ProjectCard;

const Container = styled.div`
  width: 340px;
  height: 400px;
  cursor: pointer;
  border-radius: 3px;
  border: 0.5px solid #cdcdcd;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: transform 500ms ease;

  &:hover {
    transform: scale(1.03);
    transition: transform 500ms ease;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  margin-bottom: 10px;
  > .project {
    margin: 5px 0px;
  }

  > .title {
    font-size: 17px;
    font-weight: 500;
  }

  > .description {
    font-size: 0.85rem;
    color: #77828a;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  padding-left: 10px;

  > .url,
  .github,
  .figma {
    font-size: 13px;
    width: fit-content;
    padding: 3px;
    border-radius: 3px;
    background-color: #f0f0f1;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    margin-right: 6px;

    &:hover {
      color: #0069c1;
    }
  }
`;
