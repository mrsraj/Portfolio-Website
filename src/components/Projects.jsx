import React from 'react';
import '../CSS/Project.css'

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Project 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <img src="project1.jpg" alt="Project 1" className="project-image" />
        </li>
        <li>
          <h3>Project 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <img src="project2.jpg" alt="Project 2" className="project-image" />
        </li>
      </ul>
    </section>
  );
}

export default Projects;