import { Bio } from '@/features/portfolio/domain/portfolio.types';
import { Heading, Text } from '@chakra-ui/react';
import { MotionVStack } from '../shared';

interface AboutSectionProps {
  bio: Bio;
}

export const AboutSection = ({ bio }: AboutSectionProps) => {
  return (
    <MotionVStack as="section" align="stretch" gap={4}>
      <Heading as="h2" size="xl">{bio.heading}</Heading>
      {bio.paragraphs.map((paragraph, index) => (
        <Text key={index} color="secondary">
          {paragraph}
        </Text>
      ))}
    </MotionVStack>
  );
};