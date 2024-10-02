import { useCombobox } from "downshift";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { OptionType, SelectorPropTypes } from "@/utils/Types";

const menuStyles: CSSProperties = {
  backgroundColor: "white",
  fontWeight: "normal",
  position: "absolute",
};

const textContentStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  visibility: "hidden",
  height: 0,
  overflow: "scroll",
  whiteSpace: "pre",
};

const DropdownCombobox: React.FC<SelectorPropTypes> = ({
  inputRef,
  inputPlaceholder,
  onKeyDown,
  handleValueChange,
  options,
  validationFn,
  inputValue,
  expressionInputClass,
}) => {
  const [inputItems, setInputItems] = useState<OptionType[]>(options);
  const [valid, setValid] = useState<boolean>(true);
  const [valueType, setValueType] = useState<string>("string");

  const matchesAnInput: boolean = options.some(
    (item) => item.label === inputValue
  );

  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputItems(
      options.filter((item) => {
        return item.key.toLowerCase().startsWith(inputValue.toLowerCase());
      })
    );
    if (validationFn) {
      validationFn(inputValue) || matchesAnInput
        ? setValid(true)
        : setValid(false);
    }
  }, [inputValue, options, validationFn, matchesAnInput]);

  const handleValueTypeChange = (val: string): void => {
    const isPresentInOptions = options.find((option) => option.label === val);
    if (isPresentInOptions) {
      setValueType(isPresentInOptions.type);
    } else {
      setValueType("string");
    }
  };

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      handleValueChange({ target: { value: inputValue || "" } });
      handleValueTypeChange(inputValue || "");
    },
    itemToString: (item) => (item ? item.label : ""),
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        handleValueChange({ target: { value: selectedItem.label } });
        setValueType(selectedItem.type);
      }
    },
  });

  const getInputWidth = () => {
    if (textRef.current) {
      return textRef.current.scrollWidth + 8;
    }
    return "10rem";
  };

  const showMenu = isOpen && !matchesAnInput && inputItems.length > 0;

  return (
    <div className={expressionInputClass}>
      <div>
        <input
          {...getInputProps({
            ref: inputRef,
            placeholder: inputPlaceholder,
            onKeyDown,
            style: {
              width: getInputWidth(),
            },
          })}
          data-valid={valid}
          data-value-type={valueType}
        />
        <button
          type="button"
          {...getToggleButtonProps()}
          aria-label="toggle menu"
        ></button>
      </div>
      <div ref={textRef} style={textContentStyle}>
        {inputValue || inputPlaceholder}
      </div>
      {showMenu && (
        <ul {...getMenuProps()} style={menuStyles}>
          {inputItems.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? { backgroundColor: "#bde4ff" } : {}
              }
              key={`${item.key}${index}`}
              {...getItemProps({ item, index })}
              className="py-1 px-2"
            >
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownCombobox;
