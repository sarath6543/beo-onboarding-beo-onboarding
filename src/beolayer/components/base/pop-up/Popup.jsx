import React, { useState } from 'react';


const Popup = ({ onClose, show, title, children }) => {
    
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
