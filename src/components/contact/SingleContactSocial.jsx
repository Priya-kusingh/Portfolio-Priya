// import React from 'react'

const SingleContactSocial = ({ link, Icon}) => {
  return (
    <div className="flex border border-white text-3xltext-pink rounded-full justify-center p-3 items-center  hover:bg-black bg-darkPink">
       <a href={link} target="_blank" rel="noopener noreferrer" className="text-2xl">
      <Icon className="hover:text-blue-500 transition duration-300" />
    </a>
    </div>
  )
}

export default SingleContactSocial;
