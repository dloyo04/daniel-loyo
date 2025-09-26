import { Bio } from "../../domain";
import { portfolioRepository } from "../../infrastructure";

export const getBioUseCase = async (): Promise<Bio> => {
  return portfolioRepository.getBio();
};