import React, { useState } from "react";
import FontIcon from "../Icons/FontIcon.jsx.jsx";

const AccordionSection = ({ title, children,icon }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full border-2 border-gray-300 rounded-2xl my-2.5 bg-[#DADADA] p-4 box-border">
      {/* Header */}
      <div className="flex justify-between items-center p-3 bg-[#DCACACA] rounded-md">
            <span className="font-semibold flex">{icon}{title}</span>
       

        {/* Arrow Toggle Only */}
        <span
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer ml-4"
        >
          {isOpen ? (
            <FontIcon iconName="UpArrow" />
          ) : (
            <FontIcon iconName="DownArrow" />
          )}
        </span>
      </div>

      {/* Body */}
      {isOpen && (
        <div className="bg-white mt-3 rounded-xl shadow-sm overflow-hidden">
          <div className="p-4">{children}</div>
        </div>
      )}
    </div>
  );
};

export default AccordionSection;
