import { Presentation } from "../../domain";
import { portfolioRepository } from "../../infrastructure";

export const getPresentationUseCase = async (): Promise<Presentation> => {
  return portfolioRepository.getPresentation();
};