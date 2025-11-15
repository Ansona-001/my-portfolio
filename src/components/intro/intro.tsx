import React from "react";
import "./intro.css";

const Intro: React.FC = () => {
  return (
    <section id="home" className="intro-section">
      <div className="intro-container">
        <h2 className="intro-name">Ansona Andrews</h2>
        <p className="intro-title">Full Stack Developer</p>
        <p className="intro-description">
          With 3.5 years of experience, I specialize in building responsive,
          high-performance web applications using React, TypeScript, and
          Tailwind CSS.
        </p>
        <a href="#contact" className="intro-button">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Intro;
