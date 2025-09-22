import { SiteFooterProps } from '@/features/portfolio/domain';
import { Text, HStack, IconButton, Link, Spacer } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbFileCv } from "react-icons/tb";

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Curriculum: TbFileCv,
};



export const SiteFooter = ({ socialLinks }: SiteFooterProps) => {
  return (
    <HStack as="footer" px={4} pt={4} gap={4} position="fixed" bottom={0} width="100%">
      <Text color="secondary" fontSize={{base: "xs", md: "sm"}}>
        © 2025 Daniel Loyo
      </Text>
      
      <Spacer/>

      {socialLinks.map((link) => {
        
        if (link.platform === 'GitHub' || link.platform === 'LinkedIn' || link.platform === 'Curriculum') {
            const IconComponent = iconMap[link.platform];
          return (
            <Link key={link.platform} href={link.url} target='_blank' rel='noopener noreferrer'>
              <IconButton
                aria-label={`Enlace a mi ${link.platform}`}
                size={{base: "xs", md:"sm"}}
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
    </HStack>
  );
};