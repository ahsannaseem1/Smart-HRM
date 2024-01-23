import React, { useState } from "react";

const InputField = ({ label, type, id, name, placeholder, autoComplete }) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    if (!inputValue) {
      setIsFocused(false);
    }
  };

  return (
    <div className="mb-4 relative">
      <label
        htmlFor={id}
        className={`absolute transition-all duration-300 ${
          (isFocused || inputValue) ? "text-sm  text-white -top-6 left-1" : "top-2 left-3 md:left-3 sm:left-2 sm:text-xs md:text-sm lg:text-sm text-gray-500"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={`p-2 border rounded w-full outline-none ${
          isFocused ? "text-black" : "text-gray-800"
        } bg-gray-100`} // Use a different background color
        placeholder={isFocused ? "" : placeholder}
        autoComplete={autoComplete}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={inputValue} 
      />
    </div>
  );
};

export default InputField;
