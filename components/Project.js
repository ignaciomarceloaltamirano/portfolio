import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Project = ({ project }) => {
  const { name, image, text, technologies, demo, github } = project;
  const scrollRef = useRef(null);
  return (
    <motion.div className="row my-3 mx-auto" ref={scrollRef}>
      <motion.div
        initial={{
          opacity: 0,
          clipPath: 'polygon(0 1%, 0 0, 0 100%, 0% 100%)',
        }}
        whileInView={{
          opacity: 1,
          clipPath: 'polygon(0 1%, 100% 0, 100% 100%, 0 100%)',
        }}
        viewport={{ once: true, scrollRef }}
        transition={{ type: 'spring', duration: 1.5 }}
        className="col-md-6 d-flex flex-column align-items-center justify-content-center my-3 p-0"
      >
        <Image src={image} height={500} width={700} alt="Project image" />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          clipPath: 'polygon(0 1%, 0 0, 0 100%, 0% 100%)',
        }}
        whileInView={{
          opacity: 1,
          clipPath: 'polygon(0 1%, 100% 0, 100% 100%, 0 100%)',
        }}
        viewport={{ once: true, scrollRef }}
        transition={{ type: 'spring', duration: 1.5 }}
        className="col-md-6 d-flex flex-column align-items-start justify-content-center p-3"
      >
        <h4 className="position-relative  project-name">{name}</h4>
        <div className="my-3">
          <p>{text}</p>
        </div>
        <h5 className="mb-3">
          Technologies:
          <span className="ms-2 technologies">{technologies}</span>
        </h5>
        <div className="d-flex justify-content-around w-100 mt-3">
          <Link href={demo}>
            <a
              className="btn btn-projects align-self-center"
              target="_blank"
              rel="noopener"
            >
              View Live
            </a>
          </Link>
          <Link href={github}>
            <a
              className="btn btn-projects align-self-center"
              target="_blank"
              rel="noopener"
            >
              Github
            </a>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
