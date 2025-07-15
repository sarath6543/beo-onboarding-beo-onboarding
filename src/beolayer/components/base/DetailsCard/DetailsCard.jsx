import React from "react";

const DetailsCard = ({ title, heading, columns, images = [] }) => {
  // Normalize columns: if not sectioned, wrap as a single section
  const sections =
    Array.isArray(columns) && columns.length > 0 && columns[0].data
      ? columns
      : [{ data: columns }];

  return (
    <div className="relative border border-gray-300 rounded-lg px-6 pt-8 pb-6 max-w-full font-sans bg-white">
      {/* Floating title */}
      {title && (
        <div className="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-gray-800">
          {title}
        </div>
      )}

      {/* Optional heading */}
      {heading && (
        <div className="mb-6 text-base font-semibold text-gray-900">
          {heading}
          <hr className="mt-0 border-t border-gray-300" />
        </div>
      )}

      {/* Content layout: columns left, images right */}
      <div className="flex flex-wrap justify-between gap-6">
        {/* Columns */}
        <div className="flex-1 min-w-[320px]">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-6">
              {section.sectionTitle && (
                <div className="mb-4 text-sm font-semibold text-gray-700">
                  {section.sectionTitle}
                  <hr class="w-full border-t border-gray-300"></hr>
                </div>
              )}
              <div className="flex flex-wrap gap-6">
                {section.data?.map((col, colIdx) => (
                  <div key={colIdx} className="min-w-[320px] flex-1">
                    {col.map((field, idx) => (
                      <div key={idx} className="mb-4">
                        <div className="text-xs text-gray-500">{field.label}</div>
                        <div className="text-sm font-semibold text-gray-800">
                          {field.value || "—"}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Images aligned to the right, inline */}
        {images.length > 0 && (
          <div className="flex justify-end w-full lg:w-auto">
            <div className="flex flex-wrap gap-4">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;
