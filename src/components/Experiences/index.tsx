import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title=" Experiences" description="" />

      <section>
        <ExperienceItem
          year="2019 to nowadays"
          title="Works and Projects"
          description="You can check out the projects I've been working right here on this website"
        />
        <ExperienceItem
          year="2010 to 2014"
          title="Bachelor Degree in Business Administration"
          description="I believe developers also need to understand business. So, this degree helps me to think about the business problem."
        />
        <ExperienceItem
          year="2018 to 2020"
          title="Systems for Internet degree"
          description="This degree allowed me to build and develop basic and fundamental skills."
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
