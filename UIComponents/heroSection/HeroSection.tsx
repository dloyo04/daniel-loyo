"use client";

import { Presentation } from "@/features";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { m } from "framer-motion";

const MotionHeading = m(Heading);
const MotionText = m(Text);
const MotionImage = m(Image);


const containerVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
interface HeroSectionProps {
  presentation: Presentation
}

export const HeroSection = ({ presentation }: HeroSectionProps) => {
  return (
    <m.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HStack align={"center"} gap={4}>
      <MotionImage
          src={presentation.imageUrl}
          alt={`Imagen de ${presentation.title}`}
          boxSize="96px" 
          borderRadius="full"
          objectFit="cover"
          objectPosition="top" 
          variants={itemVariants}

          whileHover={{ scale: 1.1 }} 
          transition={{ type: "tween" }}
        />
      <VStack align="flex-start" >
        <MotionHeading as="h1" textAlign="start" textStyle={"h1"} variants={itemVariants}>
          {presentation.title}
        </MotionHeading>

        <MotionText textStyle={"body"}  textAlign="start" color="secondary" variants={itemVariants}>
          {presentation.subtitle}
        </MotionText>
      </VStack>
      </HStack>
    </m.div>
  );
};