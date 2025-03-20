// import React from 'react'
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const handleName = (e) => {
    setName(e.target.value)
  };
  const handleEmail = (e) => {
    setEmail(e.target.value)
  };
  const handleMessage = (e) => {
    setMessage(e.target.value)
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ut2iuzj", "template_78ixich", form.current, {
        publicKey: "Y_Nef56xnxdFNhsAL",
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSuccess('Message Send Successfully !');
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="mt-14">
       <p className="Pink">{success}</p>
      <form className="flex flex-col gap-6" ref={form} onSubmit={sendEmail}>
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 bg-white px-2"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="h-12 bg-white px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          type="text"
          placeholder="Message"
          rows="10"
          cols="50"
          required
          className="h-28 bg-white p-2"
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button
          type="submit"
          className="w-[150px] mx-48 mt-4 rounded-lg border border-pink text-white h-12 font-bold text-xl bg-pink hover:bg-white hover:text-black cyan transition-all duration-500 "
        >
          Send Message
        </button>
      </form>
     
    </div>
  );
};

export default ContactForm;
