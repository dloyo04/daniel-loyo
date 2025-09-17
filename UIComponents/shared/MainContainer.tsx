

import { Container } from "@chakra-ui/react";

interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <Container
      as="main"
      maxW="container.md" 
      minH="100vh"        
      display="flex"
      flexDirection="column"
      justifyContent="center" 
      px={8}
    >
      {children}
    </Container>
  );
};