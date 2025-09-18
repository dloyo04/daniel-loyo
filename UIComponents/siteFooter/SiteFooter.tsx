import { SiteFooterProps } from '@/features/portfolio/domain';
import { Text, HStack, IconButton, Link, Spacer } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin
};



export const SiteFooter = ({ socialLinks }: SiteFooterProps) => {
  return (
    <HStack as="footer" py={10} gap={4}>
      <Text color="secondary" fontSize="sm">
        © 2025 Daniel Loyo
      </Text>
      
      <Spacer/>

      {socialLinks.map((link) => {
        
        if (link.platform === 'GitHub' || link.platform === 'LinkedIn') {
            const IconComponent = iconMap[link.platform];
          return (
            <Link key={link.platform} href={link.url} target='_blank' rel='noopener noreferrer'>
              <IconButton
                aria-label={`Enlace a mi ${link.platform}`}
                size="sm"
                variant="ghost"
              >
              <IconComponent />
              </IconButton>
            </Link>
          );
        }
        return null;
      })}
    </HStack>
  );
};