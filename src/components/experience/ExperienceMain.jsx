// import React from 'react'

import AllExperience from "./AllExperience";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      >
        <ExperienceText />
      </motion.div>
      
      <ExperienceTop />
      <div className="w-full h-1 mt-4 bg-lightBlue lg:block sm:hidden"></div>
      <div className=" flex flex-col items-center mt-[100px]">
      <motion.h1
         variants={fadeIn("down", 0.3)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0 }}
      className="text-6xl text-pink ">My Experties</motion.h1>
      <AllExperience />
    </div>
      
    </div>

  );
};

export default ExperienceMain;
