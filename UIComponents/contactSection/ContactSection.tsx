"use client";

import { SocialLink } from '@/features/portfolio/domain/portfolio.types';
import { Heading, Text, Box, Link, SimpleGrid, GridItem, HStack } from '@chakra-ui/react';
import { LuArrowUpRight, LuSquarePen } from 'react-icons/lu';
import { AnimatePresence, m, Variants } from 'framer-motion';
import React, { useState } from 'react';
import { ContactForm } from './ContactForm';
import { MotionVStack } from '../shared/MotionVStack';

const MotionBox = m(Box);

const arrowVariants: Variants = {
  initial: { x: 0, y: 0 },
  hover: { x: 4, y: -4, transition: { type: 'spring', stiffness: 300 } },
};

const contentVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: { duration: 0.2 },
  },
};

interface ContactSectionProps {
  socialLinks: SocialLink[];
}

export const ContactSection = ({ socialLinks }: ContactSectionProps) => {
  const [isFormOpen, setFormOpen] = useState(false);
  const emailLink = socialLinks.find(link => link.platform === 'Email');
  const otherLinks = socialLinks.filter(link => link.platform !== 'Email');

  return (
    <MotionVStack as="section" align="stretch" gap={8}>
      <Heading textStyle="h2">Hablemos</Heading>

      <SimpleGrid columns={{base:1, md: 2}} columnGap={ 8 } rowGap={{base: 1, md: 4}} templateColumns={{ md: "120px 1fr"}}>
        {otherLinks.map((link) => (
          <React.Fragment key={link.platform}>
            <GridItem>
              <Text textStyle="muted">{link.platform}</Text>
            </GridItem>
            <GridItem mb={{base: 3}}>
              <m.div initial="initial" whileHover="hover" style={{ width: 'fit-content' }}>
                <Link href={link.url} target="_blank" rel="noopener noreferrer" position="relative" _hover={{ textDecoration: 'none', color: 'primary' }}>
                  <HStack>
                    <Text color={"primary"} _hover={{ textDecoration: 'underline' }} position="relative">{link.handle}</Text>
                    <MotionBox variants={arrowVariants}><LuArrowUpRight size="12px" /></MotionBox>
                  </HStack>
                </Link>
              </m.div>
            </GridItem>
          </React.Fragment>
        ))}

        {emailLink && (
          <>
            <GridItem>
              <Text textStyle="muted">{emailLink.platform}</Text>
            </GridItem>
            <GridItem>
              <m.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <AnimatePresence mode="wait">
                  {isFormOpen ? (
                    <m.div
                      key="form"
                      variants={contentVariants}
                      initial="initial" animate="animate" exit="exit"
                    >
                      <ContactForm onCancel={() => setFormOpen(false)} />
                    </m.div>
                  ) : (
                    <m.div
                      key="handle"
                      variants={contentVariants}
                      initial="initial" animate="animate" exit="exit"
                    >
                      <m.div initial="initial" whileHover="hover" style={{ width: 'fit-content' }}>
                        <HStack 
                          onClick={() => setFormOpen(true)}
                          cursor="pointer"
                          position="relative" 
                        >
                          <Text _hover={{color: 'primary', textDecoration: 'underline' }}>{emailLink.handle}</Text>
                          <MotionBox variants={arrowVariants}><LuSquarePen size="14px" /></MotionBox>
                        </HStack>
                      </m.div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            </GridItem>
          </>
        )}
      </SimpleGrid>
    </MotionVStack>
  );
};