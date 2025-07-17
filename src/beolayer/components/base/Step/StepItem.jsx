import React from 'react';
import { useNavigate } from 'react-router-dom';

const StepItem = ({ icon, label, status, path }) => {
  const navigate = useNavigate();

  const getStatusClasses = () => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'bg-green-500 text-white';
      case 'inprogress':
        return 'bg-orange-500 text-white';
      case 'yet to start':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-gray-300 text-white';
    }
  };

  return (
    <li
      className="flex items-start justify-between p-4 mb-2 bg-white border-b-[1.5px] border-gray-200 cursor-pointer hover:bg-gray-100 transition"
      onClick={() => navigate(path)}
    >
      {/* Icon */}
      <div className="text-[20px] mr-3">{icon}</div>

      {/* Content */}
      <div className="flex-1 flex flex-col pb-4">
        <span className="text-base font-medium mb-1">{label}</span>
        <span
          className={`text-xs py-1 px-3 rounded-full capitalize w-fit ${getStatusClasses()}`}
        >
          {status}
        </span>
      </div>

      {/* Arrow */}
      <div className="text-lg ml-3 text-gray-500">➔</div>
    </li>
  );
};

export default StepItem;
