"use client";

import React, { useState } from "react";

const page = () => {
  const [calculation, setCalculation] = useState<string>("");
  const [parameter, setParameter] = useState<string>("P1");

  return (
    <div className="flex flex-col gap-y-4 items-center w-2/4 mx-auto mt-10">
      <div className="flex flex-col gap-y-1">
        <label className="font-medium" htmlFor="">
          Target Parameter
        </label>
        <select name="Target-Parameter" className="w-40 h-8 border-2">
          <option value="T1">T1</option>
          <option value="T2">T2</option>
          <option value="T3">T3</option>
          <option value="T4">T4</option>
          <option value="T5">T5</option>
        </select>
      </div>
      <div className="flex gap-x-1">
        <div className="flex flex-col gap-y-1">
          <label className="font-medium" htmlFor="">
            Parameter
          </label>
          <select
            name="Parameter"
            className="w-40 h-8 border-2"
            onChange={(e) => setParameter(e.target.value)}
            value={parameter}
          >
            <option value="P1">P1</option>
            <option value="P2">P2</option>
            <option value="P3">P3</option>
            <option value="P4">P4</option>
            <option value="P5">P5</option>
          </select>
        </div>
        <button
          className="text-lg p-2 border-2 w-fit h-fit self-baseline"
          onClick={() => {
            setCalculation(calculation + `[${parameter}]`);
          }}
        >
          +
        </button>
      </div>
      <div className="flex flex-col gap-y-1">
        <label className="font-medium" htmlFor="">
          Operation
        </label>
        <select
          name="Operation"
          className="w-40 h-8 border-2"
          disabled={calculation.length === 0}
          onChange={(e) => {
            const isLastOneOperatior =
              calculation.endsWith("+") ||
              calculation.endsWith("-") ||
              calculation.endsWith("/") ||
              calculation.endsWith("%");
            setCalculation(
              !isLastOneOperatior
                ? calculation + `${e.target.value}`
                : calculation.slice(0, calculation.length - 1) +
                    `${e.target.value}`
            );
          }}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="%">%</option>
        </select>
      </div>
      <div className="flex flex-col gap-y-1">
        <label className="font-medium" htmlFor="">
          Calculation
        </label>
        <textarea
          name="calculation"
          rows={5}
          className="border-2 p-2"
          value={calculation}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default page;
