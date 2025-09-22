
import { Box } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

export const ThemeSwitcher = () => {
  return (
    <Box
      position="fixed" 
      top={{ base: 4, md: 6 }}   
      right={{ base: 4, md: 6 }} 
      zIndex="tooltip"    
    >
      <ColorModeButton />
    </Box>
  );
};