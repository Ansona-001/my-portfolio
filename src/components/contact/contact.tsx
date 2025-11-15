import React from "react";
import { Mail, Phone } from "lucide-react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-info">
              <div className="contact-icon-box">
                <Mail className="contact-icon" />
              </div>
              <div className="contact-text">
                <p className="contact-label">Email me</p>
                <p className="contact-detail">ansonarose@gmail.com</p>
              </div>
            </div>
            <a href="mailto:ansonarose@gmail.com" className="contact-link">
              ↗
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-info">
              <div className="contact-icon-box">
                <Phone className="contact-icon" />
              </div>
              <div className="contact-text">
                <p className="contact-label">Call me</p>
                <p className="contact-detail">+971(0)50 194 5770</p>
              </div>
            </div>
            <a href="tel:0501945770" className="contact-link">
              ↗
            </a>
          </div>
        </div>

        <p className="contact-footer">
          I’d love to connect — feel free to drop an email or message!
        </p>
      </div>
    </section>
  );
};

export default Contact;
