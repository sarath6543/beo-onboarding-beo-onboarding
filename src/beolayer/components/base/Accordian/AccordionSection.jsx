import React, { useState } from "react";
import "./AccordionSection.css";

const AccordionSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="accordion-container">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="title">{title}</span>
        <span className="toggle">{isOpen ? "Λ" : "V"}</span>
      </div>

      {isOpen && (
        <div className="accordion-body">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionSection;
