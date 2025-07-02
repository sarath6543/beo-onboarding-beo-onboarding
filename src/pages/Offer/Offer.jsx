import React, { useState } from "react";
import TopBar from "../../beolayer/layout/TopBar";
import { useNavigate } from "react-router-dom";
import samplePDF from "../../assets/documents/sample_offer.pdf";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Offer = () => {
  const navigate = useNavigate();
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <TopBar />
      </div>

      {/* Banner */}
      <div className="mt-20 bg-gray-300 flex justify-center items-center h-24 text-white text-center flex-col">
        <p className="text-2xl font-light">Review & Accept Offer</p>
        <p className="text-xl leading-8">Your joining date with BEO is</p>
      </div>

      {/* Container */}
      <div className="pt-16 min-h-[70vh] bg-gray-100 px-6 font-sans">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
          <div className="p-4 md:p-8">

            {/* Back */}
            <div
              className="text-sm text-black cursor-pointer flex items-center mb-2"
              onClick={() => navigate("/")}
            >
              <span className="mr-1 font-bold">←</span> Back
            </div>

            <hr className="border-t border-gray-300 mb-6" />

            {/* PDF Preview */}
            <div className="max-h-[400px] overflow-y-auto border border-gray-300 p-4 bg-white mb-5">
              <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>
              <p className="text-sm mt-2 text-center">
                Page {pageNumber} of {numPages}
              </p>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div className="mt-4">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Comment
                  </label>
                  <textarea
                    placeholder="Enter your comment"
                    className="w-full h-20 resize-vertical border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Upload Sign
                </label>
                <div className="flex-1 border border-gray-300 rounded-lg p-4 text-center text-sm text-gray-500 cursor-pointer flex flex-col justify-center hover:bg-gray-100 transition duration-300">
                  Click to upload
                  <div className="text-xs text-gray-400 mt-2">
                    PDF, DOCX, TXT | &lt; 10 MB
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button className="px-6 py-2 text-sm rounded-md border border-gray-300 bg-white text-black hover:bg-gray-100">
                Decline
              </button>
              <button className="px-6 py-2 text-sm rounded-md bg-yellow-400 text-white hover:bg-yellow-500 transition">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
