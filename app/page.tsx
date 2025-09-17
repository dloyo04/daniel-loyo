import { AboutSection, ContactSection, ProjectsSection } from "@/UIComponents";
import { HeroSection, MainContainer } from "@/UIComponents/shared";
import { VStack } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <MainContainer>
      <VStack  align="center">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </VStack>
    </MainContainer>
  );
}