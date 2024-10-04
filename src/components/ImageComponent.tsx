import React from "react";
import Image from "next/image";

interface I_ImageComponent {
  src: string;
  alt: string;
  tags: string[];
}

const ImageComponent: React.FC<I_ImageComponent> = ({ src, alt, tags }) => {
  return (
    <div className="w-[370px] block touch-pan-y min-h-1 relative select-none">
      <div className="w-full relative">
        <Image
          src={src}
          alt={alt}
          placeholder="blur"
          blurDataURL={src}
          className="w-full"
          width={370}
          height={0}
          sizes="370px"
          style={{ height: "auto" }}
        />
        <div className="absolute flex gap-2 top-4 left-4">
          {tags.map((str) => (
            <div
              className="px-2 py-1 bg-white hover:bg-btnHover hover:text-white duration-300 cursor-pointer capitalize"
              key={str + alt}
            >
              {str}
            </div>
          ))}
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-3xl mb-1 capitalize cursor-pointer">{alt}</h2>
        <h5 className="text-lg text-btnHover cursor-pointer hover:text-opacity-50 duration-300">
          Explore
        </h5>
      </div>
    </div>
  );
};

export default ImageComponent;
