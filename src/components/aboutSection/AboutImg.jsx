// import React from 'react'
import piku from "../../../public/images/piku.jpeg";
const AboutImg = () => {
  return (
    <div className="h-[550px] w-[400px] relative flex">
      <div className="h-[550px] w-[400px] rounded-[100px] absolute overflow-hidden">
        <img src={piku} alt="Priya "  className="h-full w-auto"/>
      </div>
      <div className="h-[550px] w-[400px] bg-pink bottom-[-30px] left-[-40px] rounded-bl-[120px] rounded-br-[20px] rounded-tr-[120px] rounded-tl-[30px] -z-10 absolute" ></div>
      <div className="h-[576px] w-[400px] absolute bg-white  top-[-30px] right-[-40px] rounded-br-[30px] rounded-bl-[30px] rounded-tr-[120px] rounded-tl-[30px] -z-10"></div>
    </div>
  )
}

export default AboutImg;
