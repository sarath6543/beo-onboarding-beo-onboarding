const DetailsCard = ({ title, columns, images = [] }) => {
  return (
    <div className="relative border border-gray-300 rounded-lg px-6 pt-8 pb-6 max-w-full font-sans bg-white">
      <div className="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-gray-800">
        {title}
      </div>

      <div className="flex flex-wrap gap-6">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="min-w-[180px] flex-1">
            {col.map((field, idx) => (
              <div key={idx} className="mb-4">
                <div className="text-xs text-gray-500">{field.label}</div>
                <div className="text-sm font-semibold text-gray-800">
                  {field.value || '—'}
                </div>
              </div>
            ))}
          </div>
        ))}

        {images.length > 0 && (
          <div className="flex gap-4 flex-wrap">
            {images.map((img, index) => (
              <div key={index} className="flex flex-col items-center min-w-[120px]">
                <div className="text-xs text-gray-500 mb-1">{img.label}</div>
                <img
                  src={img.url}
                  alt={img.label || `Image ${index + 1}`}
                  className="w-16 h-16 rounded-md object-cover mb-2 border border-gray-300"
                />
                {img.onViewClick && (
                  <button
                    onClick={img.onViewClick}
                    className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition"
                  >
                    View 👁
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;