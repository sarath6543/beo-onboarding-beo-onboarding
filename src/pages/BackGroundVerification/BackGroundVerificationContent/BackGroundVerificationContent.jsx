import React, { useState } from "react";
import PersonalDetailsMain from "../PersonalDetails/PersonalDetailsMain";
import EducationDetailsMain from "../EducationDetails/EducationDetailsMain";
import ExperienceDetailsMain from "../ExperienceDetails/ExperienceDetailsMain";
import DocumentationDetailsMain from "../DocumentationDetails/DocumentationDetailsMain";
import ProgressBar from "../../../beolayer/components/base/ProgressBar/ProgressBar";

const TABS = [
  { key: "personal", label: "Personal Details", icon: "👤" },
  { key: "education", label: "Education Details", icon: "🎓" },
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
    <div className="w-[95vw] mx-auto box-border">
      {/* Tabs */}
<div className="w-full mb-6">
  <div className="w-full flex flex-wrap bg-white pt-4 rounded-2xl shadow-md overflow-hidden">
    {TABS.map((tab) => (
      <button
        key={tab.key}
        onClick={() => setActiveTab(tab.key)}
        className="w-full sm:w-1/4 px-4 py-2 cursor-pointer flex justify-center"
      >
        <span
          className={`inline-flex items-center gap-2 rounded-lg font-medium transition duration-200 px-8 py-1
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
    <ProgressBar completed={40}/>
  </div>  
</div>

      {/* Content */}
      <div className="w-full">{renderTab()}</div>
    </div>
  );
}
