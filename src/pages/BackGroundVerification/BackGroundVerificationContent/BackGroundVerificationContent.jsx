import React, { useState } from "react";
import PersonalDetailsMain from "../PersonalDetails/PersonalDetailsMain";
import EducationDetailsMain from "../EducationDetails/EducationDetailsMain";
import ExperienceDetailsMain from "../ExperienceDetails/ExperienceDetailsMain";
import DocumentationDetailsMain from "../DocumentationDetails/DocumentationDetailsMain";
import ProgressBar from "../../../beolayer/components/base/ProgressBar/ProgressBar";
import { BsPersonCircle } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import { BsPersonSquare } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";

const TABS = [
  { key: "personal",
    label: "Personal Details", 
    icon:<BsPersonCircle />
  },
  { key: "education", label: "Education Details", icon: <GiGraduateCap /> },
  { key: "experience", label: "Experience Details", icon: <BsPersonSquare /> },
  { key: "documentation", label: "Documentation Center", icon: <GrDocumentText /> },
];

export default function BackgroundVerificationContent() {
  const [activeTab, setActiveTab] = useState("personal");

  const renderTab = () => {
    switch (activeTab) {
      case "personal": return <PersonalDetailsMain />;
      case "education": return <EducationDetailsMain />;
      case "experience": return <ExperienceDetailsMain />;
      case "documentation": return <DocumentationDetailsMain/>;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto box-border">
      {/* Tabs */}
<div className="w-full mb-3">
  <div className="w-full flex flex-wrap bg-white pt-3 pb-3 rounded-2xl overflow-hidden">
    {TABS.map((tab) => (
      <button
        key={tab.key}
        onClick={() => setActiveTab(tab.key)}
        className="px-4 py-2 cursor-pointer flex"
      >
        <span
          className={`inline-flex items-center w-95 gap-2 rounded-2xl font-medium transition duration-200 px-8 py-3
            ${
              activeTab === tab.key
                ? "bg-[#4C4C4C] text-white"
                : "text-gray-800 hover:bg-gray-100"
            }
          `}
        >
          <span className="text-3xl">{tab.icon}</span>
          <span className="font-light text-xl">{tab.label}</span>
        </span>
      </button>
    ))}
  </div>  
</div>

<ProgressBar completed={80}/>

      {/* Content */}
      <div className="w-full">{renderTab()}</div>
    </div>
  );
}
