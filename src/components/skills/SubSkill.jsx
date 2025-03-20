// import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import skill from "../../../public/images/Svg.jpg";

const SubSkill = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="border-y-2 border-lightGray relative"
    >
      <div className="absolute bg-gradient-to-r from-pink to-cyan opacity-50 w-full h-[200px]"></div>
      <img
        src={skill}
        alt="codding Image"
        className="h-[200px] w-full"
      />
    </motion.div>
  );
};

export default SubSkill;
