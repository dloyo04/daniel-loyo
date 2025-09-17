"use client";

import { Heading, Text, VStack, HStack, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Los componentes de texto y encabezado siguen igual
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionHStack = motion(HStack);

// Las variantes de animación no cambian
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
    // 1. Usamos un motion.div como contenedor principal para la ANIMACIÓN.
    //    Las props de animación (variants, initial, animate) van aquí.
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 2. Dentro, usamos un VStack normal de Chakra para el LAYOUT.
          Las props de layout (align, spacing) van aquí, donde Chakra las entiende.
      */}
      <VStack align="flex-start" spacing={4}>
        <MotionHeading as="h1" fontSize={["5xl", "6xl", "7xl"]} variants={itemVariants}>
          Daniel Loyo
        </MotionHeading>

        <MotionText fontSize={["lg", "xl", "2xl"]} color="secondary" variants={itemVariants}>
          Creative Developer & UI Architect
        </MotionText>

        {/* Nota: MotionHStack no da error porque 'spacing' también es una prop válida en él,
            pero seguir este patrón de separación es una buena práctica.
        */}
        <MotionHStack align="center" spacing={3} variants={itemVariants}>
          <Box bg="green.400" w="10px" h="10px" borderRadius="full" />
          <Text fontSize="md" color="secondary">
            Disponible para nuevos proyectos
          </Text>
        </MotionHStack>
      </VStack>
    </motion.div>
  );
};