import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast from 'react-hot-toast';
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [loading, setLoading] = useState(false);

  const serviceEmailjs = process.env.NEXT_PUBLIC_SERVICE_EMAIL_JS;
  const templateEmailjs = process.env.NEXT_PUBLIC_TEMPLATE_EMAIL_JS;
  const userEmailjs = process.env.NEXT_PUBLIC_USER_EMAIL_JS;

  async function sendEmail(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await emailjs.sendForm(
        serviceEmailjs,
        templateEmailjs,
        e.target,
        userEmailjs
      );

      toast('Message sent!', {
        style: {
          background: theme.secondary,
          color: '#fff'
        }
      });

      e.target.reset();
    } catch (error) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={sendEmail}>
      <Input
        placeholder="Name"
        name="name"
      />
      <Input
        placeholder="E-mail"
        type="email"
        name="email"
      />
      <TextArea
        placeholder="Message"
        name="message"
      />
      <button type="submit" disabled={loading}>
        SEND
      </button>
    </FormContainer>
  );
}
