// import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


const ExperienceTopLeft = () => {
  return (
    <motion.div
   variants={fadeIn("right", 0.3)}
   initial="hidden"
   whileInView="show"
   viewport={{ once: false, amount: 0 }} 
    className="flex flex-col w-[300px] gap-6 ">
      <p className="text-cyan font-bold text-3xl uppercase font-specail text-center">Since 2023</p>
      <div className="flex flex-col justify-center text-center gap-4 ">
        <p className="font-bold text-6xl text-pink">2</p>
        <p className="font-bold text-xl text-lightGray uppercase -mt-4">Years</p>
      </div>
      <p className="text-white text-center">Frontend Developer with 2+ years of experience in developing high-performance web applications</p>
    </motion.div>
  )
}

export default ExperienceTopLeft;
