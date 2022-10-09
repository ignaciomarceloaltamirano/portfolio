import Link from 'next/link';
import { useContext, useState } from 'react';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);
  return (
    <section className="container mx-auto row p-0">
      <motion.div
        initial={{ opacity: 0, x: '-100vw' }}
        animate={{ opacity: 1, x: '0' }}
        transition={{ type: 'spring', duration: 0.4, bounce: 0.4 }}
        className="d-flex justify-content-center align-items-lg-start align-items-center text-lg-left text-center flex-column"
      >
        <h1 className="mb-3">Ignacio Altamirano</h1>
        <h2 className="mb-3 subtitle">{' < Front End Developer / >'}</h2>
        <p>
          A passionate developer about creating interactive applications and
          build amazing products using web technologies.
        </p>
        <div className="d-flex my-3">
          <Link href="https://github.com/ignaciomarceloaltamirano/">
            <a target="_blank" rel="noopener" className="icon me-2">
              <AiOutlineGithub />
            </a>
          </Link>
          <Link href="https://github.com/ignaciomarceloaltamirano/">
            <a target="_blank" rel="noopener" className="icon">
              <AiOutlineLinkedin />
            </a>
          </Link>
        </div>
        <ScrollLink className="btn btn-contact" to="contact">
          Contact me
        </ScrollLink>
      </motion.div>
      <button
        className={openMenu ? 'd-none' : 'theme-btn'}
        onClick={toggleDarkTheme}
      >
        {darkTheme ? <BsSunFill /> : <BsMoonFill />}
      </button>
      <button
        onClick={() => setOpenMenu((prev) => !prev)}
        className={openMenu ? 'hamburger is-active' : 'hamburger'}
      >
        <div className="bar"></div>
      </button>
      <div
        className={openMenu ? 'menu is-active' : 'menu'}
        onClick={() => {
          openMenu && setOpenMenu(false);
        }}
      >
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-10}
          duration={100}
          onClick={() => setOpenMenu(false)}
          className="link"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-10}
          duration={100}
          onClick={() => setOpenMenu(false)}
          className="link"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          offset={-10}
          duration={100}
          onClick={() => setOpenMenu(false)}
          className="link"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-10}
          duration={100}
          onClick={() => setOpenMenu(false)}
          className="link"
        >
          Contact
        </ScrollLink>
      </div>
    </section>
  );
};

export default Home;
