// import React from 'react'

import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMain = () => {
  return (
    <div id="contact" className="max-w-[1200px] mx-auto justify-center mt-[100px] px-4">
      <motion.h2 
      variants={fadeIn("up", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="text-6xl text-pink text-center mb-10 ">Contact Us</motion.h2>
      <motion.p
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="text-lg text-center text-white m-10">Lorem ipsum dolor sit amet consectetur adipisicing elit Minima ad autem numquam voluptatum </motion.p>
      <div className="flex justify-between gap-24 bg-blue p-8 rounded-2xl lg:flex-row sm:flex-col">
       <motion.div 
       variants={fadeIn("right", 0.6)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0 }}>
        <ContactLeft />
       </motion.div>
       <motion.div
       variants={fadeIn("left", 0.6)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0 }}
       >
        <ContactRight />
       </motion.div>
      </div>
    </div>
  );
};

export default ContactMain;
