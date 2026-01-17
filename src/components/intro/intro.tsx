"use client";
import React from "react";
import { motion } from "framer-motion";
import resumeFile from "../../assets/docs/resume.pdf";

const Intro: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center text-center space-y-12 px-4">
      <motion.div
        animate={{
          x: [-15, 15, -15],
          y: [0, -25, 0],
          rotate: [-5, 10, -5],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut",
        }}
        className="relative w-24 h-24 sm:w-32 sm:h-32"
      >
        <img
          src="/images/bird.png"
          alt="Flappy Bird"
          className="w-full h-full object-contain rendering-pixelated drop-shadow-[6px_6px_0px_rgba(0,0,0,0.3)]"
        />
      </motion.div>

      <div className="flex flex-col items-center gap-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-pixel text-white drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] uppercase tracking-tighter leading-tight">
          SOFTWARE DEVELOPER
        </h1>

        <p className="font-pixel text-[13px] md:text-[16px] text-white leading-relaxed max-w-sm md:max-w-md drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)] px-2">
          Navigating through complex codebases and dodging bugs to build
          seamless digital experiences.
        </p>

        <div className="relative group inline-block mt-4">
          <button
            onClick={handleDownload}
            className="relative block bg-[#e86101] border-[4px] border-black px-10 py-4 active:translate-y-2 hover:bg-[#ff7b21] transition-all cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <span className="font-pixel text-[10px] md:text-xs text-white flex items-center gap-3 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)] uppercase">
              Download_Resume
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
