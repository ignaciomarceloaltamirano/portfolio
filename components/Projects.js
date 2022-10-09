import { projects } from '../utils/projects';
import { motion } from 'framer-motion';
import Project from './Project';
import { useRef } from 'react';

const Projects = () => {
  const scrollRef = useRef();
  return (
    <section id="projects" className="container mx-auto row">
      <motion.div
        initial={{ opacity: 0, y: '100%' }}
        whileInView={{ opacity: 1, y: '0' }}
        transition={{ type: 'spring', duration: 1 }}
        viewport={{ once: true, scrollRef }}
        className="d-flex align-items-center justify-content-start flex-column"
      >
        <h2 className="text-center mb-3 title">Projects</h2>
        <h4>Take a look at my projects</h4>
      </motion.div>
      {projects.map((project) => (
        <Project project={project} key={project.name} />
      ))}
    </section>
  );
};

export default Projects;
