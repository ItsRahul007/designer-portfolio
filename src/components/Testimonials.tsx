"use client";

import React, { useState } from "react";
import ReviewComponent from "./ReviewComponent";
import { brandImgs, myClients } from "@/utils/staticDatas";
import Image from "next/image";

const Testimonials = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(910);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const onBottomClick = () => {
    if (isTransitioning) return; // Do nothing if transitioning

    setIsTransitioning(true); // Disable clicks
    setScrollPosition((prev) => {
      const newPosition = prev + 455 > 910 ? 0 : prev + 455;
      return newPosition;
    });
  };

  const onTopClick = () => {
    if (isTransitioning) return; // Do nothing if transitioning

    setIsTransitioning(true); // Disable clicks
    setScrollPosition((prev) => {
      const newPosition = prev - 455 < 0 ? 910 : prev - 455;
      return newPosition;
    });
  };

  return (
    <section
      className="h-[650px] w-full bg-white relative z-0 flex items-center justify-center"
      id="testimonials"
    >
      <div className="bg-[url('/images/bg-images/bg-pattern-1.jpg')] bg-center bg-cover h-full w-[37%] absolute left-0 top-0 z-[-1] " />
      <div className="mx-auto h-auto min-h-[403px] w-4/5 px-4 flex justify-center items-center gap-x-4">
        <div className="w-2/4 h-full flex items-end justify-between px-2 pr-10">
          <div className="h-[430px] w-[400px] bg-transparent overflow-hidden">
            <div
              className="h-full w-full flex flex-wrap gap-y-12 transition-transform duration-1000 touch-manipulation ease-in-out"
              style={{ transform: `translateY(-${scrollPosition}px)` }}
              onTransitionEnd={() => setIsTransitioning(false)}
            >
              {myClients.map((obj) => (
                <ReviewComponent key={obj.image} {...obj} />
              ))}
            </div>
          </div>
          <div className="flex flex-col text-2xl gap-y-3 items-center min-w-28">
            <button
              className="hover:bg-btnHover hover:text-white px-2 py-1 rounded-full hover:shadow-xl duration-300 w-fit"
              onClick={onTopClick}
            >
              <i className="ri-arrow-up-line"></i>
            </button>
            <div className="text-3xl px-2">
              <span className="text-btnHover">
                0{scrollPosition === 0 ? 1 : scrollPosition / 455 + 1}/
              </span>
              <span className="text-lg">03</span>
            </div>
            <button
              className="hover:bg-btnHover hover:text-white px-2 py-1 rounded-full hover:shadow-xl duration-300 w-fit"
              onClick={onBottomClick}
            >
              <i className="ri-arrow-down-line"></i>
            </button>
          </div>
        </div>
        <div className="w-2/4 h-full flex flex-col justify-center gap-y-10">
          <h1 className="text-[#111235] text-6xl pl-[1.1em] font-formularBlack relative before:block before:content-[''] before:border before:w-[.85em] before:border-b-btnHover before:left-0 before:top-[.55em] before:absolute">
            My Clients
          </h1>
          <p className="text-lg text-[#896e8a] leading-9">
            Read the testimonials submitted by my clients and partners. You can
            fully trust their opinions on my solutions.
          </p>
          <div className="w-full grid grid-cols-3 grid-rows-2 gap-y-5 gap-x-4">
            {brandImgs.map((url, i) => (
              <img
                src={url}
                alt="brands"
                className="h-auto w-auto aspect-auto object-contain col-span-1 row-span-1 mx-auto"
                key={url + i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
