import React, { useState } from "react";
import PersonalDetailsMain from "../PersonalDetails/PersonalDetailsMain";
import EducationDetailsMain from "../EducationDetails/EducationDetailsMain"
import ExperienceDetailsMain from "../ExperienceDetails/ExperienceDetailsMain";
import DocumentationDetailsMain from "../DocumentationDetails/DocumentationDetailsMain";
import "./BackGroundVerificationContent.css";

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
  <>
    {/* Full width white tab box */}
    <div className="full-width-tab-box">
      <div className="tab-box">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>

    {/* Below the tabs: content */}
    <div className="tab-content">{renderTab()}</div>
  </>
);

}
