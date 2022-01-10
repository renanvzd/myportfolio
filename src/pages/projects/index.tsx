import Head from 'next/head';
import Header from '../../components/Header';
import ProjectItemPage from '../../components/PageProjectItem';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projects() {
  return (
    <ProjectsContainer>

      <Head>
        <title>Projects | My Portfolio</title>
        <meta
          name="description"
          content="Presentation of my projects."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Presentation of my projects."
        />
      </Head>

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
