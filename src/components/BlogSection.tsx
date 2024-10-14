import { blogArr } from "@/utils/staticDatas";
import React from "react";
import SingleBlogCompo from "./SingleBlogCompo";

const BlogSection = () => {
  return (
    <section className="h-[1220px] w-full bg-white relative z-0" id="blog">
      <div className="absolute right-0 top-0 h-full w-[38%] flex flex-col z-[-1]">
        <div className="bg-navBtnBg h-[28%]" />
        <div className="flex-1 bg-[url('/images/bg-images/bg-pattern-2.jpg')] object-cover bg-bottom" />
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <div className="2xl:max-w-7xl mx-auto px-10 h-auto flex flex-col self-center">
          <h1 className="text-[#111235] text-6xl pl-[1.1em] font-formularBlack relative before:block before:content-[''] before:border before:w-[.85em] before:border-b-btnHover before:left-0 before:top-[.55em] before:absolute">
            My Blog
          </h1>
          <div className="mt-20 flex flex-col gap-10">
            {blogArr.map((obj, i) => (
              <SingleBlogCompo
                {...obj}
                key={obj.image}
                isReverce={(i + 1) % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
