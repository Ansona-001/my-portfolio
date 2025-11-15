"use client";

import React from "react";
import { motion, easeOut, backOut } from "framer-motion";
import "./intro.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: backOut },
  },
};
const Intro: React.FC = () => {
  return (
    <section
      id="home"
      className="intro-section"
      aria-labelledby="intro-heading"
    >
      <div className="intro-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-6 sm:space-y-7"
        >
          <motion.h1
            id="intro-heading"
            variants={itemVariants}
            className="intro-name"
          >
            Ansona Andrews
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="intro-title"
            aria-label="Full Stack Developer"
          >
            Full Stack Developer
          </motion.p>
          <motion.p variants={itemVariants} className="intro-description">
            With 3+ years of experience building clean, user-focused web
            applications, I create smooth interfaces with ReactJS and develop
            secure, scalable backends using Node.js and Python. Passionate about
            writing quality code, using Docker for efficient deployment, and
            collaborating to build products that truly make an impact.
          </motion.p>

          <motion.a
            href="#contact"
            variants={buttonVariants}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
            }}
            whileTap={{ scale: 0.96 }}
            className="intro-button"
            aria-label="Contact Ansona Andrews"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Intro);
