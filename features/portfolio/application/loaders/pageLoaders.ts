import { getAllProjectsUseCase, getBioUseCase, getPresentationUseCase, getSocialLinksUseCase } from "../usecases";

export const loadHomePageData = async () => {
  const [projects, bio, presentation, socialLinks] = await Promise.all([
    getAllProjectsUseCase(),
    getBioUseCase(),
    getPresentationUseCase(), 
    getSocialLinksUseCase(),  
  ]);


  return { projects, bio, socialLinks, presentation };
};