import { SocialLink } from "../../domain";
import { mockSocialLinks } from "../../infrastructure";

export const getSocialLinksUseCase = async (): Promise<SocialLink[]> => {
  return mockSocialLinks;
};