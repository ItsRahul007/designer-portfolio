import { classNames } from "@/utils/classnames";
import { I_MyBlog } from "@/utils/myTypes";
import Link from "next/link";
import React from "react";

interface I_SingleBlogCompo extends I_MyBlog {
  isReverce: boolean;
}

const SingleBlogCompo: React.FC<I_SingleBlogCompo> = ({
  date,
  header,
  image,
  paragraph,
  isReverce = false,
}) => {
  return (
    <div
      className={classNames(
        "w-full flex items-start",
        isReverce ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={`flex w-[66%] gap-20 ${isReverce ? "flex-row-reverse" : ""}`}
      >
        <div className="relative z-0">
          <img src={image} alt="blog-image" className="h-auto w-[800px]" />
          <div
            className={classNames(
              "absolute w-[12.5rem] h-[12.5rem] z-[-1] border",
              isReverce
                ? "-bottom-[18px] -left-[18px] border-gray-300"
                : "-top-[18px] -right-[18px] border-orange-200"
            )}
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <p className="text-lg italic text-zinc-500">{date}</p>
          <Link href="#" className="text-[28px]">
            {header}
          </Link>
          <p className="text-base text-zinc-500">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCompo;
