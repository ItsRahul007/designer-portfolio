"use client";

import React, { FC, useState } from "react";
import Dropdown from "@/app/new/Dropdown";
import { EditorState, TreeNode } from "@/utils/DataStructure";
import { EditorType, ExtractorProps, OptionType } from "@/utils/Types";
import { functions, staticValues, testingOptions } from "@/utils/MockData";

const options = testingOptions;

const stringRegex = /"([^\\"]|\\")*"/;

const Page: FC = () => {
  const [editorState, setEditorState] = useState(() => {
    const rootNode = new TreeNode({
      type: "",
      data: {
        key: "",
        type: "",
        label: "",
      },
    });
    return new EditorState(rootNode);
  });

  const [expressionResult, setExpressionResult] = useState<string>("");

  const onChangeFn = (newState: EditorType) => {
    setEditorState(newState);
    const newExp = newState.buildExpression();
    setExpressionResult(
      typeof newExp === "object" ? JSON.stringify(newExp) : newExp
    );
  };

  const expressionRootClass = "root-class";
  const expressionInputClass = "input-class";

  const validationFn = (val: string | number) => {
    const res = !isNaN(val as number) || stringRegex.test(val as string);
    return res;
  };

  return (
    <div className="p-5">
      <div className="mb-4 flex gap-2">
        <label>Target Parameter</label>
        <select>
          {Array.from({ length: 5 }).map((_, i) => (
            <option key={"option " + i}>Option {i + 1}</option>
          ))}
        </select>
      </div>

      <Dropdown
        onChangeFn={onChangeFn}
        expressionRootClass={expressionRootClass}
        expressionInputClass={expressionInputClass}
        options={options}
        placeholder="Enter your expression"
        initialFocus
        validationFn={validationFn}
        node={editorState.root}
        EditorData={editorState}
      />
      {expressionResult && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <h3 className="font-bold mb-2">Expression Result:</h3>
          <pre>
            {expressionResult
              .replace("PLUS", "+")
              .replace("MINUS", "-")
              .replace("DIVIDE", "/")
              .replace("MULTIPLY", "*")}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Page;
