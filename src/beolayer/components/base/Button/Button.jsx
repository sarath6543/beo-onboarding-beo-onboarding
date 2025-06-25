
import React from "react";

const Button = ({ children, type = "button", onClick }) => (
  <button
    type={type}
    onClick={onClick}
    className="w-full mt-4 px-4 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
  >
    {children}
  </button>
);

export default Button;
