import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <section className="h-[650px] w-full bg-[#111235] flex flex-col">
      <div className="flex justify-start w-full h-3/4 gap-10">
        {/* image */}
        <div className="w-2/4 relative">
          <Image src="/images/chai.jpg" alt="tea" fill className="object-fit" />
          <Link
            href="#"
            className="absolute z-0 top-0 right-0 text-4xl p-4 px-5 bg-btnHover text-white/30 hover:text-white duration-300 before:absolute before:opacity-10 before:-z-[1] before:scale-0 before:top-0 before:left-0 before:w-full before:h-full before:ease-in-out before:transition-all before:duration-300 before:bg-navBtnBg hover:before:opacity-100 hover:before:scale-100 "
          >
            <i className="ri-messenger-fill cursor-pointer"></i>
          </Link>
        </div>

        {/* texts */}
        <div className="flex flex-col pt-14">
          <h1 className="w-full">
            <img
              src="/images/logo-white.png"
              alt="logo"
              className="max-w-full h-[33px] w-[114px]"
            />
          </h1>
          <div className="flex mt-8">
            <input
              type="text"
              placeholder="E-mail"
              className="px-4 py-2 h-14 bg-firstSectionBg focus:outline-none focus:bg-white w-[28rem]"
            />
            <button className="uppercase px-4 py-2 bg-navBtnBg text-black font-formularMedium">
              subscribe
            </button>
          </div>
          <div className="mt-10 grid grid-cols-2 grid-rows-2 text-white gap-y-6">
            <div className="col-span-1 row-span-1 flex flex-col gap-y-2">
              <div className="text-lg font-formularMedium">E-mail</div>
              <div className="text-white/50">rahulghosh.dev@gmail.com</div>
            </div>
            <div className="col-span-1 row-span-1 flex flex-col gap-y-2">
              <div className="text-lg font-formularMedium">Phone</div>
              <div className="text-white/50">1234567890</div>
            </div>
            <div className="col-span-1 row-span-1 flex flex-col gap-y-2">
              <div className="text-lg font-formularMedium">Address</div>
              <div className="text-white/50">Memari, West Bengal, India</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1/5 px-5 py-3 mt-1">
        <div className="w-full h-full flex justify-start items-center gap-x-12">
          <div className="w-2/4 h-full flex gap-x-10 items-center justify-center">
            <img
              src="/images/footer-brands/dribbble.png"
              alt="dribbble"
              className="opacity-30"
            />
            <img
              src="/images/footer-brands/facebook.png"
              alt="facebook"
              className="opacity-30"
            />
            <img
              src="/images/footer-brands/instagram.png"
              alt="instagram"
              className="opacity-30"
            />
          </div>
          <div className="w-2/4 h-full flex items-center justify-start text-white/30 font-formularThin">
            <p>&copy; 2024 Rahul. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
