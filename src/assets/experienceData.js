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
      "Short summary of your impact. Each string becomes a bullet point.",
      "Describe a second thing you built or owned.",
      "Mention a metric or outcome if you have one.",
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
      "Another bullet describing your responsibilities.",
      "A second bullet for this role.",
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
