import React, { useState } from "react";
import FontIcon from "../Icons/FontIcon.jsx.jsx";

const AccordionSection = ({ title, children,icon }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full border-2 md:border-[#CACACA] rounded-2xl my-2.5 bg-[#DADADA] p-4 box-border">
      {/* Header */}

      <div className="grid auto-rows-min grid-cols-2 gap-4 py-3">
        <div className="flex text-2xl items-center">
            <span className="bg-gray-800 text-white rounded-full mr-4 text-2xl p-2">{icon}</span>
            <span>{title}</span>             
        </div>   

  <div className="flex justify-end">
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
</div>
      
      
          
       
      

      {/* Body */}
      {isOpen && (
        <div className="bg-white mt-3 rounded-xl md:border-[#CACACA] overflow-hidden">
          <div className="">{children}</div>
        </div>
      )}
    </div>
  );
};

export default AccordionSection;
