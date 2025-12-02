import { WorkExperience } from "../../domain";
import { portfolioRepository } from "../../infrastructure/singleton/portfolioRepository";

export const getAllWorkExperienceUseCase = async (): Promise<WorkExperience[]> => {
    return portfolioRepository.getAllWorkExperience();
};

