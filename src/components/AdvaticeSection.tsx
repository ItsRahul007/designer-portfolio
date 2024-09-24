import React from "react";

const listItems = [
  {
    text: "Branding",
    icon: <i className="ri-folder-zip-line"></i>,
  },
  {
    text: "UI/UX Design",
    icon: <i className="ri-contrast-drop-2-line"></i>,
  },
  {
    text: "Development",
    icon: <i className="ri-code-s-slash-line"></i>,
  },
];

const AdvaticeSection = () => {
  return (
    <section className="h-[210px] w-full bg-[#151638] flex justify-evenly items-center divide-x">
      {listItems.map(({ icon, text }) => (
        <div className="border-gray-600 h-full w-full flex flex-col gap-2 justify-center items-center text-white hover:text-btnHover duration-300 text-3xl hover:bg-[rgba(255,255,255,0.03)] group">
          <span className="text-4xl text-navBtnBg text-opacity-15 duration-300 group-hover:text-opacity-100">
            {icon}
          </span>
          <span>{text}</span>
        </div>
      ))}
    </section>
  );
};

export default AdvaticeSection;
