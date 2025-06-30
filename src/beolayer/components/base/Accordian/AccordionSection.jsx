import React, { useState } from "react";
import "./AccordionSection.css";
const AccordionSection = ({ icon, title, children, onSave }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="accordion-container">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="header-left">
          {icon && <span className="icon">{icon}</span>}
          <span className="title">{title}</span>
        </div>
        <span className="toggle">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="accordion-body">
          {children}
          <div className="footer">
            <button onClick={onSave}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionSection;
