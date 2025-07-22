import React from "react";
import FontIcon from "../Icons/FontIcon.jsx";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  required = true,
  name,
  asterisk,
  disabled,
  options = [],
  error,
  ...rest
}) => {
  const isUpload = type === "upload";
  const isDropDown = type === "dropdown";

  const selectedOption = options.find((option) => option.value === value) || null;

  return (
    <label className="block mb-4 text-base text-gray-700">
      {label}
      {asterisk && (
        <FontIcon
          iconName="Asterisk"
          size="6px"
          verticalAlign="top"
          color="red"
        />
      )}

      {isUpload ? (
        <div className="relative mt-1 w-full">
          <div className="flex w-full border border-gray-400 rounded-md overflow-hidden">
            <button
              type="button"
              className="w-1/4 bg-gray-500 text-white px-4 py-2 font-light"
              onClick={() => document.getElementById(name).click()}
            >
              Browse
            </button>
            <input
              id={name}
              type="file"
              name={name}
              onChange={onChange}
              disabled={disabled}
              className="w-3/4 px-4 py-2 text-sm text-gray-700 focus:outline-none"
              style={{ display: "none" }}
            />
            <input
              type="text"
              readOnly
              // value={value?.name || ""}
              value={value?.name || value || ""}
              className="w-3/4 px-4 py-2 text-sm text-gray-700 focus:outline-none"
              placeholder="Upload file..."
            />
          </div>
          <div className="flex mt-2">
            <span className="px-4 py-1 mr-1 rounded-md bg-gray-200 text-xs">PNG</span>
            <span className="px-4 py-1 mr-1 rounded-md bg-gray-200 text-xs">JPG</span>
            <span className="px-4 py-1 border mr-1 rounded-md text-xs">&lt; 100 KB</span>
          </div>
        </div>
      ) : isDropDown ? (
        <div className="mb-1">
          <select
            className="mt-1 block w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            name={name}
            value={value}
            required={required}
            disabled={disabled}
          >
            <div className="relative">
              <ListboxButton
                className={`flex justify-between block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-left text-sm text-gray-700 shadow-sm
                  focus:outline-none focus:border-gray-500`}
              >
                {selectedOption?.key || "Select"} <FontIcon size="10" iconName={"downIcon"}/>
              </ListboxButton>

              <ListboxOptions className="absolute z-[5000] mt-1 w-full overflow-visible rounded-md border border-gray-200 bg-white py-1 shadow-lg focus:outline-none">
                {options.map((option) => (
                  <ListboxOption
                    key={option.value}
                    value={option}
                    className={({ active, selected }) =>
                      `cursor-pointer select-none px-4 py-2 text-sm ${
                        active ? "bg-blue-100 text-blue-900" : ""
                      } ${selected ? "font-medium" : "font-normal"}`
                    }
                  >
                    {option.key}
                  </ListboxOption>
                ))}
              </ListboxOptions>

            </div>
          </Listbox>
        </div>
  

        // <div className="mb-1">
        //   <select
        //     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        //     onChange={onChange}
        //     name={name}
        //     value={value}
        //     disabled={disabled}
        //   >
        //     <option value="" disabled hidden>
        //       Select
        //     </option>
        //     {options.map(({ key, value }) => (
        //       <option key={value} value={value}>
        //         {key}
        //       </option>
        //     ))}
        //   </select>
        // </div>

      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...rest}
          className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none
    ${error ? 'border-gray-400' : 'border-gray-400'}
  `}
        />
      )}


      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </label>
  );
};

export default InputField;
