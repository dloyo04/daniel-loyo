"use client";

import { Project } from '@/features/portfolio/domain/portfolio.types';
import { Heading, Text, VStack, HStack, Box, Link, type LinkProps } from '@chakra-ui/react';
import { motion, Variants, HTMLMotionProps } from 'framer-motion';
import { LuArrowUpRight } from 'react-icons/lu';
import { forwardRef } from 'react';

type ChakraLinkProps = Omit<LinkProps, 'transition'>;

type MotionLinkProps = ChakraLinkProps & HTMLMotionProps<"a">;

const MotionLinkComponent = motion(Link);

const MotionLink = forwardRef<HTMLAnchorElement, MotionLinkProps>((props, ref) => {
  return <MotionLinkComponent {...props} ref={ref} />;
});

MotionLink.displayName = 'MotionLink';


const MotionBox = motion(Box);

const listItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 20 }
  },
};

const arrowVariants: Variants = {
  initial: { x: 0, y: 0 },
  hover: { x: 4, y: -4, transition: { type: 'spring', stiffness: 300 } }, 
};

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const tagString = project.tags.map(tag => tag.name).join(' • ');

  return (
    <MotionBox variants={listItemVariants}>
      <MotionLink
        initial="initial"
        whileHover="hover"
        variants={{
          initial: { y: 0, x: 0 },
          hover: { y: -5 , x: 1 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        href={project.projectUrl ?? '#'}
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ textDecoration: 'none' }}
        display="block"
        p={4}
        borderRadius="md"
      >
        <HStack align="flex-start" gap={8}>
          <Text as="span" fontSize="sm" color="secondary" w="120px" flexShrink={0} pt={1}>
            {project.period}
          </Text>

          <VStack align="stretch" gap={1}>
            <HStack justify="space-between">
              <Heading as="h3" size="md" color="primary">
                {project.title}
              </Heading>
              <MotionBox variants={arrowVariants}>
                <LuArrowUpRight size="14px" />
              </MotionBox>
            </HStack>
            <Text fontSize="md" color="secondary">
              {project.description}
            </Text>
            <Text fontSize="sm" color="secondary" pt={1}>
              {tagString}
            </Text>
          </VStack>
        </HStack>
      </MotionLink>
    </MotionBox>
  );
};