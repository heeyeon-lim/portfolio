import React from 'react';
import { getPublishedProjectPost } from '@/services/notionService';
import { ProjectPost } from '@/types/project';
import ProjectCard from '../components/projects/ProjectCard';
import { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next';
import styled from '@emotion/styled';

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await getPublishedProjectPost();

  return {
    props: {
      projects,
    },
  };
};

const Projects: NextPage = ({ projects }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <Container>
    {projects.map((project: ProjectPost) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </Container>
);

export default Projects;

const Container = styled.main`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  padding: 0px 50px;
  place-content: center;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
