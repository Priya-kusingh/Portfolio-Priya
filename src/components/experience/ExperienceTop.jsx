// import React from 'react'
import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";
import ExperienceTopRight from "./ExperienceTopRight";

const ExperienceTop = () => {
  return (
    <div className="flex lg:flex-row gap-6 sm:flex-col items-center justify-center">
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </div>
  )
}

export default ExperienceTop;
