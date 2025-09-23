import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailTemplateProps {
  senderEmail: string;
  message: string;
}

export const ContactEmailTemplate = ({
  senderEmail,
  message,
}: ContactEmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>Nuevo mensaje desde tu portafolio</Preview>
    <Body style={{ backgroundColor: '#f6f9fc', fontFamily: 'Arial, sans-serif' }}>
      <Container style={{ backgroundColor: '#ffffff', border: '1px solid #e6ebf1', borderRadius: '8px', padding: '40px', margin: '40px auto' }}>
        <Section>
          <Heading as="h1" style={{ color: '#333' }}>Has recibido un nuevo mensaje</Heading>
          <Text style={{ color: '#555', fontSize: '16px' }}>
            Un visitante de tu portafolio te ha enviado el siguiente mensaje:
          </Text>
          <Hr style={{ borderColor: '#e6ebf1', margin: '20px 0' }} />
          <Text style={{ color: '#333', fontSize: '14px', whiteSpace: 'pre-wrap' }}>
            {message}
          </Text>
          <Hr style={{ borderColor: '#e6ebf1', margin: '20px 0' }} />
          <Text style={{ color: '#888', fontSize: '12px' }}>
            Enviado por: {senderEmail}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactEmailTemplate;