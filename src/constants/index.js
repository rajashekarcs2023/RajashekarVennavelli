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
    headstarter,
    atlasnova,
    Citi,
    tesla,
    shopify,
    starbucks,
    carrent,
    jobit,
    frugal,
    forge,
    coding,
    tripguide,
    cognicare,
    hobbyhub,
    multimed,
    quiz,
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
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "Mobile Application Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI/ML Enthusiast",
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
      date: "2018 - 2019",
      points: [
        "Developed modules for reading, writing and processing data from the database. Developed and maintained Spring Batch applications to process data input files.",
        "Implemented a suite of compliance metrics using SQL queries and Spring Batch to measure and track compliance across the organization.",
        "Led the development of REST APIs using Spring framework to facilitate seamless communication betweeen systems for data retrieval and complaince checking",
        "Involved in developing modules to convert the streaming data into readable format, reduced the latency of real time processing of 1 billion trade messages per day.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "World Bank, GECE",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "2020 - 2021",
      points: [
        "Led the development of V2 for Power Audit public APIs, assuming ownership of the v2/notes domain for enhanced functionality and scalability and took ownership of multiple aspects of software development lifecycle (SDLC)",
        "Implemented a comprehensive password security upgrade for approximately 3 million users across Power Audit and Power Customer, enhancing overall system integrity and user data protection",
        "Implemented a robust anomaly detection feature aimed at empowering CSRs to promptly identify power theft.",
        "Maintained and improved the existing codebase, including bug fixes, performance enhancements, and code refactoring.",
      ],
    },
    {
      title: "Student Apprentice",
      company_name: "MissedFits",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Conducted extensive user research, which involved investigating problems and conducting interviews with users to gain a deep understanding of their pain points",
        "Performed competitive analysis to gather valuable insights and validate potential product ideas.",
        "Conducted a comprehensive analysis to determine the market size and growth potential for our products.",
        "Actively contributed to make a marketing strategy for MissedFits, to make it more visible",
      ],
    },
    {
      title: "Forge Garden Intern",
      company_name: "The Forge Garden, Santa Clara University",
      icon: forge,
      iconBg: "#383E56",
      date: "July 2022 - August 2022",
      points: [
        "Gained hands-on experience in sustainable agriculture and urban farming practices.",
        "Contributed to the development of an infrastructure plan for collecting food waste from the SCU campus and its surroundings, fostering composting for sustainability.",
        "Created a comprehensive management plan to effectively track and manage compost piles.",
        "Gained insights into food systems, food justice, and the intersections between social justice and sustainability.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "SCU Frugal Innovation Hub",
      icon: frugal,
      iconBg: "#E6DEDD",
      date: "September 2022 - March 2023",
      points: [
        "Created an educational game to inform children about waste management and the impact of littering on oceans.",
        "Worked with a team to build a cross-platform game for Web, Android, and iOS using Flutter and Flame Engine",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Headstarter AI",
      icon: headstarter,
      iconBg: "#E6DEDD",
      date: "April 2024 - July 2024",
      points: [
        "Built a learning management system (LMS) with React and Node.js. Implemented user authentication, course creation, and progress tracking. Leveraged PostgreSQL for data management and a microservice architecture for scalability.",
        "Developed a high-throughput data processing pipeline for real-time analytics using Node.js and PostgreSQL, optimizing database queries and facilitating seamless data flow across multiple microservices.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "AtlasNova AI",
      icon: atlasnova,
      iconBg: "#E6DEDD",
      date: "August 2024 - Present",
      points: [
        "Architected multiple workflows for processing multi-modal content, implemented a serverless API ecosystem using AWS Lambda and API Gateway, achieving a 40% improvement in data processing efficiency.",
        " Engineered a sophisticated AI-driven document generation system utilizing AWS Lambda, integrating multiple LLM models (GPT-4, Claude, Gemini) with custom RAG pipelines.",
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
      name: "Cogni Care",
      description:
        "CogniCare is an AI-driven web based app designed to support memory health, offering personalized brain exercises and recollection experiences for individuals facing Alzheimer's or Dementia.",
      tags: [
        {
          name: "Next.js",
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
      image: cognicare,
      source_code_link: "https://github.com/rajashekarcs2023/Cogni-Care",
    },
    {
      name: "TechChampions Coding Arena",
      description:
        "Developed a scalable online coding judge platform with the MERN stack, featuring adding questions, test cases, submission tracking, MongoDB integration for data management",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: coding,
      source_code_link: "https://github.com/rajashekarcs2023/TechChampions-Coding-Arena",
    },
    {
      name: "Development of Microservices",
      description:
        "Developed three basic microservices using Spring Boot, utilized API server as an orchestrator, and integrated them to create a simple application with a front-end using Angular.js.",
      tags: [
        {
          name: "Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "Docker",
          color: "green-text-gradient",
        },
        {
          name: "RabbitMQ",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/rajashekarcs2023/Microservices",
    },

    {
      name: "Quiz Application System",
      description:
        "Developed a desktop based quiz appl;ication where the admin can add text based and image based questions, edit questions in the question bank, calculate scores and compare the results.",
      tags: [
        {
          name: "Java FX",
          color: "blue-text-gradient",
        },
        {
          name: "OOPs",
          color: "green-text-gradient",
        },
        {
          name: "Core Java",
          color: "pink-text-gradient",
        },
      ],
      image: quiz,
      source_code_link: "https://github.com/rajashekarcs2023/Quiz-Application",
    },
    
    {
      name: "Multimed Vision Plus",
      description:
        "A health management platform connected with hardware that empowers users to track medications and nutrients, receive personalized advice, and get proactive alerts, ensuring comprehensive wellness across devices.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "FastAPI",
          color: "green-text-gradient",
        },
        {
          name: "LLMs",
          color: "pink-text-gradient",
        },
      ],
      image: multimed,
      source_code_link: "https://github.com/rajashekarcs2023/CalHacks23",
    },
    {
      name: "HobbyHub",
      description:
        "A web application enabling users to post, share, and engage with content about their hobbies, featuring image sharing, advanced search, and interactive community functionalities.",
      tags: [
        {
          name: "react.js",
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
      image: hobbyhub,
      source_code_link: "https://github.com/rajashekarcs2023/Hobby-Hub",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };