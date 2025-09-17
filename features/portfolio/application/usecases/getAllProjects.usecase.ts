import { Project } from "../../domain";
import { mockProjects } from "../../infrastructure/PortfolioRepositoryMock";

export const getAllProjectsUseCase = async (): Promise<Project[]> => {
  return mockProjects;
};