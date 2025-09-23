import { Resend } from 'resend';
import { ContactEmailTemplate } from '../template';

const resend = new Resend(process.env.RESEND_API_KEY);
const emailTo = process.env.CONTACT_EMAIL_TO;

interface SendEmailParams {
  email: string;
  message: string;
}

export const sendContactEmail = async ({ email, message }: SendEmailParams) => {
  if (!emailTo) {
    console.error('La variable de entorno no está definida.');
    throw new Error('El servidor no está configurado para recibir correos.');
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [emailTo],
      subject: 'Nuevo Mensaje desde tu Portafolio',
      react: ContactEmailTemplate({ senderEmail: email, message }),
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (e) {
    const error = e as Error;
    console.error('Error al enviar el correo:', error);
    throw new Error('Hubo un problema al enviar el correo. Por favor, intenta de nuevo.');
  }
};