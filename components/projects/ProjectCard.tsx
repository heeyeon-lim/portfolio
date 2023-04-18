import { FC } from 'react';
import { ProjectPost } from '@/types/project';
import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';

type ProjectCardProps = {
  project: ProjectPost;
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/project/${project.slug}`}>
      <Container>
        <Image src={project.cover} alt="cover-image" width={100} height={50} />
        <p>{project.title}</p>
        <p>{project.description}</p>
        {project.skills.map((skill) => (
          <span key={skill.id}>{skill.name}</span>
        ))}
      </Container>
    </Link>
  );
};

export default ProjectCard;

const Container = styled.div`
  width: 200px;
  height: 300px;
  background-color: aliceblue;
  border: 2px solid black;
  margin: 10px;
`;
