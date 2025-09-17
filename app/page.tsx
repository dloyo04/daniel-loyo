import { VStack } from "@chakra-ui/react";
import { MainContainer } from "../UIComponents";
import { HeroSection } from "../UIComponents";
import { ProjectsSection } from "../UIComponents";
import { AboutSection } from "../UIComponents";
import { ContactSection } from "../UIComponents";
import { getAllProjectsUseCase } from "../features/portfolio/";

export default async function HomePage() {
  const projects = await getAllProjectsUseCase();

  return (
    <MainContainer>
      <VStack gap={20} align="center">
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </VStack>
    </MainContainer>
  );
}