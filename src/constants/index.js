import {
  html,
  js,
  ts,
  react,
  nextjs,
  firebase,
  nodejs,
  express,
  mongodb,
  redis,
  graphql,
  mysql,
  css,
  tailwind,
  frontend,
  backend,
  app,
  layer,
  code,
  figma,
  rest,
  leetcode,
  postgresql,
  strapi,
  project5,
  p2,
  p3,
  p4,
  p5,
  p1,
  git,
  golang
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "testimonial",
    title: "Testimonial",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: frontend,
    title: "Front-end Technologies",
    content:
      "I specialize in crafting captivating user interfaces using HTML5, CSS3, and JavaScript frameworks like React and Next.js. I ensure that every user interaction is smooth and visually engaging.",
  },
  {
    id: "feature-2",
    icon: backend,
    title: "Back-end Development",
    content:
      "I work with server-side technologies such as Node.js, Express.js and have experience with services like firebase to create efficient and scalable back-end systems.",
  },
  {
    id: "feature-3",
    icon: app,
    title: "Continues Learning",
    content:
      "Staying updated with the ever-evolving tech landscape is my commitment. I'm constantly learning and experimenting with new technologies and trends to provide you with cutting-edge solutions.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: "",
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: "",
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: "",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    link: "https://www.instagram.com/sourabh_sikarwar_/",
    pathD:
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    id: "social-media-2",
    link: "https://www.github.com/sourabhsikarwar/",
    pathD:
      "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    id: "social-media-3",
    link: "https://leetcode.com/sourabhsikarwar/",
    pathD:
      "M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355zM3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z",
  },
  {
    id: "social-media-3",
    link: "https://twitter.com/Sourabhs1802",
    pathD:
      "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
  },
  {
    id: "social-media-4",
    link: "https://www.linkedin.com/in/sourabhsikarwar/",
    pathD:
      "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
  },
];

export const skills = [
  {
    id: "1",
    title: "Languages",
    skillSet: [
      {
        id: "1",
        img: js,
        title: "JavaScript",
        rate: 60,
      },
      {
        id: "2",
        img: ts,
        title: "TypeScript",
        rate: 90,
      },
      {
        id: "3",
        img: golang,
        title: "Golang",
        rate: 60,
      },
    ],
  },
  {
    id: "2",
    title: "Frontend",
    skillSet: [
      {
        id: "1",
        img: nextjs,
        title: "Next.js",
        rate: 60,
      },
      {
        id: "2",
        img: html,
        title: "HTML",
        rate: 90,
      },
      {
        id: "3",
        img: css,
        title: "CSS",
        rate: 90,
      },
      {
        id: "7",
        img: tailwind,
        title: "TailwindCSS",
        rate: 80,
      },
    ],
  },
  {
    id: "3",
    title: "Backend",
    skillSet: [
      {
        id: "1",
        img: nodejs,
        title: "Node.js",
        rate: 70,
      },
      {
        id: "2",
        img: express,
        title: "Express.js",
        rate: 70,
      },
      {
        id: "3",
        img: mongodb,
        title: "MongoDB",
        rate: 75,
      },
      {
        id: "4",
        img: firebase,
        title: "Firebase",
        rate: 60,
      },
    ],
  },
  {
    id: "4",
    title: "Others",
    skillSet: [
      {
        id: "1",
        img: rest,
        title: "REST API",
        rate: 70,
      },
      {
        id: "4",
        img: git,
        title: "Git",
        rate: 70,
      },
      {
        id: "2",
        img: strapi,
        title: "StrapiCMS",
        rate: 20,
      },
      {
        id: "3",
        img: figma,
        title: "Figma",
        rate: 75,
      },
    ],
  },
];

export const projectsArr = [
  {
    id: 1,
    title: "Thread Harvest",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor.",
    tech: ["JS", "Node.js", "Puppeteer", "Redis"],
    live: "",
    github: "https://github.com/sourabhsikarwar/MultiThreaded-WebScraper",
    image: p1,
  },
  {
    id: 2,
    title: "Thread Harvest",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor.",
    tech: ["JS", "Node.js", "Puppeteer", "Redis"],
    live: "",
    github: "https://github.com/sourabhsikarwar/MultiThreaded-WebScraper",
    image: p2,
  },
  {
    id: 3,
    title: "Thread Harvest",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor.",
    tech: ["JS", "Node.js", "Puppeteer", "Redis"],
    live: "",
    github: "https://github.com/sourabhsikarwar/MultiThreaded-WebScraper",
    image: p3,
  },
  {
    id: 4,
    title: "Thread Harvest",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor.",
    tech: ["JS", "Node.js", "Puppeteer", "Redis"],
    live: "",
    github: "https://github.com/sourabhsikarwar/MultiThreaded-WebScraper",
    image: p4,
  },
  {
    id: 5,
    title: "Thread Harvest",
    description: "",
    tech: ["JS", "Node.js", "Puppeteer", "Redis"],
    live: "",
    github: "https://github.com/sourabhsikarwar/MultiThreaded-WebScraper",
    image: p5,
  },
];
