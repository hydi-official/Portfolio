import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing icons
import { styles } from "../styles";
import profile from '../assets/edi.jpg';
import CV from '../assets/CV/CV.pdf'; // Importing CV

const About = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row md:w-full">
        <div className="md:w-1/2">
          <div className="mt-28">
            <h1 className={`${styles.heroHeadText} ml-8  text-white`}>
              Hi, I'm <span className='text-[#2e72f0ea] '>Essel</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 ml-8 text-white-100`}>
              I develop web applications <br className='sm:block hidden' />
              and 3D games
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full w-60 h-60 mb-4"
          />
          <div className="flex gap-4 mb-4">
            <a href='https://github.com/hydi-official' target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/essel-eghan-9a0b52230/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>
          <div>
            <a href={CV} download>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
