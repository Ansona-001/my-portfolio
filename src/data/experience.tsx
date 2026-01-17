// src/data/experience.tsx

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    company: "Trasna Solutions",
    period: "2022 - PRESENT",
    points: [
      "Architected scalable React design systems for complex enterprise UI's.",
      "Optimized frontend performance by auditing and refactoring core code.",
      "Took ownership of the technical roadmap for high-priority feature launches.",

      "Developed robust backend services with Python to power dynamic UI's.",
      "Integrated secure user authentication and authorization protocols.",
      "Managed and optimized relational databases for high-data modules.",

      "Developed responsive user interfaces from Figma design specifications.",
      "Built reusable React components to standardize the internal library.",
      "Collaborated with senior engineers to implement and test new features.",
    ],
  },
];
