import profilePic from "../assets/1777633881332.jpg"

export const personalInfo = {
  name: "Maanitha Perera",
  initials: "MP",
  imagePath: profilePic,
  role: "Software Engineering Undergraduate",
  tagline:
    "I build clean, reliable software across the stack - from database design to deployment.",
  status: "Open to developer roles & internships",
  bio: "Passionate and committed Software Engineering undergraduate with hands-on experience across the full stack - from front-end frameworks to backend services and databases. Currently pursuing a BEng(Hons) in Software Engineering degree while contributing to real-world projects.",
  resumeUrl: "Maanitha Perera.pdf",
  socials: {
    github: "https://github.com/maanithadev",
    linkedin: "https://www.linkedin.com/in/maanitha-perera/",
    email: "mailto:maanithabimandith@gmail.com",
  },
};

export const education = [
  {
    id: "beng",
    degree: "BEng(Hons) in Software Engineering",
    institution: "Saegis Campus (Canterbury Christ Church University)",
    period: "In Progress",
    description:
      "Advancing technical and professional expertise in modern software engineering practices.",
  },
  {
    id: "hnd",
    degree: "Higher National Diploma(HND) in Software Engineering",
    institution: "Saegis Campus (Pearson UK)",
    period: "Completed",
    description:
      "Built a strong foundation across programming, databases, and software design.",
  },
  {
    id: "school",
    degree: "Advance Level Examination(A/L) and Ordinary Level Examination(O/L)",
    institution: "St.Joseph's College Colombo 10",
    period: "Completed",
    description:
      "",
  },
];

export const skillGroups = [
  { id: "programming languages", label: "Programming Languages", skills: ["JavaScript", "C#"], },
  { id: "frontend", label: "Frontend", skills: ["React JS", "Tailwind CSS", "Bootstrap", "GSAP"], },
  { id: "backend", label: "Backend", skills: ["Node.js", "Express.js", "REST APIs"] },
  { id: "database", label: "Databases", skills: ["MySQL", "MongoDB"] },
  { id: "baas", label: "Backend-as-a-Service", skills: ["Supabase"] },
  { id: "devops", label: "DevOps & Deployment", skills: ["Git", "GitHub", "Netlify", "Vercel"] },
  { id: "tools", label: "Tools", skills: ["ClickUp", "ProjectLibre", "Figma", "Notion", "WebStorm", "Antigravity", "Postman"] },
];

export const certificates = [
  {
    id: "c1",
    title: "Certificate Title",
    issuer: "Issuing Platform",
    date: "2025",
    credentialUrl: "#",
  },
  {
    id: "c2",
    title: "Certificate Title Two",
    issuer: "Issuing Platform",
    date: "2025",
    credentialUrl: "#",
  },
  {
    id: "c3",
    title: "Certificate Title Three",
    issuer: "Issuing Platform",
    date: "2024",
    credentialUrl: "#",
  },
];

export const projects = [
  {
    id: "01",
    title: "WasteXchange",
    description: "Intelligent Waste Classification and Recommendation System for Industrial Waste Exchange.",
    longDescription: "Industrial waste management remains inefficient due to manual waste classification, limited buyer discovery, and inadequate sustainability monitoring. This project proposes an AI-powered industrial waste exchange platform featuring automated waste classification, buyer recommendation, carbon footprint analytics, real-time messaging, and secure transactions to enhance industrial symbiosis and support circular economy initiatives.",
    year: "2026",
    role: "Full-stack Developer",
    features: [
      "Smart Waste Marketplace",
      "User authentication",
      "Role-based Access(Buyer, Seller, Admin)",
      "Ai Image Classification",
      "Auto Buyers Recommendation",
      "Send Notifications to Correct Buyers",
      "Carbon Dashboard shows savings",
      "Real Time bidirectional Messaging",
      "Payment Handling",
      "Admin Dashboard"
    ],
    stack: ["React", "Node.js", "MongoDB"],
    live: "",
    github: "https://github.com/maanithadev/WasteXchange",
  },
  {
    id: "02",
    title: "Matrix Ai Academy",
    description: "AI Video Production Training Platform with Enrollment Management and Admin Dashboard",
    longDescription: "Matrix AI Academy is a comprehensive online learning platform designed to deliver Sri Lanka's first live AI filmmaking course. The platform combines an engaging public landing page, multi-tier pricing options, and a sophisticated admin dashboard. It features secure Supabase authentication, real-time enrollment processing, detailed student analytics with registration tracking, and customizable website settings. The platform supports multi-language functionality (English & Sinhala), dark mode theming, and provides administrators with powerful tools for managing student registrations, generating analytics reports, and exporting enrollment data in multiple formats.",
    year: "2025",
    role: "Front-end Developer",
    features: [
      "Multi-tier Pricing Plans Management",
      "Multi-language Support (English & Sinhala)",
      "Student Enrollment System with Form Validation",
      "Use of Shadcn/ui components to build the admin dashboard pages",
      "Secure User Authentication (Supabase)",
      "Comprehensive Admin Dashboard with Analytics",
      "Student Database Management with Advanced Filtering",
      "Multi-format Data Export (CSV, Excel, PDF)",
      "Dark Mode Theme with Persistence",
      "Customizable Website Settings",
      "Account & Profile Management",
      "Smooth GSAP Animations & Scroll Effects",
      "WhatsApp Integration for Contact"
    ],
    stack: ["React", "Shadcn/ui", "Supabase"],
    live: "https://www.matrixaiacademy.com/",
    github: "",
  },
  {
    id: "03",
    title: "Adcore Creative",
    description: "Modern Creative Portfolio with Animations to Showcase Platform built for a company called Adcore Creative.",
    longDescription: "This project proposes a creative portfolio platform featuring smooth GSAP animations, Material Design components, responsive Tailwind styling, and optimized Vite build tooling.",
    year: "2025",
    role: "Front-end Developer",
    features: [
      "GSAP-powered smooth animations for interactive visual storytelling",
      "Tailwind CSS for device-adaptive, modern design",
      "Professional Material UI integration for polished interface"
    ],
    stack: ["React", "Tailwind CSS"],
    live: "https://adcore-creative.netlify.app/",
    github: "https://github.com/maanithadev/Adcore_Creative",
  },
  {
    id: "04",
    title: "HelaNova Solutions",
    description: "A modern, responsive portfolio website showcasing professional services and solutions with a sleek, user-friendly interface.",
    longDescription: "HelaNova solution portfolio website designed to showcase services and expertise in a modern, interactive format. The project leverages React with Vite for fast development and build performance, styled with Tailwind CSS for responsive design. It features smooth navigation, icon integration through React Icons, and client-side routing capabilities to deliver a seamless user experience across different service sections and webpages.",
    year: "2026",
    role: "Front-end Developer",
    features: [
      "Responsive Design",
      "Tailwind CSS styling for contemporary",
      "clean aesthetics",
    ],
    stack: ["React", "Tailwind CSS"],
    live: "https://helanovasolution.online/",
    github: "",
  },
  {
    id: "05",
    title: "HND Web Assignment Ecommerce",
    description: "A frontend e-commerce platform built with HTML, CSS, and JavaScript featuring product browsing and shopping cart functionality.",
    longDescription: "This e-commerce project is a web-based shopping platform developed as a HND (Higher National Diploma) assignment. It provides a complete user interface for online shopping, including product listing pages, shopping cart management, and checkout processes. Built primarily with vanilla HTML, CSS, and JavaScript for the frontend, the platform emphasizes responsive design and user-friendly navigation for seamless shopping experiences.",
    year: "2024",
    role: "Full-stack Developer",
    features: [
      "Browse product information",
      "Add, remove, and modify items from Cart with real-time updates",
      "Complete order flow",
      "Responsive Design"
    ],
    stack: ["HTML", "CSS", "JS", "Bootstrap"],
    live: "",
    github: "https://github.com/maanithadev/HND_Web_Assignment_Ecommerce",
  },
  {
    id: "06",
    title: "Maanitha Portfolio",
    description: "A modern, responsive personal portfolio website built with React, featuring smooth animations and elegant styling with Tailwind CSS and GSAP.",
    longDescription: "Maanitha's Portfolio is designed to highlight professional work and skills. Built with React for dynamic interactivity and Vite for optimal performance, the project leverages Tailwind CSS for responsive, utility-first styling and GSAP for smooth, engaging animations. The portfolio demonstrates modern web development practices",
    year: "2026",
    role: "Front-end Developer",
    features: [
      "Responsive Design",
      "GSAP-powered transitions and interactive effects",
      "Tailwind CSS for consistent, professional aesthetics",
      "React-based dynamic UI elements",
      "Dedicated sections to display work and skills",
      "Integrated backend with Supabase for Contact form submission data handling"
    ],
    stack: ["React", "Tailwind CSS", "GSAP", "Supabase"],
    live: "https://maanitha-perera-portfolio.netlify.app",
    github: "https://github.com/maanithadev/Maanitha_Portfolio",
  },
];