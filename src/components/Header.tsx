"use client";

import { classNames } from "@/utils/classnames";
import { navList } from "@/utils/staticDatas";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isClickedBtn, setIsClickedBtn] = useState<boolean>(false);
  const [isSticky, setSticky] = useState<boolean>(false);
  const [isRunningFirstTime, setIsRunningFirstTime] = useState<boolean>(true);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      const handleScroll = () => {
        const navbarOffset = navRef.current?.offsetHeight || 0;
        const pageOffset = window.scrollY;

        // Toggle sticky navbar when scrolled past main navbar
        if (pageOffset > navbarOffset - 50) {
          setSticky(true);
        } else {
          setSticky(false);
        }
        setIsRunningFirstTime(false);
      };

      isRunningFirstTime && handleScroll();

      window.addEventListener("scroll", handleScroll);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <header
      className={classNames(
        "w-full duration-200 transition-[height] z-20",
        !isSticky
          ? "h-36 bg-firstSectionBg"
          : "h-14 bg-white sticky top-0 shadow-md"
      )}
      ref={navRef}
    >
      <nav className="w-full h-full flex">
        {/* left button */}
        <div className="relative w-20 h-full">
          {/* button */}
          <div
            className={classNames(
              "bg-navBtnBg w-full flex justify-center items-center group cursor-pointer",
              !isSticky ? "h-[308px]" : "h-full"
            )}
            onClick={() => setIsClickedBtn(!isClickedBtn)}
          >
            <span
              className={`inline-flex flex-col justify-between before:block before:content-[''] before:transition-[inherit] before:border before:border-[#538074] after:block after:content-[''] after:transition-[inherit] after:border after:border-[#538074] group-hover:before:opacity-50 group-hover:after:opacity-50 transition-transform duration-500 z-10 ${
                isClickedBtn
                  ? "before:rotate-45 after:-rotate-45 w-[31px]"
                  : "h-6 w-10"
              }`}
            />
          </div>

          {/* content */}
          <div
            className={`w-[688px] z-20 h-[308px] absolute flex flex-col justify-center items-center bg-navBtnBg transition-all duration-200 ease-in-out ${
              isClickedBtn
                ? "opcity-1 translate-y-0 visible"
                : "invisible opcity-0 -translate-y-[150%]"
            } ${isSticky ? "left-0 top-full" : "left-full top-0"}`}
          >
            <div className="w-3/4 flex flex-col gap-y-6">
              <h1 className="text-3xl">Join My Newsletter</h1>
              <form onSubmit={(e) => e.preventDefault()} className="flex">
                <input
                  type="text"
                  className="h-14 px-4 w-full"
                  placeholder="E-mail"
                />
                <button
                  type="submit"
                  className="text-base p-4 text-white font-semibold bg-btnHover capitalize"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-between px-12">
          <div>
            <img
              src="/images/logo-default.png"
              alt="logo"
              height={33}
              width={114}
            />
          </div>
          <div className="flex gap-x-16 items-center">
            <ul className="flex gap-x-8 text-lg">
              {navList.map(({ label, link }) => (
                <li key={label}>
                  <Link
                    href={link}
                    className="py-1 block text-[#0d0e2e] relative before:absolute before:w-0 before:bottom-0.5 before:left-0 before:opacity-0 before:h-[2.5px] before:duration-200 before:ease-in-out before:bg-btnHover hover:before:opacity-100 hover:before:w-full"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <i className="ri-messenger-fill text-btnHover text-4xl hover:text-navBtnBg duration-300 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
