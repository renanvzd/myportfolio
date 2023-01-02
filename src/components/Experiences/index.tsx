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
          title="Business Analyst"
          description="I worked as a Business Analyst at Banrisul (Brazilian Bank) which has 4.3 million customers and 514 branches. I had the opportunity to acquire great abilities to multitask and adhere to a project's schedule."
        />
        <ExperienceItem
          year="2018 to 2020"
          title="Associate Degree in Computer Programming (Level 6)"
          description="This degree, based on PHP and Javascript, has brought me to build and develop solid and fundamental skills in Computer Programming."
        />
        <ExperienceItem
          year="2021 to 2022"
          title="Frontend Developer"
          description="I worked as a Frontend Developer where I used to develop and implement highly responsive user interface components based on Javascript and ReactJS."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
