
// import React from "react";

// const InputField = ({ label, type = "text", value, onChange, required = true,name }) => (
//   <label className="block mb-4 text-sm font-medium text-gray-700">
//     {label}
//     <input
//       type={type}
//        name={name}
//       value={value}
//       onChange={onChange}
//       required={required}
//       className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//     />
//   </label>
// );

// export default InputField;

import { object } from "prop-types";
import React from "react";

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  required = true,
  name,
  disabled = false,
  options ={}
}) => {

  const isUpload = type === "upload";
  const isDropDown = type === "dropdown"

  return (
    <label className="block mb-4 text-sm font-medium text-gray-700">
      {label}
      {isUpload ? (
        <div className="relative mt-1 w-full">
          <div className="flex w-full border border-gray-300 rounded-md shadow-sm overflow-hidden">
            <button
              type="button"
              className="w-1/4 bg-[#ABABAB] text-[#4E4E4E] text-sm font-light-semibold px-4 py-2"
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
              disabled={disabled}
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
            {Object.entries(options).map(([label,value])=>(
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      ) : (
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

