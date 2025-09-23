"use client";

import { VStack, Button, Text, Input, Textarea, Field, HStack } from '@chakra-ui/react';
import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormState, sendContactFormAction } from '@/features/portfolio/application/action/sendContactEMail.action';
import { toaster } from '@/components/ui/toaster';

const contactSchema = z.object({
  email: z.email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  onCancel: () => void;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant={"outline"} _hover={{ bgColor: 'transparent', borderColor: 'gray' }} loading={pending}>
      Enviar Mensaje
    </Button>
  );
}

export const ContactForm = ({ onCancel }: ContactFormProps) => {
  const initialState: FormState = { status: 'idle', message: '' };
  const [state, formAction] = useActionState(sendContactFormAction, initialState);

  const {
    register,
    formState: { errors: clientErrors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    if (state.status === 'success') {
      setTimeout(() =>{
        toaster.create({
        title: "Mensaje Enviado!",
        description: "Gracias por contactarme. Te responderé pronto.",
        type: "success",
        duration: 7000,
        closable: true,
      });
      }, 0);
      onCancel(); 
      reset();    
    }
    if (state.status === 'error' && !state.errors) {
      setTimeout(() =>{
       toaster.create({
        title: "Error al Enviar",
        description: state.message,
        type: "error",
        duration: 5000,
        closable: true,
      });
    }, 0);
    }
  }, [state, onCancel, reset]);

  return (
    <form action={formAction}>
      <VStack gap={4} align="stretch">
        <Field.Root invalid={!!clientErrors.email || !!state.errors?.email}>
          <Field.Label textStyle={"body"}>Tu Email</Field.Label>
          <Input {...register('email')} type="email" focusRing={"none"}  width={"1/2"}/>
          <Field.ErrorText>
            {clientErrors.email?.message || state.errors?.email?.[0]}
          </Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!clientErrors.message || !!state.errors?.message}>
          <Field.Label textStyle={"body"}>Mensaje</Field.Label>
          <Textarea {...register('message')} focusRing={"none"} rows={3} />
          <Field.ErrorText>
            {clientErrors.message?.message || state.errors?.message?.[0]}
          </Field.ErrorText>
        </Field.Root>

        <HStack justify="space-between">
          <Button variant="ghost" _hover={{ bgColor: 'transparent', borderColor: 'gray' }} onClick={onCancel}>Cancelar</Button>
          <SubmitButton />
        </HStack>
        
        {state.status === 'error' && (
          <Text fontSize="sm" color="red.500">{state.message}</Text>
        )}
      </VStack>
    </form>
  );
};