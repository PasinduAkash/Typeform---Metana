import React, { useEffect, useRef, useState } from "react";

interface DropdownProps {
  options: { [key: string]: any }[];
  label: string;
  id: string;
  selectedVal: string;
  handleChange: (value: any) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  id,
  selectedVal,
  handleChange,
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const selectOption = (option: { [key: string]: any }) => {
    setQuery("");
    handleChange(option[label]);
    setIsOpen(false);
  };

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedVal) return selectedVal;
    return "";
  };

  const filterOptions = () => {
    return options.filter((option) =>
      option[label].toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="dropdown">
      <div className="control">
        <div className="selected-value">
          <input
            ref={inputRef}
            type="text"
            value={getDisplayValue()}
            name="searchTerm"
            onChange={(e) => {
              setQuery(e.target.value);
              handleChange(null);
            }}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className={`arrow ${isOpen ? "open" : ""}`}></div>
      </div>

      {isOpen && (
        <div className="options">
          {filterOptions().map((option, index) => (
            <div
              onClick={() => selectOption(option)}
              className={`option ${
                option[label] === selectedVal ? "selected" : ""
              }`}
              key={`${id}-${index}`}
            >
              {option[label]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
