import { projects } from '../utils/projects';
import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto row">
      <div className="d-flex align-items-center justify-content-start flex-column">
        <h2 className="text-center mb-3 title">Projects</h2>
        <h4>Take a look at my projects</h4>
      </div>
      {projects.map((project) => (
        <Project project={project} key={project.name} />
      ))}
    </section>
  );
};

export default Projects;
