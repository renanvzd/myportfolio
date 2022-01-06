/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/foto.png';

function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Hi,</h1>
          <h2>Welcome to my portfolio!</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//My introduction</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Name: <span className="blue">Renan,</span>
            </div>
            <div>
              Surname: <span className="blue">Veronez Drechsler,</span>
            </div>
            <div>
              Nationality: <span className="blue">Brazilian</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">About me</span> {'\u007B'}
            <div>
              Role: <span className="blue">Dev Front-end,</span>
            </div>
            <div>
              Current City: <span className="blue">Cork, Ireland</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
