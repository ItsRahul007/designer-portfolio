import React from "react";
import InputWithLabel from "./InputWithLabel";

const Contact = () => {
  return (
    <section
      className="h-[800px] w-full bg-firstSectionBg flex flex-col items-center justify-center relative"
      id="contact"
    >
      <div className="w-full h-2/4 border-b-4 border-btnHover bg-navBtnBg flex items-start justify-center">
        <div className="mt-20 grid grid-cols-2 w-3/4 mx-auto">
          <h1 className="text-[#111235] text-6xl pl-[1.1em] font-formularBlack mb-8 relative before:block before:content-[''] before:border before:w-[.85em] before:border-b-btnHover before:left-0 before:top-[.55em] before:absolute">
            Get in Touch
          </h1>
          <p className="text-lg text-[#111235] leading-9">
            Feel free to contact me to discuss your next design or branding
            project. I’m open to everything!
          </p>
        </div>
      </div>
      <div className="w-full h-2/4" />
      <form className="w-3/4 h-3/5 absolute bg-white bottom-28 shadow-2xl flex flex-col py-8 px-6">
        <div className="grid grid-cols-3 gap-x-5">
          <InputWithLabel label="Your Name" placeholder="Your name" />
          <InputWithLabel
            label="Your E-mail"
            placeholder="E-mail"
            type="email"
          />
          <InputWithLabel
            label="Your Phone"
            placeholder="Phone"
            type="number"
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label className="text-gray-500 cursor-pointer" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            className="bg-firstSectionBg px-3 py-3 border border-[#f1dfce] focus:bg-white focus:outline-none placeholder:font-formularLight max-h-48 min-h-44"
            placeholder="Message"
          ></textarea>
        </div>
        <button className="px-6 py-4 bg-[#111235] uppercase text-lg font-formularMedium text-white w-fit mt-8">
          send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
