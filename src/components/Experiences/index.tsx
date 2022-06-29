import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title=" Experiences" description="" />

      <section>
        <ExperienceItem
          year="2010 to 2014"
          title="Business - Bachelor Degree"
          description="I believe a developer also needs to understand about business rules. I gained a valuable background during this degree."
        />
        <ExperienceItem
          year="2013 to 2021"
          title="Product Owner"
          description="I worked as a Product Owner at a Brazilian bank (Banrisul). There are 4.3 million customers and 514 agencies in this bank."
        />
        <ExperienceItem
          year="2018 to 2020"
          title="Internet Systems - Associate Degree"
          description="This degree allowed me to build and develop solid and fundamental skills. I can execute tasks with agility and great quality."
        />
        <ExperienceItem
          year="2020 to nowadays"
          title="Works and Projects"
          description="I have been using the languages and technologies most used by companies. See my portfolio below and check my skills for yourself."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
