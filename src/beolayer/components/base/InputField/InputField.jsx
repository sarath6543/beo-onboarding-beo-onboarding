import React from "react";
import FontIcon from "../Icons/FontIcon.jsx";


const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  required = true,
  name,
  asterisk,
  disabled,
  options ={}
}) => {
  const isUpload = type === "upload";
  const isDropDown = type === "dropdown"

  return (
    <label className="block mb-4 text-sm font-medium text-gray-700">
      {label}{asterisk && <FontIcon iconName="Asterisk" size="6px" verticalAlign="top" color="red"/>}
      {isUpload ? (
        <div className="relative mt-1 w-full">
          <div className="flex w-full border border-gray-300 rounded-md shadow-sm overflow-hidden">
            <button
              type="button"
              className="w-1/4 bg-gray-500 text-white text-sm font-medium px-4 py-2"
              onClick={() => document.getElementById(name).click()}
            >
              Browse
            </button>
            <input
              id={name}
              type="file"
              name={name}
              onChange={onChange}
              required={required}
              className="w-3/4 px-4 py-2 text-sm text-gray-700 focus:outline-none"
              style={{ display: "none" }}
            />
            <input
              type="text"
              readOnly
              value={value?.name || ""}
              className="w-3/4 px-4 py-2 text-sm text-gray-700 focus:outline-none"
              placeholder="Upload file..."
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">PDF, JPG</p>
        </div>
      ) : isDropDown ?(
        <div className='mb-4'>
          <select 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={onChange}
            name={name}
            value={value}
            required={required}
            disabled={disabled}
            >
            <option value="" disabled hidden>Select</option>
            {options.map(({key,value})=>(
              <option key={value} value={value}>{key}</option>
            ))}
          </select>
        </div>
      ) :
      
      (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      )}
    </label>
  );
};

export default InputField;
