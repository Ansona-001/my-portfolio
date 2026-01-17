export interface Skill {
  name: string;
  level: number;
  category: string;
}

export const skills: Skill[] = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 95, category: "Language" },
  { name: "TypeScript", level: 90, category: "Language" },
  { name: "Next.js", level: 85, category: "Framework" },
  { name: "Tailwind", level: 95, category: "Styling" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Python", level: 85, category: "Backend" },
  { name: "Flask", level: 80, category: "Backend" },
  { name: "FastAPI", level: 75, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Database" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "Docker", level: 70, category: "DevOps" },
  { name: "CI/CD", level: 90, category: "DevOps" },
];
