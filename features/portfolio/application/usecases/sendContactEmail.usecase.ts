interface SendContactEmailParams {
  email: string;
  message: string;
}

export const sendContactEmailUseCase = async ({ email, message }: SendContactEmailParams): Promise<{ success: boolean }> => {
  console.log('--- Nuevo Mensaje de Contacto ---');
  console.log(`De: ${email}`);
  console.log(`Mensaje: ${message}`);
  console.log('---------------------------------');
  // TODO cambiar a Resend
  return { success: true };
};