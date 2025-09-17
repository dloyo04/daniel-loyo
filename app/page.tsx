import { VStack } from "@chakra-ui/react";
import { MainContainer } from "../UIComponents";
import { HeroSection } from "../UIComponents";
import { ProjectsSection } from "../UIComponents";
import { AboutSection } from "../UIComponents";
import { ContactSection } from "../UIComponents";
import { loadHomePageData } from "@/features";


export default async function HomePage() {

  const { projects, bio } = await loadHomePageData();

  return (
    <MainContainer>
      <VStack gap={20} align="stretch">
        <HeroSection />
        <AboutSection bio={bio} />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </VStack>
    </MainContainer>
  );
}