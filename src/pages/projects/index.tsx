import Header from '../../components/Header';
import ProjectItemPage from '../../components/PageProjectItem';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projects() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">

        <ProjectItemPage
          title="Project 01"
          type="Website"
          slug="Teste"
          imgUrl="https://i.imgur.com/JTJaCAV.png"
        />
        <ProjectItemPage
          title="Project 01"
          type="Website"
          slug="Teste"
          imgUrl="https://i.imgur.com/JTJaCAV.png"
        />
        <ProjectItemPage
          title="Project 01"
          type="Website"
          slug="Teste"
          imgUrl="https://i.imgur.com/JTJaCAV.png"
        />
        <ProjectItemPage
          title="Project 01"
          type="Website"
          slug="Teste"
          imgUrl="https://i.imgur.com/JTJaCAV.png"
        />

      </main>
    </ProjectsContainer>
  );
}
