import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    inacap,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Acerca De",
    },
    {
      id: "work",
      title: "Trabajo",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Desarrollador Web",
      icon: web,
    },
    {
      title: "Desarrollador React",
      icon: mobile,
    },
    {
      title: "Desarrollador Backend",
      icon: backend,
    },
    {
      title: "Creador de Contenido",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Inicio en el Desarrollo",
      company_name: "Inacap",
      icon: inacap,
      iconBg: "#E6DEDD",
      date: "Marzo 2023 - Junio 2023",
      points: [
        "Comencé en la carrera en Inacap, primero aprendí lo basico en PSeint.",
        "Con el paso del tiempo aprendí Python y lo practiqué hasta ver resultados que me soprendieran.",
        "Comencé a comprender algoritmos de Python, tomé cursos online para destacar en clase.",
      ],
    },
    {
      title: "Creciendo como Programador",
      company_name: "Inacap",
      icon: inacap,
      iconBg: "#E6DEDD",
      date: "Julio 2023 - Noviembre 2023",
      points: [
        "Me profundicé en la Programacion Orientada a Objetos con Python.",
        "A medida que pasaba el tiempo realicé pequeños proyectos como calculadoras calendarios, etc.",
        "Comencé un curso online sobre Frontend",
        "Aprendi lo basico sobre Html y Css.",
      ],
    },
    {
      title: "Introduccion a React",
      company_name: "Inacap",
      icon: inacap,
      iconBg: "#E6DEDD",
      date: "Marzo 2024 - Junio 2024",
      points: [
        "Empecé a aprender React.",
        "Aprendí lo basico de React como los Componentes y a como exportarlos.",
        "Comencé a realizar mi primer proyecto web con React y Bootstrap.",
        "Comencé a indagar al Backend.",
      ],
    },
    {
      title: "Introduccion al Backend",
      company_name: "Inacap",
      icon: inacap,
      iconBg: "#E6DEDD",
      date: "Julio 2024 - Presente",
      points: [
        "Aprendí a nivel intermedio Git, Brenches, Pull Requests, Commits, etc.",
        "Introduccion a Django, React + Vite a más profundidad.",
        "Manejo de Django, incluyendo sus Models, Settings, Urls y Views.",
        "Desarrollo de este Proyecto.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  