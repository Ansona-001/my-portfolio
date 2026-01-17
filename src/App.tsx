"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cloud } from "lucide-react";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-[#70c5ce]">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ x: [-20, 20, -20], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] text-white/40"
        >
          <Cloud size={80} fill="currentColor" stroke="none" />
        </motion.div>
        <motion.div
          animate={{ x: [10, -10, 10], y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-[15%] text-white/50"
        >
          <Cloud size={120} fill="currentColor" stroke="none" />
        </motion.div>
        <motion.div
          animate={{ x: [-30, 30, -30] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[40%] left-[20%] text-white/30"
        >
          <Cloud size={100} fill="currentColor" stroke="none" />
        </motion.div>
      </div>

      <Navbar />

      <main className="relative z-10 container mx-auto px-6 max-w-5xl flex-grow">
        <section
          id="home"
          className="min-h-[85vh] flex items-center justify-center"
        >
          <Intro />
        </section>
        <section id="skills" className="py-24">
          <Skills />
        </section>
        <section id="experience" className="py-24">
          <Experience />
        </section>
        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>

      <div className="fixed bottom-0 left-0 w-full h-24 z-20 overflow-hidden border-t-4 border-black pointer-events-none">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="flex w-[200%] h-full"
        >
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-40 h-full flex flex-col">
              <div className="h-4 bg-[#73bf2e] border-b-4 border-black" />
              <div className="flex-grow bg-[#ded895]" />
            </div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
