import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';


function Projects() {
  return (
    <Container>
      <SectionTitle title=" Latest Projects" />

      <section>
        <ProjectItem
          img="https://i.imgur.com/JTJaCAV.png"
          title="Project 01"
          type="Website"
          slug="teste"
        />
        <ProjectItem
          img="https://i.imgur.com/JTJaCAV.png"
          title="Project 02"
          type="Website"
          slug="teste"
        />
        <ProjectItem
          img="https://i.imgur.com/JTJaCAV.png"
          title="Project 03"
          type="Website"
          slug="teste"
        />
      </section>
      <button type="button">
        <Link href="/projects">
          <a>More projects</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projects;
