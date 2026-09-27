/** Resume-supported content only. Do not invent facts beyond this file. */

export const profile = {
  name: "Tejaswini Uppu",
  shortName: "Tejaswini",
  role: "Full-Stack Engineer",
  stackLine: "React • TypeScript • Node.js • AI",
  location: "Hyderabad, India",
  email: "aswinitej27@gmail.com",
  github: "https://github.com/AswiniUppu",
  linkedin: "https://www.linkedin.com/in/tejaswini-uppu-0a608326b/",
  tagline: "I don't just build interfaces. I build systems that come alive.",
  heading: "I build digital systems that come alive.",
  support: "React interfaces. TypeScript systems. AI-powered experiences.",
  description:
    "Full-stack engineer crafting production React and TypeScript systems, AI-powered experiences, and reusable component layers that ship to real users.",
  status: "OPEN TO BUILDING",
} as const;

export const navDesktop = [
  { id: "01", label: "HOME", href: "/#core" },
  { id: "02", label: "ENGINE", href: "/#engine" },
  { id: "03", label: "JOURNEY", href: "/#journey" },
  { id: "04", label: "LAB", href: "/#lab" },
  { id: "05", label: "IMPACT", href: "/#impact" },
  { id: "06", label: "CONTACT", href: "/#contact" },
] as const;

export const navMobile = [
  { label: "HOME", href: "/#core" },
  { label: "ABOUT", href: "/about" },
  { label: "EXPERIENCE", href: "/experience" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT", href: "/contact" },
] as const;

export const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    line: "Core languages for product and data work.",
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
    color: "#8B5CF6",
  },
  {
    id: "frontend",
    label: "Frontend",
    line: "Component-based interfaces that stay responsive.",
    skills: [
      "React.js",
      "TypeScript",
      "Tailwind",
      "HTML5",
      "CSS3",
      "Responsive UI",
      "Component-Based UI",
    ],
    color: "#22D3EE",
  },
  {
    id: "backend",
    label: "Backend",
    line: "APIs and services that power production apps.",
    skills: ["Node.js", "Express.js", "REST APIs"],
    color: "#3B82F6",
  },
  {
    id: "databases",
    label: "Databases",
    line: "Reliable data layers across product surfaces.",
    skills: ["PostgreSQL", "MySQL", "SQLite"],
    color: "#A78BFA",
  },
  {
    id: "ai",
    label: "AI & Integrations",
    line: "AI content, dynamic UI, and payment/logistics hooks.",
    skills: [
      "OpenAI APIs",
      "AI-driven content generation",
      "Dynamic UI rendering",
      "Razorpay",
      "Shiprocket",
    ],
    color: "#F472B6",
  },
  {
    id: "devops",
    label: "DevOps",
    line: "Ship with CI/CD, containers, and API tooling.",
    skills: ["Git", "GitHub", "Jenkins CI/CD", "Docker", "Postman"],
    color: "#38BDF8",
  },
] as const;

export const timeline = [
  {
    id: "education",
    period: "2018–2024",
    title: "B.Tech., Computer Science Engineering",
    org: "RGUKT",
    detail: "CGPA 9.0/10",
  },
  {
    id: "visys",
    period: "May 2024 – Present",
    title: "Full-Stack Developer",
    org: "Visys Cloud Technologies",
    detail: "Building production applications for real users.",
  },
] as const;

export const visys = {
  heading: "BUILDING FOR REAL USERS",
  stat: "6+ Production Applications",
  statNote: "Resume-supported",
  system: ["CLIENT", "REACT/TS", "NODE/EXPRESS", "REST APIs", "DATABASE"],
  contributions: [
    "AI4Bazaar component layer",
    "Reusable UI library",
    "OpenAI integrations",
    "Jenkins CI/CD pipelines",
    "JWT authentication",
    "Razorpay payments",
    "Shiprocket logistics",
    "Client requirement gathering",
  ],
} as const;

export const projects = [
  {
    id: "ai4bazaar",
    name: "AI4Bazaar",
    theme: "Automated website generator",
    centerpiece: true,
    description:
      "Turns a prompt into a complete, live client website. The React and TypeScript interface renders AI-generated site structures and content.",
    highlights: [
      "Generated 200+ functional client websites",
      "Each website went live within 10 minutes",
      "One-click CI/CD cut go-live time by about 90%",
    ],
    stats: [
      {
        label: "200+ websites",
        note: "generated for clients",
      },
      {
        label: "Under 10 minutes",
        note: "from input to live website",
      },
    ],
    stack: ["React", "TypeScript", "Node.js", "OpenAI APIs", "Jenkins CI/CD"],
  },
  {
    id: "rdvp",
    name: "RDVP",
    theme: "Ridex Digital Vehicle Passport",
    centerpiece: false,
    description:
      "A digital vehicle passport with real-time user workflows and phone number masking for private communication.",
    highlights: [
      "Masked phone numbers between users",
      "Responsive interfaces and REST APIs",
      "Zero privacy incidents",
    ],
    stack: ["PostgreSQL", "Express", "React", "Node.js"],
  },
  {
    id: "learning-platforms",
    name: "Cloud4CoolKids & AI4Mahila",
    theme: "E-learning platforms",
    centerpiece: false,
    description:
      "Learning platforms for multiple cohorts, with tools to manage courses, follow progress, and assess learning.",
    highlights: [
      "Authentication and course management",
      "Real-time progress tracking",
      "Interactive lessons and assessments",
    ],
    stack: ["PostgreSQL", "Express", "React", "Node.js"],
  },
] as const;

export const systems = {
  heading: "SYSTEMS, NOT JUST SCREENS",
  components: [
    "BUTTON",
    "CARD",
    "MODAL",
    "NAVBAR",
    "FORM",
    "TABLE",
    "DASHBOARD",
  ],
  note: "One change updates many apps across 6+ production applications.",
} as const;

export const cicd = {
  stages: ["CODE", "GIT", "JENKINS", "BUILD", "TEST", "DEPLOY", "LIVE"],
  reduction: "~90% deployment-time reduction",
  reductionNote: "Resume-reported",
} as const;

export const awards = [
  { id: "icon-2025", name: "Software Engineering Icon Award", year: "2025" },
  { id: "best-2024", name: "Best Employee Award", year: "2024" },
  { id: "excellence", name: "Project Excellence Award", year: null },
] as const;

export const about = {
  heading: "BEYOND THE CODE",
  paragraphs: [
    "Full-stack engineer focused on React and TypeScript systems that ship to production.",
    "Builds AI-powered interfaces, reusable UI layers, and client-facing product experiences.",
    "Grows through shipping production applications and collaborating directly with clients.",
  ],
} as const;

export const heroLabels = [
  "REACT",
  "TYPESCRIPT",
  "NODE.JS",
  "AI",
  "POSTGRESQL",
] as const;
