import React, { useEffect, useRef, useState } from "react";
import { DropdownProps } from "@/utils/Types";
import DownSelect from "./DownshiftSelect";
import Exp from "./Expression";
import { TreeNode } from "@/utils/DataStructure";

const Drop: React.FC<DropdownProps> = ({
  placeholder,
  EditorData,
  node,
  initialFocus = false,
  options,
  validationFn,
  onChangeFn,
  expressionRootClass,
  expressionInputClass,
}) => {
  const [value, setValue] = useState<string>("");
  const [exp, setExp] = useState<boolean>(false);
  const dropRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (dropRef.current && initialFocus) {
      dropRef.current.focus();
    }
  }, [dropRef.current]);

  const fnKeys: string[] = options
    .filter((fn) => fn.type === "function")
    .map((fn) => fn.key);

  const getValueType = (value: string) => {
    if (fnKeys.includes(value.toLowerCase())) return "fn";
    const listOption = options.find((option) => option.label === value);
    return listOption ? listOption.type : "string";
  };

  const getValueData = (type: string, value: string) => {
    if (type === "fn") {
      return (
        options.find((f) => f.key === value.toLowerCase()) || {
          label: "",
          key: "",
          type: "",
        }
      );
    }
    return {
      label: "",
      key: "",
      type: "",
    };
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const valueType = getValueType(val);
    const valueData = getValueData(valueType, val);
    setValue(val);

    if (node) {
      node.setValue({
        data: {
          ...valueData,
          value: val,
        },
        type: valueType,
      });

      if (valueType === "fn") {
        setExp(true);
        node.clearChildren();
        const fnOption = options.find(
          (opt) => opt.key.toLowerCase() === val.toLowerCase()
        );
        if (fnOption && fnOption.params) {
          fnOption.params.forEach(() => {
            const childNode = new TreeNode({
              data: {
                key: "",
                type: "",
                label: "",
                value: "",
              },
              type: "string",
            });
            node.addChild(childNode);
          });
        }
      } else {
        setExp(false);
        node.clearChildren();
      }
    }

    if (onChangeFn) onChangeFn(EditorData);
  };

  const findAdjacentInput = (
    direction: "next" | "prev"
  ): HTMLElement | null => {
    const root = dropRef.current?.closest(
      '[data-type="knit-ui_extractor-root"]'
    );
    if (!root) return null;

    const inputs = Array.from(root.querySelectorAll("input"));
    const currentIndex = inputs.indexOf(dropRef.current as HTMLInputElement);

    if (direction === "next") {
      return (inputs[currentIndex + 1] as HTMLElement) || null;
    } else {
      return (inputs[currentIndex - 1] as HTMLElement) || null;
    }
  };

  const handleDir = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputNode = dropRef.current!;
    switch (e.key) {
      case "ArrowRight":
        if (inputNode.selectionStart === inputNode.value.length) {
          e.preventDefault();
          const nextNode = findAdjacentInput("next");
          if (nextNode) nextNode.focus();
        }
        break;
      case "ArrowLeft":
        if (inputNode.selectionStart === 0) {
          e.preventDefault();
          const prevNode = findAdjacentInput("prev");
          if (prevNode) prevNode.focus();
        }
        break;
      default:
        break;
    }
  };

  if (!exp) {
    return (
      <DownSelect
        inputRef={dropRef}
        inputPlaceholder={placeholder}
        options={options}
        onKeyDown={handleDir}
        inputValue={value}
        validationFn={validationFn}
        expressionInputClass={expressionInputClass}
        handleValueChange={handleValueChange}
      />
    );
  }

  return (
    <Exp
      EditorData={EditorData}
      options={options}
      setExp={setExp}
      setValue={setValue}
      node={node}
      onChangeFn={onChangeFn}
      validationFn={validationFn}
      expressionRootClass={expressionRootClass}
      expressionInputClass={expressionInputClass}
      fname={value}
    />
  );
};

export default Drop;
