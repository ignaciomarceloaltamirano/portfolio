import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <section className="container mx-auto row p-0">
      <div className="d-flex justify-content-center align-items-lg-start align-items-center text-lg-left text-center flex-column">
        <h1 className="mb-3">
          Ignacio Altamirano
          {/* <br />
          {' < Front End Developer / >'} */}
        </h1>
        <h2 className="mb-3 subtitle">{' < Front End Developer / >'}</h2>
        <p className="">
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
        <a className="btn btn-contact" href="#contact">
          Contact me
        </a>
      </div>
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
        <Link href="#home">
          <a className="mb-3" onClick={() => setOpenMenu(false)}>
            Home
          </a>
        </Link>
        <Link href="#about">
          <a className="mb-3" onClick={() => setOpenMenu(false)}>
            About
          </a>
        </Link>
        <Link href="#projects">
          <a className="mb-3" onClick={() => setOpenMenu(false)}>
            {' '}
            Projects
          </a>
        </Link>
        <Link href="#contact">
          <a onClick={() => setOpenMenu(false)}>Contact</a>
        </Link>
      </div>
    </section>
  );
};

export default Home;
