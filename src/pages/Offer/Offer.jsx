
import React, { useState, useEffect, useRef } from "react";
import TopBar from "../../beolayer/layout/TopBar";
import { useNavigate } from "react-router-dom";
import FontIcon from "../../beolayer/components/base/Icons/FontIcon.jsx";
 import email from "@/assets/email_ico.svg";
import Popup from "../../beolayer/components/base/pop-up/Popup.jsx";



const Offer = () => {
  const navigate = useNavigate();
  const [declinePopup, setDeclinePopup] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const validateFile = (file) => {
    const allowedTypes = [
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

    return Promise.resolve("");
  };

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
      <Popup
        type={"validation"}
        children={`Please briefly explain your reason for declining the offer.`}
        show={declinePopup}
        onClose={() => setDeclinePopup(false)}
      />

      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <TopBar />
      </div>

      <div className="mt-20 bg-[url('@/assets/review-bg.svg')] bg-cover bg-center h-45 flex flex-col justify-center items-center text-white px-6">
        <div className="flex justify-between items-center">
          <div className="mr-4 flex justify-center items-center">
            <img src={email} alt="email_ico" />
          </div>
          <div className="flex-1 flex flex-col pb-4">
            <p className="text-4xl font-light pb-3">Review & Accept Offer</p>
            <p className="text-lg md:text-xl leading-7 max-w-xl font-light">
              Your joining date with BEO is
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-4">
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
        <hr className="border-t border-gray-200 w-full" />
      </div>

      <div className="bg-white font-sans min-h-[40vh] px-6 md:px-8 py-8 pb-40 sm:pb-24">
        <div className="max-w-6xl mx-auto">
          {/* HTML Offer Letter Viewer */}
          <div className="rounded-xl border border-gray-300 p-3 bg-white mb-4">
            <iframe
              src="/offer.html"
              title="Offer Letter"
              className="w-full h-[600px] border border-gray-100 rounded-md"
              style={{ background: "#fff" }}
            />
          {uploadedFile && (
  <div className="mt-6 ml-auto" style={{ width: "280px" }}>
    <div
      className="bg-white flex items-center justify-center rounded"
      style={{ width: "280px", height: "120px" }}
    >
      <img
        src={getPreviewUrl()}
        alt="Signature Preview"
        className="max-w-full max-h-full object-contain"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  </div>
)}

          </div>

          {/* Signature below HTML if uploaded */}
      

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-2 items-stretch">
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

            {/* Right Column - Signature Upload */}
            <div className="flex flex-col justify-between min-h-[180px]">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Upload Sign
                </label>

                <div
                  className="border border-gray-300 rounded-lg text-sm text-gray-700 flex items-center justify-center bg-white relative overflow-hidden mx-auto"
                  style={{ width: "100%", maxWidth: "600px", height: "150px" }}
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

               {uploadedFile && (
  <div
    className="relative border-2 border-gray-500 bg-white flex items-center justify-center rounded mx-auto"
    style={{ width: "280px", height: "120px" }}
  >
    <img
      src={getPreviewUrl()}
      alt="Signature Preview"
      className="max-w-full max-h-full object-contain"
      style={{ width: "100%", height: "100%" }}
    />
  </div>
)}


                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>

                <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-600">
                  <div className="flex">
                    <span className="px-4 py-2 mr-1 rounded-md bg-gray-200 text-sm">
                      JPEG
                    </span>
                    <span className="px-4 py-2 mr-1 rounded-md bg-gray-200 text-sm">
                      PNG
                    </span>
                     <span className="px-4 py-2 mr-1 rounded-md bg-gray-200 text-sm">
                      JPG
                    </span>
                    <span
                      className="px-4 py-2 border mr-1 rounded-md text-[10px]"
                      style={{
                        display: "inline-block",
                        whiteSpace: "normal",
                        lineHeight: "1",
                      }}
                    >
                      &lt; 100 KB
                      <br />
                      &lt; 280px X 120px
                    </span>
                  </div>

                  {uploadedFile && (
                    <div className="flex gap-2 text-xs">
                      {/* <button
                        type="button"
                        className="px-4 py-2 mr-1 rounded-md bg-gray-200 text-sm"
                        onClick={() => setPreviewOpen((prev) => !prev)}
                      >
                        {previewOpen ? "Hide" : "View"}
                      </button> */}

                      <button
                        type="button"
                        className="px-4 py-2 mr-1 rounded-md bg-gray-200 text-sm"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        Add New Sign
                      </button>
                    </div>
                  )}
                </div>

                {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#F3F3F3] w-full fixed bottom-0 py-2 border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-2 flex flex-col sm:flex-row justify-end gap-5">
          <button
            onClick={() => setDeclinePopup(true)}
            className="px-7 py-3 text-sm rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 font-semibold transition"
          >
            Decline
          </button>
          <button className="px-7 py-3 text-sm rounded-full bg-yellow-400 text-gray-700 hover:bg-yellow-500 transition font-semibold">
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default Offer;





// import React, { useState, useEffect, useRef } from "react";
// import TopBar from "../../beolayer/layout/TopBar";
// import { useNavigate } from "react-router-dom";
// import samplePDF from "../../assets/documents/sample.pdf";
// import { pdfjs } from "react-pdf";
// import { Document, Page } from "react-pdf";
// import FontIcon from "../../beolayer/components/base/Icons/FontIcon.jsx";
// import email from "@/assets/email_ico.svg";
// import Popup from "../../beolayer/components/base/pop-up/Popup.jsx";
// import offerLetter from "../../assets/documents/offer.html";

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// const Offer = () => {
//   const navigate = useNavigate();
//   const [declinePopup, setDeclinePopup] = useState(false);
//   const [numPages, setNumPages] = useState();
//   const [pageNumber, setPageNumber] = useState(1);

//   const [uploadedFile, setUploadedFile] = useState(null);
//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [error, setError] = useState("");
//   const fileInputRef = useRef(null);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   const validateFile = (file) => {
//     const allowedTypes = [
//       "application/pdf",
//       "image/jpeg",
//       "image/png",
//       "image/jpg",
//     ];
//     const maxSize = 100 * 1024; // 100 KB

//     if (!allowedTypes.includes(file.type)) {
//       return Promise.resolve("Invalid file type.");
//     }
//     if (file.size > maxSize) {
//       return Promise.resolve("File size must be under 100 KB.");
//     }

//     if (file.type.startsWith("image/")) {
//       return new Promise((resolve) => {
//         const img = new Image();
//         img.onload = () => {
//           const maxWidth = 800;
//           const maxHeight = 600;
//           if (img.naturalWidth > maxWidth || img.naturalHeight > maxHeight) {
//             resolve(`Image dimensions must be under ${maxWidth}x${maxHeight}px.`);
//           } else {
//             resolve("");
//           }
//         };
//         img.onerror = () => {
//           resolve("Failed to load image for dimension validation.");
//         };
//         img.src = URL.createObjectURL(file);
//       });
//     }

//     return Promise.resolve("");
//   };

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const validation = await validateFile(file);
//       if (validation) {
//         setError(validation);
//         setUploadedFile(null);
//         setPreviewOpen(false);
//       } else {
//         setError("");
//         setUploadedFile(file);
//         setPreviewOpen(false);
//       }
//     }
//   };

//   const getPreviewUrl = () => (uploadedFile ? URL.createObjectURL(uploadedFile) : null);

//   useEffect(() => {
//     return () => {
//       if (uploadedFile) {
//         URL.revokeObjectURL(getPreviewUrl());
//       }
//     };
//   }, [uploadedFile]);

//   return (
//     <>
//       <Popup
//         type={"validation"}
//         children={`Please briefly explain your reason for declining the offer.`}
//         show={declinePopup}
//         onClose={() => setDeclinePopup(false)}
//       />

//       <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
//         <TopBar />
//       </div>

//       <div className="mt-20 bg-[url('@/assets/review-bg.svg')] bg-cover bg-center h-45 flex flex-col justify-center items-center text-white px-6">
//         <div className="flex justify-between items-center">
//           <div className="mr-4 flex justify-center items-center">
//             <img src={email} alt="email_ico" />
//           </div>
//           <div className="flex-1 flex flex-col pb-4">
//             <p className="text-4xl font-light pb-3">Review & Accept Offer</p>
//             <p className="text-lg md:text-xl leading-7 max-w-xl font-light">
//               Your joining date with BEO is
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white py-4">
//         <div className="max-w-6xl mx-auto">
//           <div
//             className="text-sm text-black cursor-pointer flex items-center mb-1"
//             onClick={() => navigate("/")}
//           >
//             <span className="font-bold mr-1">
//               <FontIcon iconName="Back" />
//             </span>{" "}
//             Back
//           </div>
//         </div>
//         <hr className="border-t border-gray-200 w-full" />
//       </div>

//       <div className="bg-white font-sans min-h-[40vh] px-6 md:px-8 py-8 pb-40 sm:pb-24">
//         <div className="max-w-6xl mx-auto">
//           {/* PDF Viewer */}
//           <div className="max-h-[280px] overflow-y-auto rounded-xl border border-gray-300 p-5 bg-white mb-8 ">
//             <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
//               <Page
//                 pageNumber={pageNumber}
//                 scale={0.8}
//                 width={1100}
//                 renderTextLayer={false}
//               />
//             </Document>
//           </div>

//           {/* Form */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-2 items-stretch">
//             {/* Left Column */}
//             <div className="flex flex-col justify-between">
//               <div>
//                 <label className="text-sm font-semibold text-gray-700 mb-2 block">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:gray-300 transition"
//                 />
//               </div>

//               <div className="mt-6">
//                 <label className="text-sm font-semibold text-gray-700 mb-2 block">
//                   Comment
//                 </label>
//                 <textarea
//                   placeholder="Enter your comment"
//                   className="w-full h-24 resize-vertical border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:gray-300 transition"
//                 />
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="flex flex-col justify-between min-h-[180px]">
//               <div>
//                 <label className="text-sm font-semibold text-gray-700 mb-2 block">
//                   Upload Sign
//                 </label>

//                 <div
//                   className="border border-gray-300 rounded-lg text-sm text-gray-700 flex items-center justify-center bg-white relative overflow-hidden mx-auto"
//                   style={{ width: "100%", maxWidth: "600px", height: "150px" }}
//                 >
//                   {!uploadedFile && (
//                     <label className="flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 w-full h-full transition-all duration-300">
//                       <FontIcon
//                         iconName="Upload"
//                         color="#000"
//                         size="50px"
//                         display="inline"
//                         verticalAlign="text-bottom"
//                         margin="0.25rem"
//                       />
//                       Click to upload
//                     </label>
//                   )}

//                   {uploadedFile && !previewOpen && (
//                     <p className="text-sm text-center break-words">
//                       {uploadedFile.name}
//                     </p>
//                   )}

//              {/* {uploadedFile && previewOpen && (
//   <div
//     className="flex items-center justify-center border border-gray-400 bg-gray-50 rounded overflow-hidden mx-auto"
//     style={{ width: "280px", height: "120px" }}
//   >
//     {uploadedFile.type === "application/pdf" ? (
//       <iframe
//         src={getPreviewUrl()}
//         title="PDF Preview"
//         className="w-full h-full"
//         style={{ objectFit: "contain" }}
//       />
//     ) : (
//       <img
//         src={getPreviewUrl()}
//         alt="Preview"
//         className="max-w-full max-h-full object-contain"
//       />
//     )}
//   </div>
// )} */}
// {uploadedFile && previewOpen && (
//   <div
//     className="relative border-2 border-gray-500 bg-white flex items-center justify-center rounded mx-auto"
//     style={{ width: "280px", height: "120px" }}
//   >
//     {uploadedFile.type === "application/pdf" ? (
//       <iframe
//         src={getPreviewUrl()}
//         title="PDF Preview"
//         className="w-full h-full"
//         style={{ objectFit: "contain" }}
//       />
//     ) : (
//       <img
//         src={getPreviewUrl()}
//         alt="Signature Preview"
//         className="max-w-full max-h-full object-contain"
//         style={{
//           width: "100%",
//           height: "100%",
//         }}
//       />
//     )}
//   </div>
// )}



//                   <input
//                     type="file"
//                     accept=".pdf,.jpg,.jpeg,.png"
//                     onChange={handleFileChange}
//                     ref={fileInputRef}
//                     className="absolute inset-0 opacity-0 cursor-pointer"
//                   />
//                 </div>

//                 <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-600">
//                   <div className="flex">
//                     <span className="px-4 py-2 mr-1 rounded-md bg-gray-200 text-sm">JPEG</span>
//                     <span className="px-4 py-2 mr-1 rounded-md bg-gray-200 text-sm">PNG</span>
//                     <span
//                       className="px-4 py-2 border mr-1 rounded-md text-[10px]"
//                       style={{ display: "inline-block", whiteSpace: "normal", lineHeight: "1" }}
//                     >
//                       &lt; 100 KB<br />
//                       &lt; 280px X 120px
//                     </span>
//                   </div>

//                   {uploadedFile && (
//                     <div className="flex gap-2 text-xs">
//                       <button
//                         type="button"
//                         className="px-4 py-2 mr-1 rounded-md bg-gray-200 text-sm"
//                         onClick={() => setPreviewOpen((prev) => !prev)}
//                       >
//                         {previewOpen ? "Hide" : "View"}
//                       </button>

//                       <button
//                         type="button"
//                         className="px-4 py-2 mr-1 rounded-md bg-gray-200 text-sm"
//                         onClick={() => fileInputRef.current?.click()}
//                       >
//                         Add New Sign
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="bg-[#F3F3F3] w-full fixed bottom-0 py-2 border-t border-gray-300">
//         <div className="max-w-6xl mx-auto px-2 flex flex-col sm:flex-row justify-end gap-5">
//           <button
//             onClick={() => setDeclinePopup(true)}
//             className="px-7 py-3 text-sm rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 font-semibold transition"
//           >
//             Decline
//           </button>
//           <button className="px-7 py-3 text-sm rounded-full bg-yellow-400 text-gray-700 hover:bg-yellow-500 transition font-semibold">
//             Accept
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Offer;
