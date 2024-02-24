import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cSharp,
    unity,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "cSharp",
      icon: cSharp,
    },
    {
      name: "unity",
      icon: unity,
    },
  
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "React",
      icon: reactjs,
      iconBg: "#383E56",
      date: "May 2023 - present",
      points: [
        "Developed a user-friendly dashboard using React.js and Tailwind CSS for Sojourn Cabins.",
        "Collaborated in UI/UX design and frontend development for various projects, including Sojourn Cabins and Doctor Booking Website.",
        "Led frontend development and provided backend support for the Doctor Booking Website, leveraging React.js, Tailwind CSS, Node.js, Express.js, and MongoDB.",
        "Contributed to the development of a frontend dashboard for Sojourn Cabins, facilitating streamlined management of bookings and guest information using React.js and Tailwind CSS." ,
      ],
    },
  
    {
      title: "Web Developer",
      company_name: "C#,HTML,CSS,JavaScript",
      icon: cSharp,
      iconBg: "#383E56",
      date: "Jan 2022 - present",
      points: [
        "Developed console applications in C# and built web applications using C# and ASP.NET MVC during the NCR (National Cash Registry) Internship.",
        "Contributed to the development of a user-friendly online booking platform for Sojourn Cabins, focusing on UI/UX design and frontend development." ,
        "Led frontend development and provided backend support for the Doctor Booking Website, utilizing web development technologies such as React.js, Tailwind CSS, Node.js, Express.js, and MongoDB." ,
       " Developed a frontend dashboard for Sojourn Cabins, enhancing management of bookings and guest information using React.js and Tailwind CSS.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Mern Stack",
      icon: nodejs,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js, Tailwind CSS, C# ASP.Net, Node JS.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

    {
      title: "Game Developer",
      company_name: "Unity",
      icon: unity,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - present",
      points: [
        "Individually developed a captivating first-person shooter game in Unity, optimizing game mechanics and interactions using C#.",
       "Leveraged built-in assets from the Unity Asset Store to create dynamic environments, challenging adversaries, and engaging gameplay.",
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
      demo_link: "http://www.demo.com" ,
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
      demo_link: "http://www.demo.com" ,
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
      demo_link: "http://www.demo.com" ,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };