// import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SubHeroSection = () => {
  return (
    <motion.div
    variants={fadeIn("down", 0.3)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0 }}
    className="w-full border-y bg-pink border-lightGray text-black flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-6 font-bold text-center lg:flex-row sm:ml-0 sm:flex-col lg:relative sm:absolute ">
    <p className="md:block ">Team Work</p>
    <p className="md:block">Quick Learner </p>
    <p className="md:block" >Details Master</p>
    </motion.div>
  )
}

export default SubHeroSection;
