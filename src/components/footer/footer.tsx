import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative z-30 w-full bg-[#70c5ce]">
      <div className="w-full h-1 bg-black" />
      <div className="max-w-5xl mx-auto flex flex-col items-center py-12 gap-8">
        <div className="relative group inline-block">
          <button
            onClick={() =>
              window.open("https://github.com/Ansona-001", "_blank")
            }
            className="relative block bg-[#e86101] border-[4px] border-black px-10 py-4 active:translate-y-2 hover:bg-[#ff7b21] transition-all cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] group"
          >
            <span className="font-pixel text-[10px] md:text-xs text-white flex items-center gap-3 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
              VISIT_GITHUB
              <SquareArrowOutUpRight
                size={14}
                strokeWidth={3}
                className="group-hover:-translate-y-1 group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </span>
          </button>
        </div>

        <div className="text-center">
          <p className="font-pixel text-[10px] text-white drop-shadow-[2px_2px_0px_black] uppercase tracking-tighter">
            © 2026 ANSONA ANDREWS
          </p>
          <p className="font-pixel text-[8px] text-black/40 mt-1 uppercase">
            All bytes reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
