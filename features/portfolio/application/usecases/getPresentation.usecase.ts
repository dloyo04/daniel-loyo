import { Presentation } from "../../domain";
import { mockPresentation } from "../../infrastructure";

export const getPresentationUseCase = async (): Promise<Presentation> => {
  return mockPresentation;
};