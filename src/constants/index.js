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
    Wordpress,
    jobit,
    tripguide,
    threejs,
    cSharp,
    unity,
  } from "../assets";
import ecommerce from '../assets/E-cmmerce.png' ;
import NGO from '../assets/NGO.png';
import Doc from '../assets/Doc.png'  
import Edwin from '../assets/Edwin.png'  




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
      name: "Wordpress",
      icon: Wordpress,
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
      title: "Content Mangement System,",
      company_name: "Wordpress",
      icon: Wordpress,
      iconBg: "#E6DEDD",
      date: "June 2024 - Present",
      points: [
        "Created a CMS and website for Naaban's Foundation NGO, enhancing the organization’s online presence and streamlining content management.",
        "Implemented various features to support the NGO's activities, including event management, donation processing, and volunteer coordination",
        "Continuously manage and update the NGO’s website to ensure smooth operation and engagement with stakeholders."
      ],
    },

    {
      title: "Game Developer",
      company_name: "Unity",
      icon: unity,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - May 2024",
      points: [
        "Individually developed a captivating first-person shooter game in Unity, optimizing game mechanics and interactions using C#.",
       "Leveraged built-in assets from the Unity Asset Store to create dynamic environments, challenging adversaries, and engaging gameplay.",
      ],
    },

    {
      title: "UI/UX Designer",
      company_name: "Figma",
      icon: figma,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        " Working collaboratively with a team to design and develop a comprehensive e-commerce website for a client",
       "Leveraging tools like Figma to create and iterate on design concepts",
      ],
    },

  ];
  
    const testimonials = [
      {
        testimonial:
          "Essel designed and developed a user-friendly interface that exceeded our expectations.",
        name: "Sara Lee",
        designation: "Client",
        company: "Mr Mintah",
        image: "",
      },
      {
        testimonial:
          "Essel's attention to detail and dedication to our project made a significant impact on our success.",
        name: "Edwin Nuer",
        designation: "Developer",
        company: "NCR",
        image: Edwin,
      },
      {
        testimonial:
          "After Essel optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Vincent Oppong ",
        designation: "I.T Specialist",
        company: "Inspire Technologies",
        image: "",
      },
    ];
    
  
  const projects = [
    {
      name: "E-Commerce",
      description:
        "Web-based platform that allows users to browse, purchase, and manage a variety of products from different categories, providing a convenient and comprehensive shopping experience",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
       
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/hydi-official/HCI.git",
      demo_link: "https://hci-rosy.vercel.app/" ,
    },
    {
      name: "NGO",
      description:
        " Web application that allows users to learn about the foundation's mission, participate in events, and make donations, providing a centralized and engaging solution for supporting the NGO's initiatives.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
      
      ],
      image: NGO,
      source_code_link: "https://github.com/",
      demo_link: "https://naabans.org/" ,
    },

    {
      name: "Health Care Management",
      description:
        "Comprehensive online platform that allows users to search for healthcare providers, book appointments with doctors, and access medical services, offering curated recommendations for specialized healthcare needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: Doc,
      source_code_link: "https://github.com/hydi-official/Doctor-Frontend.git",
      demo_link: "https://doctor-frontend-orcin.vercel.app/" ,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };