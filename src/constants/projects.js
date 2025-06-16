import { project1, project2, project3, project4, project5 } from "../assets";

export const projects = [
  {
    id: "1",
    title: "Thread Harvest",
    description:
      "Developed a multithreaded web scraper in Node.js with batching, achieving a 50% performance boost through parallel processing strategies and caching with Redis.",
    techStack: "JS, Node.js, Puppeteer, Redis",
    highlights: [
      "multithreaded",
      "50%",
      "batching",
      "caching",
    ],
    image: project5,
    links: {
      github: "https://github.com/sourabhsikarwar/MultiThreaded-WebScraper",
    },
    layout: "reverse",
  },
  {
    id: "2",
    title: "Scene - OTT Platform",
    description:
      "Scene brings a world of content right to your fingertips, offering a rich library of movies, TV shows, and exclusive content, all designed to captivate and entertain.",
    techStack: "React.js, Firebase, TailwindCSS",
    additionalInfo: "Open Sourced at GirlScript Summer of Code'23",
    highlights: ["rich library of movies", "dynamic content"],
    image: project2,
    links: {
      github: "https://github.com/sourabhsikarwar/Scene-Movie-Platform",
      live: "https://scene-admin.vercel.app/",
    },
    layout: "normal",
  },
  {
    id: "3",
    title: "In A Bin",
    description:
      "In A Bin is a comprehensive waste management platform designed to address the growing environmental concerns related to improper waste disposal and streamline waste management operations.",
    techStack: "React.js, Node.js, Express.js, MongoDB, TailwindCSS",
    highlights: ["waste management platform"],
    image: project1,
    links: {
      github: "https://github.com/sourabhsikarwar/Inabin-Waste-management-app",
    },
    layout: "reverse",
  },
  {
    id: "4",
    title: "Dennis Dubbala Portfolio",
    description:
      "Personal Portfolio website with dynamic content, project and testimonial management system. It also has a dark mode toggle feature.",
    techStack: "React.js, Firebase, TailwindCSS",
    image: project4,
    links: {
      live: "https://www.dubbala.com/",
    },
    layout: "normal",
  },
  {
    id: "5",
    title: "Zoak",
    description:
      "Online web presence for the appointment booking system of Zoak. Zoak is a startup that provides a platform for the users to book appointments with the vendor businesses.",
    techStack: "HTML, CSS, JS, TailwindCSS",
    image: project3,
    links: {
      github: "https://github.com/sourabhsikarwar/Zoak",
    },
    layout: "normal",
  },
];
