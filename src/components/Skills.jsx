import React from 'react';
import '../CSS/Skills.css'

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        <li>
          <i className="fas fa-code"></i>
          <p>HTML/CSS</p>
        </li>
        <li>
          <i className="fas fa-code"></i>
          <p>JavaScript</p>
        </li>
        <li>
          <i className="fas fa-react"></i>
          <p>React</p>
        </li>
        <li>
          <i className="fas fa-server"></i>
          <p>Node.js</p>
        </li>
      </ul>
    </section>
  );
}

export default Skills;