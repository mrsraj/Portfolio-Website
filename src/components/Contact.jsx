import React from 'react';
import '../CSS/Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      <ul>
        <li><a href="mailto:example@example.com">example@example.com</a></li>
        <li><a href="https://www.linkedin.com/in/example">LinkedIn</a></li>
      </ul>
    </section>
  );
}

export default Contact;