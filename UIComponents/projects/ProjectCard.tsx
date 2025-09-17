import { Project } from '@/features/portfolio/domain/portfolio.types';
import { Heading, Text, VStack, Image, HStack, Tag } from '@chakra-ui/react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <VStack
      align="stretch" 
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      gap={4}
      p={5}
    >
      <Image src={project.imageUrl} alt={`Imagen del proyecto ${project.title}`} borderRadius="md" />
      
      <VStack align="stretch" gap={2}>
        <Heading as="h3" size="md">{project.title}</Heading>
        <Text fontSize="sm" color="secondary" lineClamp={3}>
          {project.description}
        </Text>
      </VStack>

      <HStack wrap="wrap">
        {project.tags.map((tag) => (
          <Tag.Root size="sm" key={tag.name} variant="solid">
            <Tag.Label>{tag.name}</Tag.Label>
          </Tag.Root>
        ))}
      </HStack>
    </VStack>
  );
};