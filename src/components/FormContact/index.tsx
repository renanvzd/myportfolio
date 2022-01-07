import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContact() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Wish
            <br />
            contact me?
          </>
        }
        description={
          <>
            Fill the form below
            {/* <br />
            irei retornar em breve */}
          </>
        }
      />

      <Form />
    </Container>
  );
}

export default FormContact;
