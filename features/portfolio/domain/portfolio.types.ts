export interface Tag {
  name: string;
}

export interface Project {
  id: string;
  period: string;
  title: string;
  projectUrl?: string ;
  description: string;
  imageUrl?: string ;
  repositoryUrl?: string ; 
  tags: Tag[];
}

export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn'  | 'Email' | 'Curriculum' ;
  url: string;
  handle: string;
}

export interface Bio {
  heading: string;
  paragraphs: string[];
}

export interface Presentation {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export interface SiteFooterProps {
  socialLinks: Omit<SocialLink[], 'Email'>;
}

export interface SendEmailParams {
  email: string;
  message: string;
}
