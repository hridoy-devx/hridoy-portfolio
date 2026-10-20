// ==========================================
// PROJECTS DATA
// ==========================================

import ecomImage from '../assets/ecom.jpg';
import evenza from '../assets/evenza.jpg';
import coffeeImage from '../assets/Coffee.png';
import demoExamImage from '../assets/Demo Exam.png';
import robotImage from '../assets/Robot.png';

export const projectCategories = ["All", "React", "JavaScript", "UI/UX"];

export const projects = [
  {
    id: 1,
    title: "Ecommerce Website",
    category: "React",
    description: "A fully responsive e-commerce web application featuring cart system, state management, and smooth UI.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    image: ecomImage,
    github: "https://github.com/hridoy-devx",
    liveDemo: "https://cart-quantity-59.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Evenza Website",
    category: "React",
    description: "A gorgeous event management and booking landing page with modern dark mode aesthetic.",
    technologies: ["React.js", "Tailwind CSS"],
    image: evenza,
    github: "https://github.com/hridoy-devx",
    liveDemo: "https://evenza-hazel.vercel.app",
    featured: true
  },
  {
    id: 3,
    title: "Coffee Shop Landing",
    category: "UI/UX",
    description: "An elegant and modern coffee shop landing page with rich visuals and smooth responsive layout.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: coffeeImage,
    github: "https://github.com/hridoy-devx",
    liveDemo: "https://coffee-silk-iota.vercel.app",
    featured: true
  },
  {
    id: 4,
    title: "Demo Exam Platform",
    category: "JavaScript",
    description: "An interactive online examination and quiz assessment platform with real-time feedback.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    image: demoExamImage,
    github: "https://github.com/hridoy-devx",
    liveDemo: "https://deno-exam.vercel.app",
    featured: true
  },
  {
    id: 5,
    title: "Robot Landing Page",
    category: "UI/UX",
    description: "A futuristic robotics and tech landing page featuring clean styling and responsive UI elements.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: robotImage,
    github: "https://github.com/hridoy-devx",
    liveDemo: "https://hridoy-devx.github.io/Landing-page-html-css/",
    featured: true
  }
];