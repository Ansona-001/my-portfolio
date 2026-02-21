import { skills, type Skill } from "../../data/skills";
import { motion } from "framer-motion";

const Skills = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-4">
    {skills.map((skill: Skill, index: number) => (
      <motion.div key={index} whileHover={{ y: -8 }} className="relative group">
        <div className="absolute inset-0 bg-[#558022] translate-y-2 border-[3px] border-black rounded-sm" />

        <div className="relative bg-[#73bf2e] border-[3px] border-black p-4 flex flex-col items-center shadow-inner">
          <div className="absolute -top-3 left-[-6px] right-[-6px] h-4 bg-[#73bf2e] border-[3px] border-black z-10" />
          <h3 className="font-pixel text-[10px] md:text-[12px] text-white drop-shadow-[2px_2px_0px_black] mb-4 uppercase pt-2">
            {skill.name}
          </h3>

          <div className="w-full h-5 bg-[#558022] border-[3px] border-black p-0.5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white/20 z-10" />

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="h-full bg-[#f7d308] border-r-2 border-black"
            />
          </div>
          <span className="font-pixel text-[8px] text-white/80 mt-2">
            LVL: {skill.level}
          </span>
        </div>
      </motion.div>
    ))}
  </div>
);

export default Skills;
