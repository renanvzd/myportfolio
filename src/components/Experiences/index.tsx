import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title=" Experiences" description="" />

      <section>
        <ExperienceItem
          year="2021"
          title="Works and Projects"
          description="Lorem ipsum"
        />
        <ExperienceItem
          year="2020"
          title="Courses and Tutorials"
          description="Lorem ipsum"
        />
        <ExperienceItem
          year="2018 to 2020"
          title="Systems for Internet degree"
          description="Lorem ipsum dolor sdsadas it amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienceItem
          year="2013 to 2021"
          title="Product Owner"
          description="I worked as a product owner at a brazilian bank (Banrisul) that has 4.3 million customers"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
