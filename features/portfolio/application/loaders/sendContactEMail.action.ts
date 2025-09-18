"use server";

import { z } from 'zod';
import { sendContactEmailUseCase } from '../usecases/sendContactEmail.usecase';

export type FormState = {
  status: 'idle' | 'success' | 'error';
  message: string;
  errors?: Record<string, string[] | undefined>;
};

const contactSchema = z.object({
  email: z.email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export const sendContactFormAction = async (prevState: FormState, formData: FormData): Promise<FormState> => {
  const rawData = Object.fromEntries(formData.entries());
  const validatedFields = contactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Por favor, corrige los errores en el formulario.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await sendContactEmailUseCase(validatedFields.data);
    return { status: 'success', message: '¡Mensaje enviado con éxito!' };
  } catch  {
    return { status: 'error', message: 'Ha ocurrido un error inesperado. Inténtalo de nuevo.' };
  }
};

//TODO mejorar el action a uno  mas profesional