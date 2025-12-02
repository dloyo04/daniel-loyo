import { VStack } from "@chakra-ui/react";

import { loadHomePageData } from "@/features";
import { AboutSection, ContactSection, HeroSection, MainContainer, ProjectSection, SiteFooter, WorkSection } from "@/UIComponents";


export default async function HomePage() {

  const { projects, bio, socialLinks, presentation, workExperience } = await loadHomePageData();

  return (
    <>
      <MainContainer>
        <VStack gap={"16"} align="stretch">
          <HeroSection presentation={presentation} />
          <AboutSection bio={bio} />
          <WorkSection workExperience={workExperience} />
          <ProjectSection projects={projects} />
          <ContactSection socialLinks={socialLinks} />
        </VStack>
      </MainContainer>
      <SiteFooter socialLinks={socialLinks} />
    </>
  );
}