"use client";

import React, { useState } from "react";

interface DropdownOption {
  value: string;
  label: string;
}

// Dropdown options
const dropdownOptions: DropdownOption[] = [
  { value: "P1", label: "P1" },
  { value: "P2", label: "P2" },
  { value: "P3", label: "P3" },
];

const operationOptions: DropdownOption[] = [
  { value: "+", label: "+" },
  { value: "-", label: "-" },
  { value: "*", label: "*" },
  { value: "/", label: "/" },
  { value: "%", label: "%" },
  { value: "(", label: "(" },
  { value: ")", label: ")" },
];

const CalculationComponent: React.FC = () => {
  // State for dropdowns
  const [targetParam, setTargetParam] = useState<string>("");
  const [parameter, setParameter] = useState<string>("");
  const [operation, setOperation] = useState<string>("");
  const [calStr, setCalStr] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key.toLowerCase() === "backspace") {
      //! check if it is a parameter, if it is then remove that in once
      if (calStr.endsWith("]")) {
        const lastBracketIndex = calStr.lastIndexOf("["); //* Find the corresponding '['

        if (lastBracketIndex !== -1) {
          // Delete the whole content inside the brackets
          const str = calStr.substring(0, lastBracketIndex);
          setCalStr(str);
        }
      } else setCalStr((prevStr) => prevStr.slice(0, -1));
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg max-w-[20rem] mx-auto">
      {/* Target Parameter Dropdown */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Target Parameter
        </label>
        <select
          className="block w-full p-2 bg-white border border-gray-300 rounded"
          value={targetParam}
          onChange={(e) => setTargetParam(e.target.value)}
        >
          <option value="">Select Target</option>
          {dropdownOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Parameter Dropdown and Plus Button */}
      <div className="flex items-center mb-4">
        <div className="w-2/3">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Parameter
          </label>
          <select
            className="block w-full p-2 bg-white border border-gray-300 rounded"
            value={parameter}
            onChange={(e) => setParameter(e.target.value)}
          >
            <option value="">Select Parameter</option>
            {dropdownOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!parameter}
          onClick={() => setCalStr((prevStr) => prevStr + `[${parameter}]`)}
        >
          +
        </button>
      </div>

      {/* Operation Dropdown */}
      <div className="flex items-center mb-4">
        <div className="w-2/3">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Operation
          </label>
          <select
            className="block w-full p-2 bg-white border border-gray-300 rounded"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option value="">Select Operation</option>
            {operationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!parameter || !operation}
          onClick={() => setCalStr((prevStr) => prevStr + operation)}
        >
          +
        </button>
      </div>

      {/* Calculation Display */}
      <div className="p-4">
        <p className="text-gray-700 text-lg">Calculation</p>
        <textarea
          value={calStr}
          onChange={() => {}}
          onKeyDown={handleKeyDown}
          className="border w-full"
        />
      </div>
    </div>
  );
};

export default CalculationComponent;
