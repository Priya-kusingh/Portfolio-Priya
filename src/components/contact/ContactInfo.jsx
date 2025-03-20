// import React from 'react'
import { MdEmail } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div>
      <a
        href="mailto:priyakushwaha1643@gmail.com"
        className="hover:text-pink-400"
      >
        <SingleInfo text="priyakushwaha1643@gmail.com" Image={MdEmail} />
      </a>
      {/* <SingleInfo text="+919900018276" Image={FaPhoneAlt} /> */}
      <SingleInfo text="Delhi NCR" Image={IoLocation} />
    </div>
  );
};

export default ContactInfo;
