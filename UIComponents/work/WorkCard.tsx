"use client";

import { WorkExperience } from '@/features/portfolio/domain/portfolio.types';
import { Heading, Text, VStack, HStack, Box, Flex, Image } from '@chakra-ui/react';
import { m, Variants } from 'framer-motion';

const MotionBox = m(Box);

const listItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 200, damping: 20 }
    },
};

interface WorkCardProps {
    work: WorkExperience;
}

export const WorkCard = ({ work }: WorkCardProps) => {
    const tagString = work.tags.map(tag => tag.name).join(' • ');

    return (
        <MotionBox variants={listItemVariants}>
            <m.div
                initial="initial"
                whileHover="hover"
                transition={{ type: "spring", stiffness: 400, damping: 17 }}

                variants={{
                    initial: { y: 0, x: 0 },
                    hover: { y: -5, x: 1 },
                }}
            >
                <Box
                    display="block"
                    py={3}
                    borderRadius="md"
                    cursor={"default"}

                    transitionProperty="background"
                    transitionDuration="200ms"
                >
                    <Flex align="flex-start" direction={{ base: 'column', md: 'row' }} gap={{ base: 2, md: 8 }} >
                        <Text as="span" textStyle={"muted"} w={{ base: "full", md: "120px" }} flexShrink={0} pt={1}>
                            {work.period}
                        </Text>

                        <VStack align="stretch" gap={1}>
                            {work.imageUrl && (
                                <Image
                                    src={work.imageUrl}
                                    alt={`Logo de ${work.company}`}
                                    boxSize="50px"
                                    borderRadius={"md"}
                                    objectFit="cover"
                                    mt={1}
                                />
                            )}
                            <Heading as="h3" textStyle={"h3"}>
                                {work.title} • {work.company}
                            </Heading>
                            <Text textStyle={"body"}>
                                {work.description}
                            </Text>
                            <Text textStyle={"muted"} pt={1}>
                                {tagString}
                            </Text>
                        </VStack>
                    </Flex>
                </Box>
            </m.div>
        </MotionBox>
    );
};
