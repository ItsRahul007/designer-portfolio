import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section
      className="h-[750px] w-full bg-[#ffffff] flex overflow-hidden"
      id="about"
    >
      <div className="h-full w-2/5 flex items-center relative z-0">
        {/* image */}
        <div className="relative w-[424px] h-[491px] ml-44 before:absolute before:content-[''] before:w-[11.75rem] before:h-[11.75rem] before:bg-[#fdf7f1] before:top-0 before:left-0 before:-translate-y-2/4 before:-translate-x-2/4">
          <Image
            src="/images/second-section-person.jpg"
            alt="person"
            fill
            className="object-fill"
          />
        </div>
        <div
          className="h-72 w-[93%] absolute -z-[1] -bottom-1"
          style={{
            backgroundImage: "url(/images/bg-images/bg-pattern-3.jpg)",
          }}
        />
      </div>
      <div className="h-full flex flex-col justify-center w-3/5 pl-12">
        <div className="w-[74%] pl-20 mb-32">
          <h1 className="text-[#111235] text-6xl pl-[1.1em] font-formularBlack mb-8 relative before:block before:content-[''] before:border before:w-[.85em] before:border-b-btnHover before:left-0 before:top-[.55em] before:absolute">
            About me
          </h1>
          <p className="text-lg text-[#896e8a] leading-9">
            My name is James Adams. I’m a UI/UX & graphic designer. I believe
            that a well-designed product leads a business to success. <br />
            <br />I love learning how people think and behave, and I leverage
            research to design user-centered products and experiences which
            solve both user and business problems.
          </p>
          <Link
            className="uppercase ml-9 mt-10 z-0 overflow-hidden relative text-base px-7 py-4 bg-[#111235] text-white w-fit before:content-[''] before:bg-btnHover before:h-full before:w-full before:-translate-y-full hover:before:translate-y-0 before:absolute before:top-0 before:right-0 before:left-0 before:-z-[1] before:transition-all before:duration-300 before:ease-in-out block font-formularMedium"
            href="#"
          >
            Send message
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
