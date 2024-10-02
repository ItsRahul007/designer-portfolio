"use client";

import React, { useState } from "react";
import ImageComponent from "./ImageComponent";
import { portfolioOptions } from "@/utils/staticDatas";

const PortfolioSection = () => {
  const [componentPosition, setComponentPosition] = useState<number>(0);

  const onLeftClick = () => {
    componentPosition > 0 &&
      setComponentPosition(
        componentPosition - 350 < 0 ? 0 : componentPosition - 350
      );
  };

  const onRightClick = () => {
    componentPosition <= 1250 &&
      setComponentPosition(
        componentPosition + 350 > 1250 ? 1250 : componentPosition + 350
      );
  };

  return (
    <section
      className="min-h-[800px] w-full bg-firstSectionBg flex justify-center items-center overflow-y-hidden"
      id="portfolio"
    >
      <div className="container flex flex-col  gap-y-16 justify-center items-center lg:px-40">
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-[#111235] text-6xl pl-[1.1em] font-formularBlack mb-8 relative before:block before:content-[''] before:border before:w-[.85em] before:border-b-btnHover before:left-0 before:top-[.55em] before:absolute">
              Latest works
            </h1>
            <p className="text-lg text-[#896e8a] leading-9">
              Check out my recent and popular design & branding projects I have
              worked on.
            </p>
          </div>
          <div className="text-2xl flex items-center px-6 w-1/4 z-0 relative before:content-[''] before:absolute before:left-[4.6875rem] before:top-2/4 before:h-[300vh] before:-translate-y-2/4 before:w-screen before:bg-navBtnBg before:z-[-1]">
            <div className="flex justify-between w-28 pr-3">
              <button
                className="hover:bg-white px-2 py-1 hover:rounded-full hover:shadow-xl duration-300 hover:text-btnHover disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#111235] disabled:hover:shadow-none"
                onClick={onLeftClick}
                disabled={componentPosition <= 0}
              >
                <i className="ri-arrow-left-line"></i>
              </button>
              <button
                className="hover:bg-white px-2 py-1 hover:rounded-full hover:shadow-xl duration-300 hover:text-btnHover disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#111235] disabled:hover:shadow-none"
                onClick={onRightClick}
                disabled={componentPosition >= 1150}
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div
            className="w-[2404px] flex gap-x-12 transition-transform duration-300 touch-manipulation"
            style={{
              transform: `translateX(-${componentPosition}px)`,
            }}
          >
            {portfolioOptions.map(({ alt, src, tags }) => (
              <ImageComponent src={src} alt={alt} tags={tags} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
