import { I_InputWithLabel } from "@/utils/myTypes";
import React from "react";

const InputWithLabel: React.FC<I_InputWithLabel> = ({
  label,
  placeholder,
  type = "string",
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-500 cursor-pointer" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        className="bg-firstSectionBg px-3 py-3 border border-[#f1dfce] focus:bg-white focus:outline-none placeholder:font-formularLight"
      />
    </div>
  );
};

export default InputWithLabel;
