// import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import SkillText from "./SkillText";
import AllSkillSm from "./AllSkillSm";


const SkillMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
     <motion.div 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}>
<SkillText />
     </motion.div>
      
      <div className=" sm:block">
        <AllSkillSm />
      </div>
      
      </div>
      
    </div>
  );
};

export default SkillMain;
