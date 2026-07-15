// Portfolio Content Datasets - Customized for Garv Yadav

export const personalInfo = {
  name: "GARV YADAV",
  title: "Software Developer & Full-Stack Engineer",
  subTitle: "Building scalable backend systems, robust database topologies, and responsive web applications.",
  availabilityStatus: "Available for new opportunities",
  email: "garvyadav59@gmail.com",
  phone: "8320902196",
  github: "https://github.com/garv0812",
  linkedin: "https://linkedin.com/in/garv-yadav-9b65452a8",
  location: "Ahmedabad, Gujarat, India",
  formspreeId: "bXZ6ZW9sYnY=" // Base64 obfuscated Formspree ID to prevent scraping
};

export const coreStack = [
  "Python",
  "Django",
  "Flask",
  "C#",
  "React.js",
  "MySQL",
  "SQL Server",
  "REST APIs"
];

export const skillsCategories = [
  {
    title: "Backend & Languages",
    description: "Developing clean, structured server-side logic and modular API endpoints.",
    skills: [
      { name: "Python", level: 90 },
      { name: "Django & Django REST Framework (DRF)", level: 88 },
      { name: "Flask", level: 82 },
      { name: "C# & .NET Core Web API", level: 80 },
      { name: "REST APIs & JSON Serialization", level: 88 }
    ]
  },
  {
    title: "Databases & Design",
    description: "Architecting relational database schemas and writing high-efficiency queries.",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "SQL Server (SSMS)", level: 85 },
      { name: "Relational Database Design", level: 90 },
      { name: "Stored Procedures & Query Optimization", level: 82 }
    ]
  },
  {
    title: "Frontend Engineering",
    description: "Designing responsive, responsive web layouts and stateful UI modules.",
    skills: [
      { name: "React.js", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5 & CSS3 / SCSS", level: 88 },
      { name: "Responsive Layout Grids", level: 90 }
    ]
  },
  {
    title: "Tools & AI Methodologies",
    description: "Managing project pipelines with source controls and modern prototyping workflows.",
    skills: [
      { name: "Git & GitHub Version Control", level: 88 },
      { name: "Agile / Scrum Methodologies", level: 85 },
      { name: "AI-Assisted Development & Debugging", level: 92 },
      { name: "Technical Documentation", level: 85 }
    ]
  }
];

export const experienceTimeline = [
  {
    id: 1,
    role: "Full Stack Development Trainee",
    company: "Moltech Solutions Pvt Ltd",
    period: "Jan 2026 - June 2026",
    description: "Designed and implemented scalable server-side architectures, streamlined HRMS frameworks, and optimized database queries.",
    metrics: [
      "Built server-side configurations for core payroll modules, attendance logging, and structured applicant data tracking.",
      "Optimized complex stored procedures and database schemas, boosting retrieval speeds for reporting pipelines.",
      "Engineered responsive frontends and backend controllers for high-volume B2B e-commerce platform nodes.",
      "Maintained version control protocols using Git/GitHub, debugging legacy code across cross-functional sprints."
    ]
  }
];

export const education = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "GLS University",
    period: "2024 - 2026"
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Shreyarth University",
    period: "2021 - 2024"
  }
];

export const projects = {
  featured: {
    title: "Cursed Society",
    category: "Featured Full-Stack Platform",
    description: "A comprehensive full-stack e-commerce ecosystem leveraging Django. The backend is structured into 5 modular applications (Accounts, Products, Orders, Marketing, and Support) connected to a highly relational database schema in SQL Server.",
    stats: [
      { label: "Relational Tables", value: "21 Tables" },
      { label: "Django Modules", value: "5 Apps" },
      { label: "API Handlers", value: "DRF Endpoints" }
    ],
    tech: ["Django", "React.js", "Django REST Framework", "SQL Server", "CSS3", "SCSS"],
    githubUrl: "https://github.com/garv0812",
    demoUrl: "https://github.com/garv0812"
  },
  secondary: [
    {
      title: "ProCRM Dashboard",
      description: "A premium, role-based CRM opportunity tracking suite. Features dynamic sales sparkline charts, CSS status funnels, real-time Kanban pipeline drag/drops, live chat messaging threads with auto-replies, task checklists, and an inventory catalog.",
      tech: ["React.js", "Zustand", "Sass", "Recharts", "Local Storage DB"],
      githubUrl: "https://github.com/garv0812/ProCRM.git",
      demoUrl: "https://pro-crm-nu.vercel.app/login"
    },
    {
      title: "HR Recruitment Automation (ATS)",
      description: "Automated candidate pipeline reporting and tracking boards for recruitment candidate statuses, streamlining HR flows.",
      tech: ["Python", "Flask", "MySQL", "CSS3"],
      githubUrl: "https://github.com/garv0812",
      demoUrl: "https://github.com/garv0812"
    },
    {
      title: "Enterprise HRMS Payroll Core",
      description: "A robust Human Resource Management System backend processing attendance parameters and core payroll metrics.",
      tech: ["C#", ".NET Core Web API", "SQL Server"],
      githubUrl: "https://github.com/garv0812",
      demoUrl: "https://github.com/garv0812"
    },
    {
      title: "B2B E-commerce Engine",
      description: "Optimized database design and query handling for high-volume B2B e-commerce platform components.",
      tech: ["Python", "Django", "React", "MySQL"],
      githubUrl: "https://github.com/garv0812",
      demoUrl: "https://github.com/garv0812"
    },
    {
      title: "AI-Assisted Prototyping Scripting",
      description: "Automation shell and API scripting workflows integrating advanced LLM systems for rapid debugging and code optimization.",
      tech: ["Python", "OpenAI API", "Bash", "Markdown"],
      githubUrl: "https://github.com/garv0812",
      demoUrl: "https://github.com/garv0812"
    }
  ]
};
