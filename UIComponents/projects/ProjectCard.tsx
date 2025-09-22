"use client";

import { Project } from '@/features/portfolio/domain/portfolio.types';
import { Heading, Text, VStack, HStack, Box, Link } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { LuArrowUpRight } from 'react-icons/lu';

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
      <motion.div
        initial="initial"
        whileHover="hover" 
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        
        variants={{
          initial: { y: 0, x: 0},
          hover: { y: -5 , x: 1 },
        }}
      >
        <Link 
          href={project.projectUrl ?? '#'} 
          target="_blank" 
          rel="noopener noreferrer" 
          display="block"
          _hover={{textDecoration: 'none'}}
          py={3}
          borderRadius="md"
          cursor={"pointer"}
          
          transitionProperty="background"
          transitionDuration="200ms"
        >
          <HStack align="flex" gap={8}>
            <Text as="span" textStyle={"muted"} w="120px" flexShrink={0} pt={1}>
              {project.period}
            </Text>

            <VStack align="stretch" gap={1}>
              <HStack justify="space-between">
                <Heading as="h3" textStyle={"h3"}>
                  {project.title}
                </Heading>
                <MotionBox variants={arrowVariants}>
                  <LuArrowUpRight size="14px" />
                </MotionBox>
              </HStack>
              <Text textStyle={"body"}>
                {project.description}
              </Text>
              <Text textStyle={"muted"} pt={1}>
                {tagString}
              </Text>
            </VStack>
          </HStack>
        </Link>
      </motion.div>
    </MotionBox>
  );
};