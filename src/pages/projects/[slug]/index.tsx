import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Head from 'next/head';
import BannerProject from '../../../components/BannerProject';
import Header from '../../../components/Header';
import { getPrismicClient } from '../../../services/prismic';
import { ProjectContainer } from '../../../styles/ProjectContainerStyles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectProps {
  project: IProjeto;
}

export default function Projeto({ project }: ProjectProps) {
  return (
    <ProjectContainer>
      <Head>
        <title>{project.title} | Meu portfólio</title>
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
        title={project.title}
        type={project.type}
        imgUrl={project.thumbnail}
      />

      <main>
        <p>{project.description}</p>
        <button type="button">
          <a href={project.link}>Know the project</a>
        </button>
      </main>
    </ProjectContainer>
  );
}


export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projetos = await prismic.query([
    Prismic.predicates.at('document.type', 'project')
  ]);

  const paths = projetos.results.map(project => ({
    params: {
      slug: project.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('project', String(slug), {});

  const project = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: {
      project
    },
    revalidate: 86400
  };
};
