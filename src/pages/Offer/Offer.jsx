import React, { useState, useEffect, useRef } from "react";
import TopBar from "../../beolayer/layout/TopBar";
import { useNavigate } from "react-router-dom";
import samplePDF from "../../assets/documents/sample.pdf";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import FontIcon from "../../beolayer/components/base/Icons/FontIcon.jsx";


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Offer = () => {
  const navigate = useNavigate();
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const validateFile = (file) => {
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/jpg",
    ];
    const maxSize = 100 * 1024; // 100 KB

    if (!allowedTypes.includes(file.type)) {
      return Promise.resolve("Invalid file type.");
    }
    if (file.size > maxSize) {
      return Promise.resolve("File size must be under 100 KB.");
    }

    // If image, check dimensions asynchronously
    if (file.type.startsWith("image/")) {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          const maxWidth = 800;
          const maxHeight = 600;
          if (img.naturalWidth > maxWidth || img.naturalHeight > maxHeight) {
            resolve(`Image dimensions must be under ${maxWidth}x${maxHeight}px.`);
          } else {
            resolve("");
          }
        };
        img.onerror = () => {
          resolve("Failed to load image for dimension validation.");
        };
        img.src = URL.createObjectURL(file);
      });
    }

    // For PDFs, no dimension validation needed
    return Promise.resolve("");
  };

  // Handle file input change
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const validation = await validateFile(file);
      if (validation) {
        setError(validation);
        setUploadedFile(null);
        setPreviewOpen(false);
      } else {
        setError("");
        setUploadedFile(file);
        setPreviewOpen(false);
      }
    }
  };


  const getPreviewUrl = () => (uploadedFile ? URL.createObjectURL(uploadedFile) : null);

  useEffect(() => {
    return () => {
      if (uploadedFile) {
        URL.revokeObjectURL(getPreviewUrl());
      }
    };
  }, [uploadedFile]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <TopBar />
      </div>

      <div className="mt-20 bg-[#DADADA] flex flex-col justify-center items-center h-20 text-white text-center px-6">
        <p className="text-2xl font-light mb-1">Review & Accept Offer</p>
        <p className="text-lg md:text-xl leading-7 max-w-xl">
          Your joining date with BEO is
        </p>
      </div>

      <div className="bg-white pt-4 pl-5">
        <div className="max-w-6xl mx-auto">
          <div
            className="text-sm text-black cursor-pointer flex items-center mb-1"
            onClick={() => navigate("/")}
          >
            <span className="font-bold mr-1">
              <FontIcon iconName="Back" />
            </span>{" "}
            Back
          </div>
        </div>
        <hr className="border-t border-gray-300 w-full" />
      </div>

      <div className="bg-white font-sans min-h-[60vh] px-6 md:px-8 py-8 pb-40 sm:pb-24">
        <div className="max-w-6xl mx-auto">
          {/* PDF Viewer */}
          <div className="max-h-[344px] overflow-y-auto rounded-xl shadow-md border border-gray-300 p-5 bg-white mb-8">
            <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess} >
              <Page pageNumber={pageNumber} width={1100} renderTextLayer={false}/>
            </Document>
          
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-2 items-stretch">
            {/* Left Column */}
            <div className="flex flex-col justify-between">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:gray-300 transition"
                />
              </div>

              <div className="mt-6">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Comment
                </label>
                <textarea
                  placeholder="Enter your comment"
                  className="w-full h-24 resize-vertical border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:gray-300 transition"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between min-h-[180px]">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Upload Sign
                </label>

{/* Upload Box (Always Visible) */}
<div
  className="border border-gray-300 rounded-lg p-4 text-sm text-gray-700 flex flex-col items-center justify-center bg-white relative overflow-hidden mx-auto"
  style={{
    width: "100%",
    maxWidth: "600px",        // same max width as PDF viewer
    minHeight: "200px",       // fixed height for the box (adjust as needed)
  }}
>
  {!uploadedFile && (
    <label className="flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 w-full h-full transition-all duration-300">
      <FontIcon
        iconName="Upload"
        color="#000"
        size="50px"
        display="inline"
        verticalAlign="text-bottom"
        margin="0.25rem"
      />
      Click to upload
    </label>
  )}

  {/* File Name */}
  {uploadedFile && !previewOpen && (
    <p className="text-sm text-center break-words">{uploadedFile.name}</p>
  )}

  {/* File Preview */}
  {uploadedFile && previewOpen && (
    <div className="w-full h-full flex items-center justify-center">
      {uploadedFile.type === "application/pdf" ? (
        <iframe
          src={getPreviewUrl()}
          title="PDF Preview"
          className="w-full h-full rounded"
          style={{ objectFit: "contain" }}
        />
      ) : (
        <img
          src={getPreviewUrl()}
          alt="Preview"
          className="max-w-full max-h-full object-contain rounded"
        />
      )}
    </div>
  )}

  {/* Single Hidden Input - always present */}
  <input
    type="file"
    accept=".pdf,.jpg,.jpeg,.png"
    onChange={handleFileChange}
    ref={fileInputRef}
    className="absolute inset-0 opacity-0 cursor-pointer"
  />
</div>


                {/* Footer Row: file type + buttons */}
                <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-600">
                  <div>📄 PDF, JPG, JPEG, PNG | &lt; 100 KB</div>

                  {uploadedFile && (
                    <div className="flex gap-2 text-xs">
                      <button
                        type="button"
                        className="bg-white hover:bg-gray-100 border border-gray-400 text-black px-3 py-1 rounded transition"
                        onClick={() => setPreviewOpen((prev) => !prev)}
                      >
                        {previewOpen ? "Hide" : "View"}
                      </button>

                      <button
                        type="button"
                        className="bg-gray-100 hover:bg-gray-200 border border-gray-400 text-black px-3 py-1 rounded transition"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        Add New Sign
                      </button>
                    </div>
                  )}
                </div>

                {error && (
                  <div className="text-red-500 text-xs mt-1">{error}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#F3F3F3] w-full fixed bottom-0 py-2 shadow-inner">
        <div className="max-w-6xl mx-auto px-2 flex flex-col sm:flex-row justify-end gap-5">
          <button className="px-7 py-3 text-sm rounded-full border border-gray-300 bg-white text-black hover:bg-gray-100 font-semibold transition">
            Decline
          </button>
          <button className="px-7 py-3 text-sm rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition font-semibold">
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default Offer;
