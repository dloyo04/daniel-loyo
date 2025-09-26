import { sanityClient } from "@/lib/sanity.client";
import { groq, SanityDocument } from "next-sanity";
import { Bio, Presentation, Project, SocialLink } from "@/features";

const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc){
  ...,
  "imageUrl": imageUrl.asset->url
}`;
const bioQuery = groq`*[_type == "bio"][0]`;
const presentationQuery = groq`*[_type == "presentation"][0]{
  ...,
  "imageUrl": imageUrl.asset->url
}`;
const socialLinksQuery = groq`*[_type == "socialLink"]`;

interface SanityProject extends SanityDocument {
  
  title: string;
  period: string;
  description: string;
  projectUrl?: string;
  repositoryUrl?: string;
  imageUrl?: string;
  tags?: string[];
}

const toDomainProject = (sanityProject: SanityProject): Project => {
  return {
    id: sanityProject._id,
    title: sanityProject.title,
    period: sanityProject.period,
    description: sanityProject.description,
    projectUrl: sanityProject.projectUrl,
    repositoryUrl: sanityProject.repositoryUrl,
    imageUrl: sanityProject.imageUrl,
    tags: sanityProject.tags?.map((tag: string) => ({ name: tag })) || [],
  };
};

export class PortfolioRepositorySanity {
  async getAllProjects(): Promise<Project[]> {
    const sanityProjects = await sanityClient.fetch<SanityProject[]>(projectsQuery);
    return sanityProjects.map(toDomainProject);
  }
  async getBio(): Promise<Bio> {
    return sanityClient.fetch(bioQuery);
  }
  async getPresentation(): Promise<Presentation> {
    return sanityClient.fetch(presentationQuery);
  }
  async getSocialLinks(): Promise<SocialLink[]> {
    return sanityClient.fetch(socialLinksQuery);
  }
}

