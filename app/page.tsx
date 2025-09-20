import { VStack } from "@chakra-ui/react";

import { loadHomePageData } from "@/features";
import { AboutSection, ContactSection, HeroSection, MainContainer, ProjectsSection, SiteFooter } from "@/UIComponents";


export default async function HomePage() {

  const { projects, bio, socialLinks } = await loadHomePageData();

  return (
    <>
    <MainContainer>
      <VStack gap={20} align="stretch">
        <HeroSection />
        <AboutSection bio={bio} />
        <ProjectsSection projects={projects} />
        <ContactSection socialLinks={socialLinks}/>
      </VStack>
    </MainContainer>
    <SiteFooter socialLinks={socialLinks}/>
    </>
  );
}