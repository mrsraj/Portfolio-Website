import React, { useEffect, useState } from 'react';
import styles from '../CSS/Skills.module.css';
import { fetchData } from '../ApiFetch/FetchApi';
import Loading from '../Loading.jsx/Loading';

function Skills() {

  const [skills, setSkills] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInfoData() {
      try {
        const endpoint = 'skills';
        const result = await fetchData(endpoint);
        console.log('result = ', result);

        setTimeout(() => {
          setSkills(result);
        }, 1000);

      } catch (err) {
        setError(err.message);
      }
    };

    fetchInfoData();

  }, []);

  return (
    <section className={styles.about_skills} id='skills'>
      <div className={styles.skills_heading}>About skills</div>
      {skills ? (
        <div className={styles.skills_container}>
          {
            skills.map((ele, index) => (
              <div className={styles.skill_card} key={index}>

                <div className={styles.skill_img_div}>
                  <img
                    className={styles.skill_img}
                    src={ele.skills_logo ? ele.skills_logo : "image"}
                    alt={ele.skills_logo ? "Skill logo" : "Placeholder image"}
                  />
                </div>

                <h3 className={styles.skill_names}>{ele.skills}</h3>
              </div>
            ))
          }

        </div>
      ) : error ? (
        <div style={{ color: 'var(--text-color)' }}>{error}</div>
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default Skills;