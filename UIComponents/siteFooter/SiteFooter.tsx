"use client";

import { SiteFooterProps } from '@/features/portfolio/domain';
import { Text, HStack, IconButton, Link, Spacer } from '@chakra-ui/react';
import { m } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbFileCv } from "react-icons/tb";

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Curriculum: TbFileCv,
};

const MotionHStack = m(HStack);

export const SiteFooter = ({ socialLinks }: SiteFooterProps) => {
  return (
    <MotionHStack
      as="footer"
      px={4}
      pt={4}
      gap={4}
      position="fixed"
      bottom={0}
      width="100%"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.3 }} // Aparece después del contenido
    >
      <Text color="secondary" fontSize={{ base: "xs", md: "sm" }}>
        © 2025 Daniel Loyo
      </Text>

      <Spacer />

      {socialLinks.map((link) => {

        if (link.platform === 'GitHub' || link.platform === 'LinkedIn' || link.platform === 'Curriculum') {
          const IconComponent = iconMap[link.platform];
          return (
            <Link key={link.platform} href={link.url} target='_blank' rel='noopener noreferrer'>
              <IconButton
                aria-label={`Enlace a mi ${link.platform}`}
                size={{ base: "xs", md: "sm" }}
                variant="ghost"
                focusRing={"none"}
              >
                <IconComponent />
              </IconButton>
            </Link>
          );
        }
        return null;
      })}
    </MotionHStack>
  );
};