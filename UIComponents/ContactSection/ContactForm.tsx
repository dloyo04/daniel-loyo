"use client";

import { VStack, Button, Text, Input, Textarea, Field, HStack } from '@chakra-ui/react';
import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { sendContactFormAction, FormState } from '@/features';

// Esquema de validación con Zod. Nuestra única fuente de verdad.
const contactSchema = z.object({
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

// Tipos inferidos del esquema para mayor seguridad
type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  onCancel: () => void;
}

// Componente aislado para el botón de envío, para poder usar useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" loading={pending}>
      Enviar Mensaje
    </Button>
  );
}

export const ContactForm = ({ onCancel }: ContactFormProps) => {
  // Estado inicial que coincide con el tipo FormState de nuestra action
  const initialState: FormState = { status: 'idle', message: '' };
  
  // Hook de React 19 para manejar el estado de la Server Action
  const [state, formAction] = useActionState(sendContactFormAction, initialState);

  // Hook de react-hook-form para la validación y UX en el cliente
  const {
    register,
    formState: { errors: clientErrors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  // Efecto para reaccionar al estado devuelto por el servidor
  useEffect(() => {
    if (state.status === 'success') {
      onCancel(); // Cierra el formulario
      reset();    // Limpia los campos
    }
  }, [state, onCancel, reset]);

  return (
    <form action={formAction}>
      <VStack gap={4} align="stretch">
        <Field.Root invalid={!!clientErrors.email || !!state.errors?.email}>
          <Field.Label fontSize="sm">Tu Email</Field.Label>
          <Input {...register('email')} type="email" />
          <Field.ErrorText>
            {clientErrors.email?.message || state.errors?.email?.[0]}
          </Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!clientErrors.message || !!state.errors?.message}>
          <Field.Label fontSize="sm">Mensaje</Field.Label>
          <Textarea {...register('message')} rows={5} />
          <Field.ErrorText>
            {clientErrors.message?.message || state.errors?.message?.[0]}
          </Field.ErrorText>
        </Field.Root>

        <HStack justify="space-between">
          <Button variant="ghost" onClick={onCancel}>Cancelar</Button>
          <SubmitButton />
        </HStack>
        
        {state.status === 'error' && (
          <Text fontSize="sm" color="red.500">{state.message}</Text>
        )}
      </VStack>
    </form>
  );
};