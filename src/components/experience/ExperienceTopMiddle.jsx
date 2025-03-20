// import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import pg from "../../../public/images/Pg.png";

const ExperienceTopMiddle = () => {
  return (
    <motion.div 
   variants={fadeIn("up", 0.3)}
   initial="hidden"
   whileInView="show"
   viewport={{ once: false, amount: 0 }}
    className="lg:w-[35%] md:w-[50%] sm:w-[80%]">
     <img src={pg} alt="EXP" />
    </motion.div>
  )
}

export default ExperienceTopMiddle;
