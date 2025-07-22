import React, { useState } from "react";
import PersonalDetailsMain from "../PersonalDetails/PersonalDetailsMain";
import EducationDetailsMain from "../EducationDetails/EducationDetailsMain";
import ExperienceDetailsMain from "../ExperienceDetails/ExperienceDetailsMain";
import DocumentationDetailsMain from "../DocumentationDetails/DocumentationDetailsMain";
import ProgressBar from "../../../beolayer/components/base/ProgressBar/ProgressBar";
import Personalicon from "@/assets/personal_details_icon.svg";
import FontIcon from "../../../beolayer/components/base/Icons/FontIcon.jsx";



const TABS = [
  { key: "personal",
    label: "Personal Details", 
    image: "Personalicon"
  },
  { key: "education", label: "Education Details", icon: "Personalicon" },
  { key: "experience", label: "Experience Details", icon: "💼" },
  { key: "documentation", label: "Documentation Center", icon: "📅" },
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
  <div className="w-full flex flex-wrap bg-white pt-3 pb-3 rounded-2xl shadow-md overflow-hidden">
    {TABS.map((tab) => (
      <button
        key={tab.key}
        onClick={() => setActiveTab(tab.key)}
        className="px-4 py-2 cursor-pointer flex"
      >
        <span
          className={`inline-flex items-center w-95 gap-2 rounded-lg font-medium transition duration-200 px-8 py-3
            ${
              activeTab === tab.key
                ? "bg-[#4C4C4C] text-white"
                : "text-gray-800 hover:bg-gray-100"
            }
          `}
        >
          <span className="text-lg">{tab.icon}</span>
          <span className="text-sm sm:text-base">{tab.label}</span>
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
