import { SocialLink } from "../../domain";
import { portfolioRepository } from "../../infrastructure";

export const getSocialLinksUseCase = async (): Promise<SocialLink[]> => {
  return portfolioRepository.getSocialLinks();
};