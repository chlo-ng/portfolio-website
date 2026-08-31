// TODO: replace placeholder entries with your real work history.
// `points` are rendered as bullet points under each role.
// `skills` are rendered as chips under each role (falls back to the global
// `skills` array below when a job doesn't define its own).
const experience = [
  {
    company: "srcLogic",
    companyUrl: "https://www.srclogic.com/",
    role: "Software Engineer / Technical Consultant",
    location: "Hybrid",
    range: "August 2024 — Present",
    points: [
      "Take applications from concept to delivery in 3-6 months, keeping clients in the loop every step of the way.",
      "Trusted by C-suite executives to build company-wide applications that meet a high bar for quality.",
      "Staying adaptable as tools, priorities, and client needs shift — always ready to learn on the fly.",
    ],
    skills: [
      "React",
      "Typescript",
      "Palantir",
      "Tailwind CSS",
      "Pega",
      "Java",
      "JIRA",
    ],
  },
  {
    company: "CarMax",
    companyUrl: "https://www.linkedin.com/company/carmax/",
    role: "Technology Intern",
    location: "Richmond, VA",
    range: "June — August 2023",
    points: [
      "First to test and implement a new company-built UI library, setting the standard for how the rest of the team would build.",
      "Improved a middleware tool between new inventory uploads and the live site, cutting validation time from up to an hour to less than 20 minutes.",
    ],
    skills: ["React", "Typescript", "C#", "Agile"],
  },
];

// Fallback skills used for any role that doesn't define its own `skills`.
const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "UI/UX Design",
  "Figma",
  "User Research",
  "Prototyping",
];

export { experience, skills };
