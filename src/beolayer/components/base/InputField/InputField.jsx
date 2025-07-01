
import React from "react";

const InputField = ({ label, type = "text", value, onChange, required = true,name }) => (
  <label className="block mb-4 text-sm font-medium text-gray-700">
    {label}
    <input
      type={type}
       name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />
  </label>
);

export default InputField;
