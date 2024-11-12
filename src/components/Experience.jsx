import React, { useEffect, useState } from 'react';
import '../CSS/Experience.css';

import { fetchData } from '../ApiFetch/FetchApi';
import Loading from '../Loading.jsx/Loading';

function Experience() {

  const [Experience, setExperience] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInfoData() {
      try {
        const endpoint = 'experience';
        const result = await fetchData(endpoint);
        console.log('result = ', result);

        setTimeout(() => {
          setExperience(result);
        }, 1000);

      } catch (err) {
        setError(err.message);
      }
    };

    fetchInfoData();

  }, []);

  return (
    <section className="expabout">
      <div className='experience-heading'>About Experience</div>
      {Experience ? (
        <div className="experience-container">
          {Experience.map((ele, index) => (
            <div className="experience-card" key={index}>
              <h3 className="company-name">{ele.companyname}</h3>
              <p className="position">{ele.position}</p>
              <p className="description">{ele.projectdescription}</p>
              <p className="skills">{ele.usedskills}</p>
              <p className="address">{ele.companyaddr}</p>
            </div>
          ))}
        </div>
      ) : error ? <div style={{ color: 'var(--text-color)' }}>{error}</div> :
        (
          <Loading/>
        )}
    </section>
  );
}

export default Experience;