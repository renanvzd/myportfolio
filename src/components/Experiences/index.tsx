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
          description="I believe developers also need to understand business rules. So, this degree give me a background to have a macroperspective view of the business."
        />
        <ExperienceItem
          year="2013 to 2021"
          title="Product Owner"
          description="I worked as a product owner at a brazilian bank (Banrisul) that has 4.3 million customers."
        />
        <ExperienceItem
          year="2018 to 2020"
          title="Internet Systems - Associate Degree"
          description="This degree allowed me to build and develop solid and fundamental skills."
        />
        <ExperienceItem
          year="2020 to nowadays"
          title="Works and Projects"
          description="You can check out the projects I've been working here on this website"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
