import { getAllProjectsUseCase, getBioUseCase, getPresentationUseCase, getSocialLinksUseCase, getAllWorkExperienceUseCase } from "../usecases";

export const loadHomePageData = async () => {
  const [projects, bio, presentation, socialLinks, workExperience] = await Promise.all([
    getAllProjectsUseCase(),
    getBioUseCase(),
    getPresentationUseCase(),
    getSocialLinksUseCase(),
    getAllWorkExperienceUseCase(),
  ]);


  return { projects, bio, socialLinks, presentation, workExperience };
};