import Head from 'next/head';
import { useContext } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import { ThemeContext } from '../context/ThemeContext';

export default function HomePage() {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>Ignacio Altamirano</title>
        <meta name="description" content="Ignacio Altamirano Portfolio" />
      </Head>
      <main id="home" className={darkTheme ? 'dark' : 'light'}>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
