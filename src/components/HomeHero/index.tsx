/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/foto.png';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Hi,</h1>
          <h2>Welcome to my portfolio!</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
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
          <CodeItem data-aos="zoom-in">
            <span className="purple">AboutMe</span> {'\u007B'}
            <div>
              Role: <span className="blue">Dev Front-end,</span>
            </div>
            <div>
              Current_City: <span className="blue">Cork</span>
            </div>
            <div>
              Country: <span className="blue">Ireland</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
