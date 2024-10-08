import React, { useEffect, useState } from 'react';
import '../CSS/Experience.css'

import { fetchData } from '../ApiFetch/FetchApi';

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

  if (error) return <div>Error: {error}</div>;

  return (
    <section id="about" className="about">
      <h2 className='Experience-heading'>About Experience</h2>
      {Experience ? (
        Experience.map((ele, index) => (
          <div key={index}>
            <h3>{ele.companyname}</h3>
            <p>{ele.position}</p>
            <p>{ele.projectdescription}</p>
            <p>{ele.usedskills}</p>
            <p>{ele.companyaddr}</p>
          </div>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
}

export default Experience;