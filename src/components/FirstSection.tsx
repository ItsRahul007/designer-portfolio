import Image from "next/image";
import Link from "next/link";
import React from "react";

const FirstSection = () => {
  return (
    <section className="h-[650px] w-full bg-firstSectionBg flex xl:flex-row flex-col">
      <div className="xl:h-full h-[90%] w-full xl:w-10/12 flex items-center gap-x-7">
        {/* text */}
        <div className="w-2/4 h-full flex flex-col justify-center md:!text-left pl-40 text-[#111235]">
          <h1 className="text-[3.625rem] leading-none font-formularBlack mb-7">
            <span className="font-formularLight">Hi!</span>
            <span>
              <span>{" I'm "}</span>
              <div>{"a designer"}</div>
            </span>
          </h1>
          <h3 className="text-4xl font-formularLight mb-12 pl-10">
            ready to work on the next big project for your business
          </h3>
          <Link
            className="uppercase z-0 overflow-hidden relative text-base px-7 py-4 bg-[#111235] text-white font-formularMedium w-fit before:content-[''] before:bg-btnHover before:h-full before:w-full before:-translate-y-full hover:before:translate-y-0 before:absolute before:top-0 before:right-0 before:left-0 before:-z-[1] before:transition-all before:duration-200 before:ease-in-out"
            href="#"
          >
            Get in touch
          </Link>
        </div>

        {/* image */}
        <div className="w-2/4 h-full relative z-1">
          <div className="h-full w-[32rem] relative z-1">
            <Image
              src="/images/first-section-person.jpg"
              alt="person"
              fill
              className="object-fill"
            />

            {/* top red dot */}
            <div className="h-8 w-8 bg-btnHover absolute top-0 right-0" />

            {/* bottom red button */}
            <Link
              className={`h-24 w-20 absolute bottom-0 left-0 bg-navBtnBg hover:bg-btnHover duration-[375ms] ease-in-out text-white flex justify-center items-center text-2xl before:absolute before:opacity-10 before:-z-[1] before:scale-0 before:top-0 before:left-0 before:w-full before:h-full before:ease-in-out before:transition-all before:duration-300 before:bg-btnHover hover:before:opacity-100 hover:before:scale-90 hover:before:z-0`}
              href="#"
            >
              <i className="ri-play-large-fill z-50"></i>
            </Link>
          </div>
          <div className="absolute right-0 top-1/4 h-[55%] w-[230px] flex flex-col bg-btnHover">
            {/* image */}
            <div className="relative w-full h-[64%]">
              <Image
                src="/images/design-img.jpg"
                alt="person"
                fill
                className="object-fill"
              />
              <span className="px-2 py-1 bg-white absolute left-3 top-3 text-sm">
                Design
              </span>
            </div>

            {/* text */}
            <div className="relative w-full h-[36%] flex flex-col gap-2 overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:bg-navBtnBg before:bottom-0 before:right-0 before:left-0 before:translate-y-[95%] before:transition-all before:duration-[600ms] before:ease-in-out hover:before:translate-y-[-95%] before:-z-[1] z-0 py-5 px-3 text-white">
              <div className="font-medium text-lg">iStep Co.</div>
              <div className="text-base text-zinc-200 text-opacity-85 leading-7">
                A UX design project I have recently worked on.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 text-right flex my-auto">
        <div className="rotate-90 text-lg flex w-fit translate-x-[20%] translate-y-[100%]">
          <div className="p-2 cursor-pointer text-[#896e8a] hover:text-btnHover duration-300">
            Instagram
          </div>
          <div className="p-2 cursor-pointer text-[#896e8a] hover:text-btnHover duration-300 ml-12">
            Pinterest
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
