import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a
          href="https://www.linkedin.com/in/ansonaa/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/Ansona-001"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>

        <a href="mailto:ansonarose@gmail.com" className="footer-link">
          <Mail size={20} />
          <span>Email</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
