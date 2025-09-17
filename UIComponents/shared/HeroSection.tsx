"use client";

import { Heading, Text, VStack, HStack, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionHStack = motion(HStack);

const containerVariants = {
  hidden: { opacity: 0 },
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

export const HeroSection = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <VStack align="flex-start" gap={4}>
        <MotionHeading as="h1" textAlign="center" fontSize={["4xl"]} variants={itemVariants}>
          Daniel Loyo
        </MotionHeading>

        <MotionText fontSize={["xl"]}  textAlign="center" color="secondary" variants={itemVariants}>
          Creative Developer & UI Architect
        </MotionText>

        <MotionHStack align="center" gap={3} variants={itemVariants}>
          <Box bg="green.400" w="10px" h="10px" borderRadius="full" />
          <Text fontSize="md" color="secondary">
            Disponible para nuevos proyectos
          </Text>
        </MotionHStack>
      </VStack>
    </motion.div>
  );
};