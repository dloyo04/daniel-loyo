import { Bio } from "../../domain";
import { mockBio } from "../../infrastructure";

export const getBioUseCase = async (): Promise<Bio> => {
  return mockBio;
};