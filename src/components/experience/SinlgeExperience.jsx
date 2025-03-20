// import React from 'react';
// import {experience, job, responsibilities} ;
const SinlgeExperience = ({ experience }) => {
  return (
    <div className="md:h-full md:w-[240px] sm:h-auto lg:w-[350px] lg:flex-row sm:w-full border-2 border-cyan rounded-2xl mt-12 p-4">
      <p className="text-pink m-4 font-bold text-3xl">{experience.job}</p>
      {/* <p>{experience.responsibilities}</p> */}
      <ul className="text-white mt-4 pl-6 list-disc ">
        {experience.responsibilities.map((resp, index) =>{
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </div>
  );
};

export default SinlgeExperience;
