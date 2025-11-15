import React from "react";
import "./intro.css";

const Intro: React.FC = () => {
  return (
    <section id="home" className="intro-section">
      <div className="intro-container">
        <h2 className="intro-name">Ansona Andrews</h2>
        <p className="intro-title">Full Stack Developer</p>
        <p className="intro-description">
          Dynamic Full-Stack Developer with over 3 years of experience in
          crafting engaging web applications that enhance user experience and
          performance. Expertise in developing responsive interfaces using
          ReactJS, while engineering robust backend solutions with Node.js and
          Python. Skilled in implementing secure authentication systems and
          optimising deployment processes through Docker, ensuring seamless
          integration and high code quality. A collaborative team player
          dedicated to leveraging emerging technologies and Agile methodologies
          to drive project success and innovate solutions.
        </p>
        <a href="#contact" className="intro-button">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Intro;
