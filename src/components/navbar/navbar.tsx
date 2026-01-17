"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "SKILLS", href: "#skills" },
    { name: "EVOLUTION", href: "#experience" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#70c5ce]/90 border-b-4 border-black py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="group cursor-pointer min-w-0 flex-shrink">
          <span className="font-pixel text-[14px] xs:text-base md:text-xl text-white drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] tracking-tighter flex items-center gap-1">
            <span className="text-yellow-400 group-hover:mr-1 transition-all flex-shrink-0">
              [
            </span>
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">
              <span className="inline sm:hidden">ANSONA</span>
              <span className="hidden sm:inline">ANSONA ANDREWS</span>
            </span>

            <span className="text-yellow-400 group-hover:ml-1 transition-all flex-shrink-0">
              ]
            </span>
          </span>
        </div>

        <ul className="flex gap-6 md:gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-pixel text-[10px] md:text-[12px] text-white hover:text-yellow-300 transition-all drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] flex flex-col items-center group relative pt-4"
              >
                <div className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:-top-1 transition-all duration-200">
                  <ChevronDown
                    size={14}
                    strokeWidth={3}
                    className="text-yellow-400"
                  />
                </div>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
