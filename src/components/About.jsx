import React from 'react';
import '../CSS/About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      <img src="profile-picture.jpg" alt="Profile Picture" className="profile-picture" />
    </section>
  );
}

export default About;