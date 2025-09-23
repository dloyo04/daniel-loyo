"use server";

import { z } from "zod";
import { sendContactEmail } from "../../infrastructure/repository/EmailRepositoryResend";

export interface FormState {
  status: 'idle' | 'success' | 'error';
  message: string;
  errors?: {
    email?: string[];
    message?: string[];
  };
}

const contactSchema = z.object({
  email: z.email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export const sendContactFormAction = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const validatedFields = contactSchema.safeParse({
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Por favor, corrige los errores del formulario.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  try {
    await sendContactEmail(validatedFields.data);

    return {
      status: 'success',
      message: '¡Gracias! Tu mensaje ha sido enviado.',
    };
  } catch (e) {
    const error = e as Error;
    return {
      status: 'error',
      message: error.message,
    };
  }
};