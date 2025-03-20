// import React from 'react'

const AboutText = () => {
  return (
    <div className="flex flex-col items-center md:items-start md:text-left sm:rounded-full md:rounded-3xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-cyan m-4 md:m-10">
        About Me
      </h1>
      <p className="text-white m-4 md:m-10 text-sm sm:text-base md:text-lg leading-relaxed">
        I am a passionate Frontend Developer with 2+ years of experience,
        specializing in building high-performance web applications using
        React.js, JavaScript, and modern UI/UX practices. I have a strong focus
        on creating scalable, responsive, and user-friendly interfaces while
        optimizing application performance. <br /> <br />
        At U2OPIA Mobile Pvt. Ltd., Gurugram, I have contributed to developing a scalable UI component
        library, integrating Redux Toolkit for state management, and optimizing
        front-end performance. My expertise includes HTML, CSS, Tailwind CSS,
        Node.js, MongoDB, MySQL, Git, AWS, and RESTful APIs. I am a continuous
        learner, holding certifications in Frontend Development (FreeCodeCamp),
        Cyber Security (IIT Kanpur), and JavaScript ES6+ (Infosys Springboard).
        With a strong problem-solving mindset and proficiency in Agile
        methodologies, I thrive in collaborative environments, delivering
        impactful digital solutions.
      </p>
      
      <a href="#projects" className="self-center md:self-start">
        <button className="border border-pink rounded-full text-lg py-2 px-4 mt-4 md:mt-10 hover:bg-white transition-all duration-500 cursor-pointer text-black hover:text-black bg-darkPink">
          Projects
        </button>
      </a>
    </div>
  );
};

export default AboutText;
