export interface Tag {
  name: string;
}

export interface Project {
  id: string;
  title: string;
  projectUrl?: string ;
  description: string;
  imageUrl?: string ;
  repositoryUrl?: string ; 
  tags: Tag[];
}

export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Twitter' | 'Email';
  url: string;
}

export interface Bio {
  heading: string;
  paragraphs: string[];
}

export interface Cardpresentation {
  imageUrl: string;
  title: string;
  subtitle: string;
}
