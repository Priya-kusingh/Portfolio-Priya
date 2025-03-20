// import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


const ExperienceTopRight = () => {
  return (
    <motion.div 
   variants={fadeIn("left", 0.3)}
   initial="hidden"
   whileInView="show"
   viewport={{ once: false, amount: 0 }}
    className="w-[80%] lg:w-[30%] p-4 border border-lightBlue rounded-3xl flex sm:flex-col ">
      <p className="text-lg text-center text-lightGray  " >I specialize in <span className="text-white font-bold">React.js and modern JavaScript</span>, Leveraging best practices to create scolable and maintainable solution.
      My experience spons working on diverse projects, from small business website to <span className="text-white font-bold">complex front-end system,</span> always aiming for clean code and exceptional user experiences</p>
    </motion.div>
  )
}

export default ExperienceTopRight;
