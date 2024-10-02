import React, { FC, useEffect, useRef, useState } from "react";
import { TreeNode } from "@/utils/DataStructure";
import { ExpressionRootPropTypes, OptionType } from "@/utils/Types";
import Drop from "./Dropdown";

const Expression: FC<ExpressionRootPropTypes> = ({
  fname,
  node,
  EditorData,
  setExp,
  options,
  setValue,
  onChangeFn,
  expressionRootClass = "",
  expressionInputClass = "",
  validationFn,
}) => {
  const [rootFocus, setRootFocus] = useState(false);
  const expressionRoot = useRef<HTMLSpanElement>(null);
  const fnData: OptionType | undefined = options.find(
    (f) => f.key === fname.toLowerCase()
  );

  useEffect(() => {
    if (node && fnData && fnData.params) {
      node.clearChildren();
      fnData.params.forEach(() => {
        const refNode = new TreeNode({
          data: {
            key: "",
            type: "",
            label: "",
          },
          type: "string",
        });
        node.addChild(refNode);
      });
    }
  }, [fname, node, fnData]);

  const findNextNode = () => {
    if (!expressionRoot.current) return null;
    const children = expressionRoot.current.querySelectorAll(
      'input, [tabindex="0"]'
    );
    const currentIndex = Array.from(children).findIndex(
      (el) => el === document.activeElement
    );
    return children[currentIndex + 1] as HTMLElement | null;
  };

  const findPrevNode = () => {
    if (!expressionRoot.current) return null;
    const children = expressionRoot.current.querySelectorAll(
      'input, [tabindex="0"]'
    );
    const currentIndex = Array.from(children).findIndex(
      (el) => el === document.activeElement
    );
    return children[currentIndex - 1] as HTMLElement | null;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    switch (e.key) {
      case "Delete":
        if (rootFocus) {
          setExp(false);
          node.clearChildren();
          setValue("");
        }
        break;
      case "ArrowRight":
        const nextNode = findNextNode();
        if (nextNode) {
          e.preventDefault();
          nextNode.focus();
        }
        break;
      case "ArrowLeft":
        const prevNode = findPrevNode();
        if (prevNode) {
          e.preventDefault();
          prevNode.focus();
        }
        break;
      default:
        return;
    }
  };

  const PHDom = () => {
    if (!fnData || !fnData.params) return null;
    return fnData.params.map((param, i) => (
      <React.Fragment key={i + param}>
        <Drop
          EditorData={EditorData}
          onChangeFn={onChangeFn}
          options={options}
          expressionInputClass={expressionInputClass}
          expressionRootClass={expressionRootClass}
          node={node?.children && node.children[i]}
          validationFn={validationFn}
          initialFocus={i === 0}
          placeholder={param}
        />
        {i !== fnData.params!.length - 1 && <span>{fnData.value}</span>}
      </React.Fragment>
    ));
  };

  if (fname) {
    return (
      <span
        ref={expressionRoot}
        className={expressionRootClass}
        data-type="expression-root"
        onKeyDown={handleKeyDown}
        onFocus={() => setRootFocus(true)}
        onBlur={() => setRootFocus(false)}
        tabIndex={0}
        style={{ display: "flex" }}
      >
        ({PHDom()})
      </span>
    );
  }
  return null;
};

export default Expression;
