// import React from 'react'

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import about from "../../../public/images/piku.jpeg" 

import { GiCircle } from "react-icons/gi";
const HeroPic = () => {
  return (
    <motion.div 
    variants={fadeIn("left", 0.3)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0 }}
    className="h-full flex items-center justify-center">
      <img src={about} alt="Priya kushwaha" className="max-h-[450px] w-auto rounded-full bg-black sm:mt-32" />
  <div className="absolute -z-10 flex justify-center items-center animate-pulse">
  <GiCircle className="md:h-[90%] sm:h-[120%] min-h-[460px] w-auto text-cyan blur-md animate-[spin_20s_Linear_infinite] sm:mt-32" />
  </div>
    </motion.div>
  )
}

export default HeroPic;
