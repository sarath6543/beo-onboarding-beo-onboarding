import React, { useState } from "react";
import TopBar from "../../beolayer/layout/TopBar";
import { useNavigate } from "react-router-dom";
import samplePDF from "../../assets/documents/sample_offer.pdf";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import FontIcon from "../../beolayer/components/base/Icons/FontIcon.jsx";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Offer = () => {
  const navigate = useNavigate();
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const validateFile = (file) => {
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];
    const maxSize = 100 * 1024;

    if (!allowedTypes.includes(file.type)) {
      return "Invalid file type.";
    }
    if (file.size > maxSize) {
      return "File size must be under 100 KB.";
    }
    return "";
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validation = validateFile(file);
      if (validation) {
        setError(validation);
        setUploadedFile(null);
      } else {
        setError("");
        setUploadedFile(file);
      }
    }
  };

  const getPreviewUrl = () => (uploadedFile ? URL.createObjectURL(uploadedFile) : null);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <TopBar />
      </div>

      <div className="mt-20 bg-[#DADADA] flex flex-col justify-center items-center h-20 text-white text-center px-6">
        <p className="text-2xl font-light mb-1">Review & Accept Offer</p>
        <p className="text-lg md:text-xl leading-7 max-w-xl">Your joining date with BEO is</p>
      </div>

      <div className="bg-white pt-4 pl-5">
        <div className="max-w-6xl mx-auto">
          <div
            className="text-sm text-black cursor-pointer flex items-center mb-1"
            onClick={() => navigate("/")}
          >
            <span className="font-bold mr-1"><FontIcon iconName="Back" /></span> Back
          </div>
        </div>
        <hr className="border-t border-gray-300 w-full" />
      </div>

      {/* Add bottom padding here to avoid overlap */}
      <div className="bg-white font-sans min-h-[60vh] px-6 md:px-8 py-8 pb-40 sm:pb-24">
        <div className="max-w-6xl mx-auto">

          {/* PDF Viewer */}
          <div
            style={{ scrollbarGutter: "stable" }}
            className="max-h-[344px] overflow-y-auto rounded-xl shadow-md border border-gray-300 p-5 bg-white mb-8"
          >
            <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} width={600} />
            </Document>
            <p className="text-sm mt-3 text-center text-gray-600">
              Page {pageNumber} of {numPages}
            </p>
          </div>

          {/* Form Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-2 items-stretch">
            {/* Left Column */}
            <div className="flex flex-col justify-between">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:gray-300 transition"
                />
              </div>

              <div className="mt-6">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Comment</label>
                <textarea
                  placeholder="Enter your comment"
                  className="w-full h-24 resize-vertical border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:gray-300 transition"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between min-h-[180px]">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Upload Sign</label>
                <label
                  className="border border-gray-300 rounded-lg p-4 text-center text-sm text-gray-500 cursor-pointer flex flex-col items-center justify-center hover:bg-gray-100 transition duration-300 select-none"
                  style={{ minHeight: "140px" }}
                >
                  <FontIcon iconName="Upload" color="#000" size="50px" display="inline" verticalAlign="text-bottom" margin="0.25rem" />
                  {uploadedFile ? uploadedFile.name : "Click to upload"}
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* This was the hidden portion — now fixed */}
              <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-600 gap-2">
                <div>📄 PDF, JPG, JPEG, PNG | &lt; 100 KB</div>
                {uploadedFile && (
                  <button
                    type="button"
                    className="bg-white text-black rounded hover:bg-gray-300 transition-colors duration-300 text-sm border border-[#DADADA] px-4 py-2"
                    onClick={() => setPreviewOpen(true)}
                  >
                    View
                  </button>
                )}
              </div>

              {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
            </div>
          </div>

        </div>
      </div>

      {/* Fixed Footer */}
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

      {/* Preview Modal */}
      {previewOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center pointer-events-auto">
          <div className="absolute inset-0 backdrop-blur-sm backdrop-brightness-95"></div>
          <div className="relative bg-white/80 backdrop-blur-md p-4 rounded shadow-xl max-w-[90%] max-h-[90%] overflow-auto z-50">
            <button
              onClick={() => setPreviewOpen(false)}
              className="absolute top-2 right-2 text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
            >
              Close
            </button>
            <div className="mt-6">
              {uploadedFile?.type === "application/pdf" ? (
                <iframe
                  src={getPreviewUrl()}
                  title="PDF Preview"
                  className="w-full h-[500px]"
                />
              ) : (
                <img
                  src={getPreviewUrl()}
                  alt="Signature Preview"
                  className="max-w-full max-h-[500px] mx-auto"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Offer;
