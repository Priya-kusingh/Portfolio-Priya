// import React from 'react'

import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import weather from "../../../public/images/Weather.png";
import myntra from "../../../public/images/Myntra.png";
import calcu from "../../../public/images/Calcu.png";
import happy from "../../../public/images/HappySad.jpg";
import central from "../../../public/images/Central.png";
import priya from "../../../public/images/Portfolio.jpg";
import techmentor from "../../../public/images/Techmentor.png";


const projects = [
  {
    name: "Weather Application",
    align: "right",
    image: weather,
    link: "https://github.com/Priya-kusingh/weather-Application",
  },
  {
    name: "Myntra Clone",
    align: "left",
    image: myntra,
    link: "https://github.com/Priya-kusingh/myntra_clone",
  },
  {
    name: "Happy Angry-Sad Game",
    align: "right",
    image: happy,
    link: "https://github.com/Priya-kusingh/happy-sad-angry-game",
  },
  {
    name: "Digital Calculator",
    align: "left",
    image: calcu,
    link: "https://github.com/Priya-kusingh/calculator",
  },
  {
    name: "Portfolio_Priya ",
    align: "right",
    image: priya,
    link: "https://kushwahapriya.netlify.app/",
  },
  {
    name: "Tech mentors Website",
    align: "left",
    image: techmentor,
    link: "https://github.com/Priya-kusingh/Techjobmentors",
  },
  {
    name: "Central Massage",
    align: "right",
    image: central,
    link: "https://console.messagecentral.com",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectText />
      <div className="flex flex-col gap-20 w-full mx-auto mt-12 ">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
