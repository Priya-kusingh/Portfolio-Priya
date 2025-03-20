// import React from 'react'

import ContactForm from "./ContactForm";

const ContactLeft = () => {
  return (
    <div className="flex flex-col gap-8 ">
        <div className="border border-white h-[510px] rounded-3xl bg-black">
        <h2 className="text-4xl text-pink text-center font-bold mt-6">Get in Touch</h2>
        <ContactForm />
        </div>
        
    </div>
  )
}

export default ContactLeft;
