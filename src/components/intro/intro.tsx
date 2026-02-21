import React from "react";
import resumeFile from "../../assets/docs/resume.pdf";
import profilePic from "../../assets/images/profile.jpeg";

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
    <div className="relative flex flex-col items-center text-center space-y-12 px-4">
      {/* Static profile picture */}
      <div className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg z-10">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center gap-4 max-w-2xl z-10">
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
