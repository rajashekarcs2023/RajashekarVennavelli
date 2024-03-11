import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    java,
    python,
    aws,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    Citi,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    }, 
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
    {
      name: "aws",
      icon: aws,
    },
  
  ];
  
  const experiences = [
    {
      title: "Machine Learning Research Intern",
      company_name: "International Institute of Information Technology, Hyderabad",
      icon: shopify,
      iconBg: "#383E56",
      date: "Dec 2017 - May 2018",
      points: [
        "Automation of data analysis of the data collected during various surveys using Python and Natural Language Processing techniques.",
        "Conducted a comprehensive literature survey on various conversational agent frameworks, including Dialogflow, Watson, and wit.ai, to gain insights into their functionalities and capabilities.",
        "Implemented strategies to minimize the lexical gap in a Question-Answering application, utilizing natural language processing techniques to provide accurate responses to user queries.",
        "Developed a web application chatbot tailored for a specific knowledge domain",
      ],
    },
    {
      title: "Application Developer",
      company_name: "Citi Bank",
      icon: Citi,
      iconBg: "#383E56",
      date: "July 2018 - February 2019",
      points: [
        "Developed modules for reading, writing and processing data from the database. Developed and maintained Spring Batch applications to process data input files.",
        "Implemented a suite of compliance metrics using SQL queries and Spring Batch to measure and track compliance across the organization.",
        "Led the development of REST APIs using Spring framework to facilitate seamless communication betweeen systems for data retrieval and complaince checking",
        "Involved in developing modules to convert the streaming data into readable format, reduced the latency of real time processing of 1 billion trade messages per day.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Global Energy Consulting Engineers",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Nov 2020 - Jan 2022",
      points: [
        "Enhanced enterprise-level web applications using Java, Spring, and React.JS frameworks, leading to a increase in application performance.",
        "Implemented RESTful APIs that drove a 20% surge in user engagement, leveraging Agile methodology to ensure timely delivery",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Student Apprentice",
      company_name: "MissedFits",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Forge Garden Intern",
      company_name: "The Forge Garden, Santa Clara University",
      icon: shopify,
      iconBg: "#383E56",
      date: "July 2022 - August 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Mobile Application Developer",
      company_name: "SCU Frugal Innovation Hub",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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