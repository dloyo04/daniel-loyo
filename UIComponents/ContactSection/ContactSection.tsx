"use client";

import { SocialLink } from '@/features/portfolio/domain/portfolio.types';
import { Heading, VStack, Text, HStack, Box, Link } from '@chakra-ui/react';
import { LuArrowUpRight, LuSquarePen } from 'react-icons/lu';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { ContactForm } from './ContactForm';
import { MotionVStack } from '../shared/MotionVStack';

const MotionHStack = motion(HStack);
const MotionBox = motion(Box);

const arrowVariants: Variants = {
  initial: { x: 0, y: 0 },
  hover: { x: 4, y: -4, transition: { type: 'spring', stiffness: 300 } },
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
      <Heading as="h2" size="xl">
        Hablemos
      </Heading>

      <VStack align="stretch" gap={3}>
        {otherLinks.map((link) => (
          <motion.div
            key={link.platform}
            initial="initial"
            whileHover="hover"
            style={{ width: 'fit-content' }}
          >
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              _hover={{
                textDecoration: 'none',
                color: 'primary',
              }}
            >
              <HStack>
                <Text
                  fontSize={{ base: 'lg' }}
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '1px',
                    bottom: '-2px',
                    left: 0,
                    backgroundColor: 'currentColor',
                    transform: 'scaleX(0)',
                    transformOrigin: 'top',
                    transition: 'transform 0.1s ease-out',
                  }}
                  _hover={{
                    _after: { transform: 'scaleX(1)' },
                  }}
                >
                  {link.platform}
                </Text>
                <MotionBox variants={arrowVariants}>
                  <LuArrowUpRight size="12px" />
                </MotionBox>
              </HStack>
            </Link>
          </motion.div>
        ))}

      <Box minH="250px" pos="relative">
        <AnimatePresence mode="wait">
          {isFormOpen ? (
            <MotionBox
              key="contact-form"
              layoutId="contact-boundary"
              borderRadius={0}

            >
              <ContactForm onCancel={() => setFormOpen(false)} />
            </MotionBox>
          ) : (
            emailLink && (
              <MotionHStack
                key="mail-link"
                layoutId="contact-boundary"
                onClick={() => setFormOpen(true)}
                cursor="pointer"
                width="fit-content"
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover="hover"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.2 } },
                  hover: {},
                }}
                 _hover={{ color: 'primary' }}
              >
                <Text
                  fontSize={{ base: 'lg' }}
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '1px',
                    bottom: '-2px',
                    left: 0,
                    backgroundColor: 'currentColor',
                    transform: 'scaleX(0)',
                    transformOrigin: 'top',
                    transition: 'transform 0.1s ease-out',
                  }}
                  _hover={{
                    _after: { transform: 'scaleX(1)' },
                  }}
                >
                  Mail
                </Text>
                <MotionBox variants={arrowVariants}>
                  <LuSquarePen size="12px" />
                </MotionBox>
              </MotionHStack>
            )
          )}
        </AnimatePresence>
      </Box>
    </VStack>
  </MotionVStack>
  );
};