import React from "react";
import { useNavigate } from "react-router-dom";
import "./StepItem.css"; // Optional: external styles

export default function StepItem({ icon, label, status, path }) {
  const navigate = useNavigate();

  const getStatusClass = () => {
    if (status === "Completed") return "step-chip completed";
    if (status === "InProgress") return "step-chip in-progress";
    return "step-chip yet-to-start";
  };

  const handleClick = () => {
    if (path) navigate(path);
  };

  return (
    <div className="step-item-wrapper" onClick={handleClick}>
      <div className="step-icon">{icon}</div>
      <div className="step-content">
        <div className="step-label">{label}</div>
        <div className={getStatusClass()}>{status}</div>
      </div>
      <div className="step-arrow">➔</div>
    </div>
  );
}
