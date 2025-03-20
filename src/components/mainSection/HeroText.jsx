// import React from 'react'
import { motion } from "framer-motion";

import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div id="home" className="flex flex-col gap-5 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-cyan "
      >
        FRONT-END DEVELOPER{" "}
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[3rem] lg:text-6xl sm:text-4xl font-bold font-specail text-pink"
      >
        Priya Kushwaha
      </motion.h1>
      <motion.p
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        Passionate Frontend Developer with 2 years of experience <br /> in
        React, JavaScript, and UI design, building responsive <br /> and
        user-friendly web applications.
      </motion.p>
    </div>
  );
};

export default HeroText;
