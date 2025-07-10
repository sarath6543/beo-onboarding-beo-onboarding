import React from 'react';

const DetailsCard = ({ title, columns, photoUrl, onViewClick }) => {
  return (
    <div className="relative border border-gray-300 rounded-lg px-6 pt-8 pb-6 max-w-full font-sans">
      {/* Floating Title */}
      <div className="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-gray-800">
        {title}
      </div>

      <div className="flex flex-wrap gap-6">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="min-w-[180px] flex-1">
            {col.map((field, idx) => (
              <div key={idx} className="mb-4">
                <div className="text-xs text-gray-500">{field.label}</div>
                <div className="text-sm font-semibold">{field.value}</div>
              </div>
            ))}
          </div>
        ))}

        {/* Photo Section */}
        <div className="flex flex-col items-center min-w-[120px] ">
          <div className="text-xs text-gray-500 mb-1">Photo</div>
          {photoUrl && (
            <>
              <img
                src={photoUrl}
                alt="Profile"
                className="w-16 h-16 rounded-md object-cover mb-2 border border-gray-300"
              />
              <button
                onClick={onViewClick}
                className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition"
              >
                view 👁
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
