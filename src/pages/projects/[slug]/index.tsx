import Head from 'next/head';
import BannerProject from '../../../components/BannerProject';
import Header from '../../../components/Header';
import { ProjectContainer } from '../../../styles/ProjectContainerStyles';

export default function Projeto() {
  return (
    <ProjectContainer>
      <Head>
        <title>Project 01 | My Portfolio </title>
        <meta
          name="description"
          content="I'm a front-end developer living in Cork and here I present some projects developed by me!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="I'm a front-end developer living in Cork and here I present some projects developed by me!"
        />
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
