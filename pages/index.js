import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Ignacio Altamirano</title>
        <meta name="description" content="Ignacio Altamirano Portfolio" />
      </Head>
      <main id="home">
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
