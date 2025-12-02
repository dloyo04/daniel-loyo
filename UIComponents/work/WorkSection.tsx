"use client";

import { WorkExperience } from '@/features/portfolio/domain/portfolio.types';
import { Heading, VStack } from '@chakra-ui/react';
import { WorkCard } from './WorkCard';
import { m, Variants } from 'framer-motion';
import { MotionVStack } from '../shared';

const listContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.03, // Reducido de 0.1s a 0.03s
        },
    },
};

interface WorkSectionProps {
    workExperience: WorkExperience[];
}

export const WorkSection = ({ workExperience }: WorkSectionProps) => {
    const MotionVStackContainer = m(VStack);

    return (
        <MotionVStack as="section" align="stretch" gap={6}>
            <Heading as="h2" textStyle={"h2"}>Experiencia Laboral</Heading>

            <MotionVStackContainer
                as="section"
                variants={listContainerVariants}
                initial="hidden"
                animate="visible"
                align="stretch"
                gap={8}
            >
                {workExperience.map((work) => (
                    <WorkCard key={work.id} work={work} />
                ))}
            </MotionVStackContainer>
        </MotionVStack>
    );
};
