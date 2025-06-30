import React from "react";
import "./FormWrapper.css";

const FormWrapper = ({ columns = 2, children }) => {
  return (
    <div className={`form-wrapper cols-${columns}`}>
      {children}
    </div>
  );
};

export default FormWrapper;
