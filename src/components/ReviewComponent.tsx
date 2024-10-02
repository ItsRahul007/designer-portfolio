import { T_Reviews } from "@/utils/myTypes";
import Image from "next/image";
import React from "react";

const ReviewComponent: React.FC<T_Reviews> = ({ name, image, comment }) => {
  return (
    <div className="h-[415px] z-0 w-full flex flex-col px-7 pb-6 bg-firstSectionBg items-center justify-center relative before:absolute before:content-[''] before:h-full before:w-full before:bg-navBtnBg before:duration-[600ms] before:ease-in-out before:z-[-1] before:translate-y-[95%] hover:before:translate-y-[-95%] before:left-0 before:top-0 before:right-0 before:bottom-0 overflow-hidden">
      <p className="text-[27px] font-extralight italic font-formularLight leading-9">
        {comment}
      </p>
      <div className="mt-7 flex gap-4 w-full justify-start items-center">
        <div className="h-[67px] w-[67px]">
          <Image
            src={image}
            alt={"avatar of " + name}
            height={67}
            width={67}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-btnHover text-3xl text-opacity-85 capitalize">
            {name}
          </span>
          <span>Client</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
