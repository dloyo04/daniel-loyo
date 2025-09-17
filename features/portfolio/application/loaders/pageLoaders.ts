import { getAllProjectsUseCase, getBioUseCase } from "../usecases";


export const loadHomePageData = async () => {
  const [projects, bio] = await Promise.all([
    getAllProjectsUseCase(),
    getBioUseCase(),
  ]);

  return { projects, bio };
};