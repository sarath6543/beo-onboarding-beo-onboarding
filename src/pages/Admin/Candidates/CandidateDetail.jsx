import React, { useState } from "react";
import { useParams } from "react-router-dom";

const tabs = [
  { key: "profile", label: "Profile" },
  { key: "documents", label: "Documents" },
  { key: "history", label: "History" },
  { key: "settings", label: "Settings" },
];

const CandidateDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <div>Profile information for candidate ID: {id}</div>;
      case "documents":
        return <div>Documents related to candidate ID: {id}</div>;
      case "history":
        return <div>History and activities for candidate ID: {id}</div>;
      case "settings":
        return <div>Settings for candidate ID: {id}</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <h2>Candidate Detail - ID: {id}</h2>

      <div className="tabs flex border-b border-gray-300 mb-4 ">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`py-2 px-4 mr-2 border-b-2 ${
              activeTab === tab.key
                ? "border-blue-500 font-semibold text-blue-600"
                : "border-transparent text-gray-600 hover:text-blue-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default CandidateDetail;
