"use client";

import { SocialLink } from '@/features/portfolio/domain/portfolio.types';
import { Heading, VStack, Link, Text, HStack, useDisclosure } from '@chakra-ui/react';
import { LuArrowUpRight } from 'react-icons/lu';
import { AnimatePresence, motion } from 'framer-motion';
import { ContactForm } from './ContactForm';

interface ContactSectionProps {
  socialLinks: SocialLink[];
}

export const ContactSection = ({ socialLinks }: ContactSectionProps) => {
  const { open, onOpen, onClose } = useDisclosure();

  const emailLink = socialLinks.find(link => link.platform === 'Email');
  const otherLinks = socialLinks.filter(link => link.platform !== 'Email');

  return (
    <VStack as="section" align="stretch" gap={4} minH="40dvh">
      <Heading as="h2" size="xl" mb={4}>
        Contáctame
      </Heading>

      <VStack align="stretch" gap={3}>
        {otherLinks.map((link) => (
          <Link
            key={link.platform}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            fontSize={{ base: 'lg' }}
            width="fit-content"
            _hover={{ textDecoration: 'none', color: 'primary' }}
          >
            <HStack>
              <Text>{link.platform}</Text>
              <LuArrowUpRight size="12px" />
            </HStack>
          </Link>
        ))}


        <AnimatePresence mode="wait">
          {!open ? (
            emailLink && (
              <motion.div
                key="mail-link"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HStack
                  onClick={onOpen}
                  cursor="pointer"
                  width="fit-content"
                  _hover={{ color: 'primary' }}
                >
                  <Text fontSize={{ base: 'lg' }}>Mail</Text>
                  <LuArrowUpRight size="12px" />
                </HStack>
              </motion.div>
            )
          ) : (
            <motion.div
              key="contact-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ width: '100%' }}
            >
              <ContactForm onCancel={onClose} />
            </motion.div>
          )}
        </AnimatePresence>
      </VStack>
    </VStack>
  );
};