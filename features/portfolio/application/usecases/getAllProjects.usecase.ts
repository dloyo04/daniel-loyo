import { Project } from "../../domain";
import { portfolioRepository } from "../../infrastructure";

export const getAllProjectsUseCase = async (): Promise<Project[]> => {
  return portfolioRepository.getAllProjects();
;
};