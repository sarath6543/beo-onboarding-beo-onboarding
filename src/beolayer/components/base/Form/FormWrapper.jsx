import React from "react";
import "./FormWrapper.css"; // Make sure this file exists and is linked properly

const FormWrapper = ({ columns = 2, children, onSave }) => {
  return (
    <div className="form-wrapper-container">
      <div className={`form-wrapper cols-${columns}`}>
        {children}
      </div>

      {onSave && (
        <div className="form-wrapper-save">
          <button
            onClick={onSave}
            className="save-button"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default FormWrapper;
