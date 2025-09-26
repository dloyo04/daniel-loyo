"use client";

import { Project } from '@/features/portfolio/domain/portfolio.types';
import { Heading, VStack } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';
import { m, Variants } from 'framer-motion';
import { MotionVStack } from '../shared';

const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

interface ProjectSectionProps {
  projects: Project[];
}

export const ProjectSection = ({ projects }: ProjectSectionProps) => {
  const MotionVStackContainer = m(VStack);

  return (
    <MotionVStack as="section" align="stretch" gap={6}>
      <Heading as="h2" textStyle={"h2"}>Proyectos</Heading>
      
      <MotionVStackContainer
        as="section"
        variants={listContainerVariants}
        initial="hidden"
        animate="visible"
        align="stretch"
        gap={8} 
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </MotionVStackContainer>
    </MotionVStack>
  );
};