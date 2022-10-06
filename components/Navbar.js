// import Link from 'next/link';
import { Link } from 'react-scroll';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="nav d-none d-sm-flex justify-content-between align-items-center container">
        <div className="d-flex">
          <Link
            className="logo"
            to="home"
            spy={true}
            smooth={true}
            offset={-10}
            duration={100}
          >
            <h2>IA</h2>
          </Link>
        </div>
        <div className="nav-links">
          <Link
            className="link me-3"
            to="home"
            spy={true}
            smooth={true}
            offset={-10}
            duration={100}
          >
            Home
          </Link>
          <Link
            className="link me-3"
            to="about"
            spy={true}
            smooth={true}
            offset={-10}
            duration={100}
          >
            About
          </Link>
          <Link
            className="link me-3"
            to="projects"
            spy={true}
            smooth={true}
            offset={-10}
            duration={100}
          >
            Projects
          </Link>
          <Link
            className="link me-3"
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={100}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
