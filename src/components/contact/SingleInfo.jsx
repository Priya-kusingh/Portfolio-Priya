// import React from 'react'

const SingleInfo = ({text, Image}) => {
  return (
    <div className="flex gap-6 items-center justify-start">
        <Image className="text-3xl" />
      <p className="m-4">{text}</p>
    </div>
  )
}

export default SingleInfo;
