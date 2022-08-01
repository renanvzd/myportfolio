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
          title="Bachelor Degree in Business Administration (NFQ Level 8)"
          description="I believe a developer also needs to understand about business rules. I've gained a valuable background during this degree."
        />
        <ExperienceItem
          year="2013 to 2021"
          title="Product Owner"
          description="I worked as a Product Owner at Banrisul (Brazilian Bank) which has 4.3 million customers and 514 agencies. There I have developed great abilities to multitask and adhere to a project's schedule."
        />
        <ExperienceItem
          year="2018 to 2020"
          title="Associate Degree in Computer Programming (Level 7)"
          description="This degree allowed me to build and develop solid and fundamental skills. I can execute tasks with agility and great quality."
        />
        <ExperienceItem
          year="2020 to nowadays"
          title="Jobs and Projects"
          description="I have been using the languages and technologies most used by companies. You can see my portfolio below and check my skills for yourself."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
