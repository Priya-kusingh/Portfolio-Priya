// import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { SiJirasoftware } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiJest } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";
import { SiNetlify } from "react-icons/si";

const skills = [
  {
    skill: "HTML/HTML5",
    icon: FaHtml5,
  },
  {
    skill: "CSS/CSS3",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript with (ES6)",
    icon: IoLogoJavascript,
  },
  {
    skill: "React.JS",
    icon: FaReact,
  },
  {
    skill: "Redux Toolkit",
    icon: SiRedux,
  },
  {
    skill: "Tailwind CSS",
    icon: SiTailwindcss,
  },

  {
    skill: "MYSQL",
    icon: SiMysql,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "BootStrap",
    icon: FaBootstrap,
  },
  {
    skill: "Node.JS",
    icon: FaNode,
  },
  {
    skill: "Jira",
    icon: SiJirasoftware,
  },
  {
    skill: "VS Code",
    icon: VscVscode,
  },
  {
    skill: "VS Code",
    icon: SiJest,
  },
  {
    skill: "AWS",
    icon: FaAws,
  },
  {
    skill: "Vercel",
    icon: SiVercel,
  },
  {
    skill: "Netlify",
    icon: SiNetlify,
  },
];

const AllSkillSm = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-5 gap-12 my-12">
      {skills.map((item, index) =>{
        return(
            <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index} className="flex flex-col items-center">
                <item.icon className="text-7xl text-pink" />
                <p className="text-center mt-4 text-white">{item.skill}</p>
            </motion.div>
        );
      })}
    </div>
  )
}

export default AllSkillSm;
