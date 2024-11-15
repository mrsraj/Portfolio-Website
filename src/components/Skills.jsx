import React, { useEffect, useState, useRef } from 'react';
import styles from '../CSS/Skills.module.css';
import { fetchData } from '../ApiFetch/FetchApi';
import Loading from '../Loading.jsx/Loading';

function Skills() {
  const [skills, setSkills] = useState(null);
  const [error, setError] = useState(null);
  const [hasFetched, setHasFetched] = useState(false);
  const skillsSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFetched) {
          fetchSkillsData();
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => {
      if (skillsSectionRef.current) {
        console.log("unobserve");

        observer.unobserve(skillsSectionRef.current);
      }
    };
  }, [hasFetched]); 

  const fetchSkillsData = async () => {
    try {
      setHasFetched(true); 
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

  return (
    <section className={styles.about_skills} id="skills" ref={skillsSectionRef}>
      <div className={styles.skills_heading}>About skills</div>
      {skills ? (
        <div className={styles.skills_container}>
          {skills.map((ele, index) => (
            <div className={styles.skill_card} key={index}>
              <div className={styles.skill_img_div}>
                <img className={styles.skill_img}
                  src={ele.skills_logo ? ele.skills_logo : "image"}
                  alt="Skill logo"
                />
              </div>
              <h3 className={styles.skill_names}>{ele.skills}</h3>
            </div>
          ))}
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