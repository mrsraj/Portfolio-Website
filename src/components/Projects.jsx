import React, { useState, useEffect } from 'react';
import '../CSS/Project.css';
import { fetchData } from '../ApiFetch/FetchApi';
import Loading from '../Loading.jsx/Loading';

function Projects() {
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInfoData() {
      try {
        const endpoint = 'project';
        const result = await fetchData(endpoint);

        // Simulating a delay for loading effect
        setTimeout(() => {
          setProjects(result);
        }, 1000);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchInfoData();
  }, []);

  return (
    <section className="about-project" id='projects'>
      <div className='project-heading'>Projects</div>
      {projects ? (
        <div className="project-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className='project-name'>{project.title}</h3>
              <p className='project-desc'>{project.descriptions}</p>
              <p className='project-usedskills'>{project.usedSkills}</p>
              <div className=''>
                <a href={project.weblink ? project.weblink : ""}>Web Link</a>
                <a href={project.gitlink ? project.gitlink : ""}>git Code</a>
              </div>
            </div>
          ))}
        </div>
      ) : error ? <div style={{ color: 'var(--text-color)' }}>{error}</div> :
        (
          <Loading />
        )}
    </section>
  );
}

export default Projects;