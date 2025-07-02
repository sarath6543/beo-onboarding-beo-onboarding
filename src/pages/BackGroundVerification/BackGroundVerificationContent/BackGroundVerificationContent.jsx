import React, { useState } from "react";
import PersonalDetailsMain from "../PersonalDetails/PersonalDetailsMain";

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
      case "personal":
        return <PersonalDetailsMain />;
      // case "education": return <EducationDetailsMain />;
      // case "experience": return <ExperienceDetailsMain />;
      default:
        return null;
    }
  };

  return (
    <div className="w-[95vw] mx-auto box-border">
      {/* Tabs */}
  <div className="w-full mb-6">
  <div className="w-full flex flex-wrap gap-2 bg-white p-4 rounded-2xl shadow-md">
    {TABS.map((tab) => (
      <button
        key={tab.key}
        onClick={() => setActiveTab(tab.key)}
        className={`flex-grow sm:flex-grow-0 sm:w-auto flex items-center justify-center gap-2 min-w-[120px] px-4 py-2 text-center rounded-lg font-medium transition duration-200
          ${
            activeTab === tab.key
              ? "bg-[#DADADA] text-white"
              : "bg-transparent text-gray-800 hover:bg-gray-100"
          }
        `}
      >
        <span className="text-lg">{tab.icon}</span>
        <span className="text-sm sm:text-base">{tab.label}</span>
      </button>
    ))}
  </div>
</div>


      {/* Content */}
      <div className="w-full">{renderTab()}</div>
    </div>
  );
}
