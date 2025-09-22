import { Box } from "@chakra-ui/react";

interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <Box
      as="main"
      mx="auto"
      maxW="540px" 
      minH="100dvh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      py={{ base: 20, md: 28 }}
      px={{ base: 6, md: 0 }}
    >
      {children}
    </Box>
  );
};