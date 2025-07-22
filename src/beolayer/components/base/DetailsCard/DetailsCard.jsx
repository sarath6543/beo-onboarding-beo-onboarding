import React from "react";
import { useState } from "react";
import Popup from "../pop-up/Popup";

const DetailsCard = ({ title, heading, columns, images = [] }) => {

const [openImageKey, setOpenImageKey] = useState(null);

  // Normalize columns: if not sectioned, wrap as a single section
  const sections =
    Array.isArray(columns) && columns.length > 0 && columns[0].data
      ? columns
      : [{ data: columns }];

  return (
    <>
      

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
                    <hr className="w-full border-t border-gray-300"></hr>
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
  
                  {/*  */}
                <div className="flex justify-end w-full lg:w-auto">  
                  <div className="flex flex-wrap gap-4">
                    {Array.isArray(section.img) && section.img.length > 0 && (
                      <div className="flex flex-row gap-8 items-center min-w-[120px]">
                        {section.img.map((img, index) => {
                          const imageKey = `section-${sectionIdx}-${index}`;
                          // console.log(imageKey);
                          return (
                            <div key={index} className="mb-4 flex flex-col items-center">
                              <div className="text-xs text-gray-500 mb-1">{img.label}</div>
                              {img.type === "application/pdf" ? (
                                // <iframe
                                //   src={img.url}
                                //   title="PDF Preview"
                                //   className="w-16 h-16 rounded border"
                                // ></iframe>
                                <div className="w-16 h-16 mb-2 flex items-center justify-center bg-gray-100 border border-gray-300 rounded text-xs text-gray-600">
                                  PDF
                                </div>
                              ) : (
                                <img
                                  src={img.url}
                                  alt={img.label || `Image`}
                                  className="w-16 h-16 rounded-md object-cover mb-2 border border-gray-300"
                                />
                              )}
                              {/* <img
                                src={img.url}
                                alt={img.label || `Image ${index + 1}`}
                                className="w-16 h-16 rounded-md object-cover mb-2 border border-gray-300"
                              /> */}
                              {img.onViewClick && (
                                <button
                                  onClick={() => setOpenImageKey(imageKey)}
                                  className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition"
                                >
                                  View 👁
                                </button>
                              )}
                              <Popup
                                type="viewFile"
                                fileType={img.type || (img.url?.endsWith(".pdf") ? "application/pdf" : "image/*")}
                                children={img.url}
                                title={img.label}
                                show={openImageKey === imageKey}
                                onClose={() => setOpenImageKey(null)}
                              />
                             {/* { console.log("Popup received fileType:", img.type, "url:",img.url )} */}
                            </div>
                          );
                        })}

                      </div>
                    )}
                  </div>
                </div>
                    {/*  */}
                </div>
              </div>
            ))}
          </div>
  
          {/* Images aligned to the right, inline */}
          {images.length > 0 && (
            <div className="flex justify-end w-full lg:w-auto">
              <div className="flex flex-wrap gap-4">
                {images.map((img, index) => {
                  const imageKey = `main-${index}`;
                  return (
                    <div key={index} className="flex flex-col items-center min-w-[120px]">
                      <div className="text-xs text-gray-500 mb-1">{img.label}</div>
                      <img
                        src={img.url}
                        alt={img.label || `Image ${index + 1}`}
                        className="w-16 h-16 rounded-md object-cover mb-2 border border-gray-300"
                      />
                      {img.onViewClick && (
                        <button
                          onClick={() => setOpenImageKey(imageKey)}
                          className="text-xs px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 transition"
                        >
                          View 👁
                        </button>
                      )}
                      <Popup
                        type="viewFile"
                        fileType={img.type}
                        children={img.url}
                        title={img.label}
                        show={openImageKey === imageKey}
                        onClose={() => setOpenImageKey(null)}
                      />
                    </div>
                  );
                })}

              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
