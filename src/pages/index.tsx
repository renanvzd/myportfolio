import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HomeContainer } from '../styles/HomeStyles'
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import Knowledges from '../components/Knowledge';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <HomeContainer>
      <Header />;
      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects />
        <Knowledges />
        <FormContact />
      </main>
      <Footer />
    </HomeContainer>
  )

}
