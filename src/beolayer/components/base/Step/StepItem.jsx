// StepItem.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StepItem.css'; // Assuming your CSS is in this file

const StepItem = ({ icon, label, status, path }) => {
  const navigate = useNavigate();

  const getStatusClass = () => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'completed';
      case 'inprogress':
        return 'in-progress';
      case 'yet to start':
        return 'yet-to-start';
      default:
        return '';
    }
  };

  return (
    <li className="step-item-wrapper" onClick={() => navigate(path)}>
      <div className="step-icon">{icon}</div>
      <div className="step-content">
        <span className="step-label">{label}</span>
        <span className={`step-chip ${getStatusClass()}`}>{status}</span>
      </div>
      <div className="step-arrow">➔</div>
    </li>
  );
};

export default StepItem;
