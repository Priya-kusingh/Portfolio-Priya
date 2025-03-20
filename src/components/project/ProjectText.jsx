// import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ProjectText = () => {
  return (
    <div className="flex items-center mt-[100px] flex-col">
      <motion.h2
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-6xl text-pink mt-10"
      >
        Projects
      </motion.h2>
      <motion.p
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg text-center text-white m-10"
      >
        My work showcases a strong foundation in HTML, CSS, JavaScript, and
        modern frameworks like React.js. Leveraging tools like Tailwind CSS and
        Vite, I have built scalable and high-performance applications with clean
        and maintainable code. Each project reflects my ability to create
        user-friendly designs, optimize performance, and handle complex state
        management. Responsive design ensures that the applications work flawlessly across all devices.
      </motion.p>
    </div>
  );
};

export default ProjectText;
