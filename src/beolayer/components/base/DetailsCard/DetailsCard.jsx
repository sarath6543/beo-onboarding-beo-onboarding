import React, { useState } from "react";
import Popup from "../pop-up/Popup";

const DetailsCard = ({ title, heading, columns, images = [] }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  const showImages = ["Address Details", "Experience Details", "Education Details"];
  const sectionImage = ["Personal Details", "PAN Card Details", "Aadhaar Card Details", "Address Details"];

  // Normalize columns to always be an array of sections with .data arrays
  const sections =
    Array.isArray(columns) && columns.length > 0 && columns[0].data
      ? columns
      : [{ data: columns }];

  // Utility to check if file type is a doc or pdf
  const isDocFile = (type) => {
    return (
      type === "application/pdf" ||
      type === "application/msword" ||
      type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
  };

  return (
    <>
      <Popup
        type="viewFile"
        fileType={selectedImg?.type}
        children={selectedImg?.url}
        title={selectedImg?.label}
        show={!!selectedImg}
        onClose={() => setSelectedImg(null)}
      />

      <div className="relative border border-gray-300 rounded-lg px-6 pt-8 pb-6 max-w-full font-sans bg-white">
        {title && (
          <div className="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-gray-800">
            {title}
          </div>
        )}

        {heading && (
          <div className="mb-6 text-base font-semibold text-gray-900">
            {heading}
            <hr className="mt-0 border-t border-gray-300" />
          </div>
        )}

        <div className="flex flex-wrap justify-between gap-6">
          <div className="flex-1 min-w-[320px]">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="mb-6">
                {section.sectionTitle && (
                  <div className="mb-4 text-sm font-semibold text-gray-700">
                    {section.sectionTitle}
                    <hr className="w-full border-t border-gray-300"></hr>
                  </div>
                )}
                <div className="flex flex-wrap gap-6">
                {section.data?.map((col, colIdx) => (
  <div key={colIdx} className="min-w-[320px] flex-1">
    {/* If col is an array (array of fields) */}
    {Array.isArray(col) ? (
      col.map((field, idx) => (
        <div key={idx} className="mb-4">
          <div className="text-xs text-gray-500">{field.label}</div>
          <div className="text-sm font-semibold text-gray-800">
            {field.value || "—"}
          </div>
        </div>
      ))
    ) : (
      // If col is a single field object
      <div className="mb-4">
        <div className="text-xs text-gray-500">{col.label}</div>
        <div className="text-sm font-semibold text-gray-800">
          {col.value || "—"}
        </div>
      </div>
    )}
  </div>
))}


                  {/* Render files/images in section.img for sections except specific ones */}
                  {!sectionImage.includes(title) && Array.isArray(section.img) && (
                    <div className="flex justify-end w-full lg:w-auto">
                      <div className="flex flex-wrap gap-6">
                        {section.img.map((img, index) => (
                          <div key={index} className="flex flex-col items-center">
                            {img.label && (
                              <div className="text-xs text-gray-500 mb-1">{img.label}</div>
                            )}

                            {img.url ? (
                              <>
                                {/* Show image or doc icon */}
                                {isDocFile(img.type) ? (
                                  <div className="w-16 h-16 mb-2 flex items-center justify-center bg-gray-100 border border-gray-300 rounded text-xs text-gray-600">
                                    {img.type === "application/pdf" ? "PDF" : "DOC"}
                                  </div>
                                ) : (
                                  <img
                                    src={img.url}
                                    alt={img.label || "File"}
                                    className="w-16 h-16 rounded-md object-cover mb-2 border border-gray-300"
                                  />
                                )}

                                {/* View button */}
                                {img.onViewClick && (
                                  <button
                                    onClick={() => setSelectedImg(img)}
                                    className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition mb-1"
                                  >
                                    View 👁
                                  </button>
                                )}
                              </>
                            ) : (
                              <div className="w-16 h-16 mb-2 flex items-center justify-center bg-gray-50 border border-dashed border-gray-400 rounded text-[10px] text-gray-500 text-center">
                                {img.fallback || "No file uploaded"}
                              </div>
                            )}

                            {/* Upload button: ALWAYS visible */}
                            <label className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition cursor-pointer text-center">
                              Upload
                              <input
                                type="file"
                                accept="image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  if (file && img.onUpload) {
                                    const url = URL.createObjectURL(file);
                                    img.onUpload(file, url);
                                  }
                                }}
                              />
                            </label>
                          </div>
                        ))}


                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* For Personal, PAN, Aadhaar sections - single image/file preview block */}
          {!showImages.includes(title) && images.length > 0 && (
            <div className="flex justify-end w-full lg:w-auto">
              <div className="flex flex-wrap gap-4">
                {images[0]?.url ? (
                  <div className="flex flex-col items-center min-w-[120px]">
                    <div className="text-xs text-gray-500 mb-1">{images[0]?.label}</div>
                    {isDocFile(images[0].type) ? (
                      <div className="w-16 h-16 mb-2 flex items-center justify-center bg-gray-100 border border-gray-300 rounded text-xs text-gray-600">
                        {images[0].type === "application/pdf" ? "PDF" : "DOC"}
                      </div>
                    ) : (
                      <img
                        src={images[0]?.url ?? ""}
                        alt={images[0]?.label || `File`}
                        className="w-16 h-16 rounded-md object-cover mb-2 border border-gray-300"
                      />
                    )}
                    <button
                      onClick={() => setSelectedImg(images[0])}
                      className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition mb-1"
                    >
                      View 👁
                    </button>
                    <label className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition cursor-pointer text-center">
                      Upload
                      <input
                        type="file"
                        accept="image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file && images[0].onUpload) {
                            const url = URL.createObjectURL(file);
                            images[0].onUpload(file, url);
                          }
                        }}
                      />
                    </label>
                  </div>
                ) : (
                  <div className="flex flex-col items-center min-w-[120px]">
                    <div className="text-xs text-gray-500 mb-1">{images[0]?.label || "File"}</div>
                    <div className="w-16 h-16 mb-2 flex items-center justify-center bg-gray-50 border border-dashed border-gray-400 rounded text-[10px] text-gray-500 text-center">
                      {images[0]?.fallback || "No File uploaded"}
                    </div>
                    <label className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition cursor-pointer text-center">
                      Upload
                      <input
                        type="file"
                        accept="image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file && images[0].onUpload) {
                            const url = URL.createObjectURL(file);
                            images[0].onUpload(file, url);
                          }
                        }}
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
