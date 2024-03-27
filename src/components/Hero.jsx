import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { styles } from "../styles";
import { EarthCanvas, ComputersCanvas } from "./canvas";
//import { EarthCanvas } from "./canvas";
import {devpost, github, linkedIn } from "../assets";
import { resume } from "../assets";
import Typed from "typed.js";

const Hero = () => {
  
    const [typedText, setTypedText] = useState("");
    const typedRef = useRef(null);
  
    useEffect(() => {
      const typed = new Typed(typedRef.current, {
        strings: ["Hi, I am <span style='color: Orange'>Rajashekar!</span>", "I am an <span style='color: Orange'>AI Enthusiast</span>","I am a <span style='color: Orange'>Hackathon Buff</span>", "I care for <span style='color: Orange'>mother Earth</span>"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
 
return (
  <section className="relative w-full h-screen mx-auto">
    <div
      className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
    >
      <div className="flex flex-col justify-center items-center mt-5">
      <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-5 rounded-full bg-[#FFA500]"
        />
        <motion.div
          animate={{ scaleY: [1, 1.5, 1], scaleX: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 sm:h-80 h-40 orange-gradient"
        />
      </div>
      <div className="z-10">
        <h1 className={`${styles.heroHeadText}`}>
          <span ref={typedRef}></span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        A proficient Software Engineer with an  
        <a
            target="_blank"
            className="text-[#800080] font-bold"
          >
            {" "}
            MS in Computer Science{" "}
          </a>, adept at crafting enterprise-level applications and passionate about leveraging{" "}
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white"
          >
            AI
          </motion.span>{" "}
          to drive
          <a
            target="_blank"
            href="https://devpost.com/RajashekarVennavelli"
            className="text-[#FFA500] underline"
          >
            {" "}
            positive{" "}
          </a>
          change and make 
          <a
            target="_blank"
            href="https://devpost.com/RajashekarVennavelli"
            className="text-[#0000FF] font-bold transition-colors duration-300 hover:text-[#008000]"
          >
            {" "}
            planet Earth {" "}
          </a>
          a better place for 
          <a
            target="_blank"
            className="text-[#FF0000] font-bold"
          >
            {" "}
            ALL{" "}
          </a>
          
          living beings.
        </p>
        
        <div className="flex mt-6 gap-5">
          <motion.a
            animate={{ y: [-5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            href="https://www.linkedin.com/in/rajashekar-vennavelli/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tertiary w-[50px] rounded-xl outline-none text-white font-bold shadow-md z-10"
          >
            <img src={linkedIn} alt="LinkedIn icon" className="object-cover w-full"></img>
          </motion.a>
          <motion.a
            animate={{ y: [-5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            href="https://github.com/rajashekarcs2023"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-tertiary w-[50px] rounded-xl outline-none text-white font-bold shadow-md shadow-primary z-10"
          >
            <img src={github} alt="Github icon" className="object-cover "></img>
          </motion.a>
          <motion.a
            animate={{ y: [-5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            href="https://devpost.com/RajashekarVennavelli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-tertiary w-[50px] rounded-xl outline-none text-white font-bold shadow-md shadow-primary z-10"
          >
            <img src={devpost} alt="Devpost icon" className="object-cover "></img>
          </motion.a>
          <motion.a
            animate={{ y: [-5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            href={resume}
            download
            className="bg-[#33CC66] py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary z-10"
          >
            <span className="hidden sm:inline">Download</span> Resume
          </motion.a>
        </div>
      </div>
    </div>

    <ComputersCanvas />
    

    <EarthCanvas />
  </section>
  
);
};


export default Hero;