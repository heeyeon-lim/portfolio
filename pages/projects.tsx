import { getPublishedProjectPost } from '@/services/notionService';
import { ProjectPost } from '@/types/project';
import ProjectCard from '../components/projects/ProjectCard';
import { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await getPublishedProjectPost();

  return {
    props: {
      projects,
    },
  };
};

const Projects: NextPage = ({ projects }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main>
      <h1>Projects 페이지입니다.</h1>
      {projects.map((project: ProjectPost) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </main>
  );
};

export default Projects;
