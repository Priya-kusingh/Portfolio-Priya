// import React from 'react'
import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";
import { fadeIn } from "../../framerMotion/variants";

import AboutText from './AboutText';
import AboutImg from './AboutImg';


const AboutMain = () => {
  return (
    <div id="about" className="flex justify-between md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto lg:mt-[50px] sm:mt-[250px] items-center">
      <motion.div
         variants={fadeIn("right", 0)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.7 }}
      >
        <AboutText />
        </motion.div>
    <motion.div
       variants={fadeIn("left", 0.3)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.7 }}
    >  
      <AboutImg />
      </motion.div>
    </div>
  )
}

export default AboutMain;
