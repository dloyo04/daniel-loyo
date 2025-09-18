import { getAllProjectsUseCase, getBioUseCase, getSocialLinksUseCase } from "../usecases";


export const loadHomePageData = async () => {
  const [projects, bio, socialLinks] = await Promise.all([
    getAllProjectsUseCase(),
    getBioUseCase(),
    getSocialLinksUseCase(),
  ]);

  return { projects, bio, socialLinks };
};