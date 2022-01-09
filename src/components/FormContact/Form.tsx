import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  return (
    <FormContainer data-aos="fade-up">
      <Input
        placeholder="Name"
        required
      />
      <Input
        placeholder="E-mail"
        type="email"
        required
      />
      <TextArea
        placeholder="Message"
        required
      />
      <button disabled type="submit">SEND</button>
    </FormContainer>
  );
}
