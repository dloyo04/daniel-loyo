

import { Container } from "@chakra-ui/react";

interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <Container
      as="main"
      maxW="container.md" 
      minH="100dvh"        
      display="flex"
      flexDirection="column"
      justifyContent="center" 
      p={8}
      m={8}
    >
      {children}
    </Container>
  );
};