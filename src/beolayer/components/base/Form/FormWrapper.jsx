import React from "react";
import "./FormWrapper.css";

const FormWrapper = ({ columns = 2, children, onSave }) => {
  return (
    <div className={`form-wrapper-container`}>
      <div className={`form-wrapper cols-${columns}`}>
        {children}
      </div>

      {onSave && (
        <div className="form-wrapper-save">
          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default FormWrapper;
