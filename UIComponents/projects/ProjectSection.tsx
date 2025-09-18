import { Project } from '@/features/portfolio/domain/portfolio.types';
import {  Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <VStack as="section" align="stretch" gap={8}>
      <Heading as="h2" size="xl">Proyectos</Heading>
      <SimpleGrid columns={{  md: 1 }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};