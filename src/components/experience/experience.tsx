import { Play } from "lucide-react";
import { experiences, type ExperienceItem } from "../../data/experience";

const Experience = () => (
  <div id="quest" className="space-y-12">
    <div className="text-center">
      <h2 className="font-pixel text-2xl md:text-3xl text-white drop-shadow-[4px_4px_0px_black] uppercase">
        CAREER_EVOLUTION
      </h2>
    </div>

    <div className="max-w-4xl mx-auto uppercase">
      {experiences.map((exp: ExperienceItem, index: number) => (
        <div
          key={index}
          className="relative bg-[#ded895] border-4 border-black p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="flex flex-col md:flex-row justify-between items-start border-b-4 border-black pb-6 mb-8 gap-4">
            <div>
              <h3 className="font-pixel text-lg md:text-xl text-black">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <p className="font-pixel text-[#e86101] text-xs md:text-sm">
                  @ {exp.company}
                </p>
                <span className="text-black/20 text-xs">|</span>
                <p className="font-pixel text-black/50 text-[10px] md:text-xs">
                  Dubai, UAE
                </p>
              </div>
            </div>
            <div className="bg-black text-white px-3 py-1.5 border-2 border-white/20">
              <span className="font-pixel text-[10px] md:text-xs tracking-tighter">
                {exp.period}
              </span>
            </div>
          </div>

          <div className="space-y-10">
            {[
              {
                label: "STAGE_03: ARCHITECTURE",
                startIndex: 0,
                endIndex: 3,
                color: "#e86101",
              },
              {
                label: "STAGE_02: FULLSTACK",
                startIndex: 3,
                endIndex: 6,
                color: "#558022",
              },
              {
                label: "STAGE_01: FOUNDATIONS",
                startIndex: 6,
                endIndex: 9,
                color: "#73bf2e",
              },
            ].map((phase, pIndex) => (
              <div
                key={pIndex}
                className="flex flex-col md:flex-row gap-4 md:gap-8"
              >
                <div className="md:w-52 shrink-0">
                  <h4
                    className="font-pixel text-[10px] px-2 py-1 border-2 border-black inline-block w-full text-center shadow-[2px_2px_0px_black] text-white"
                    style={{ backgroundColor: phase.color }}
                  >
                    {phase.label}
                  </h4>
                </div>

                <ul className="flex-1 font-pixel text-black text-xs md:text-sm leading-relaxed space-y-4">
                  {exp.points
                    .slice(phase.startIndex, phase.endIndex)
                    .map((p, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <Play
                            size={10}
                            fill={phase.color}
                            className="text-transparent"
                          />
                        </div>
                        <span className="border-b border-black/5 pb-1 w-full leading-tight">
                          {p}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-3 -right-2 bg-white border-2 border-black px-3 py-1 shadow-[4px_4px_0px_black] rotate-1">
            <p className="font-pixel text-black text-[9px]">
              TOTAL_TENURE: 4_YEARS
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
