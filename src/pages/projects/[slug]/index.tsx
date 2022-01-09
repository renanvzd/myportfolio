import Head from 'next/head';
import BannerProject from '../../../components/BannerProject';
import Header from '../../../components/Header';
import { ProjectContainer } from '../../../styles/ProjectContainerStyles';

export default function Projeto() {
  return (
    <ProjectContainer>
      <Head>
        <title>Project 01 | My Portfolio </title>
      </Head>

      <Header />
      <BannerProject
        title="Project 01"
        type="Website"
        imgUrl="https://i.imgur.com/JTJaCAV.png"
      />

      <main>
        <p>Project description</p>
        <button type="button">
          <a href="/">Know the project</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
