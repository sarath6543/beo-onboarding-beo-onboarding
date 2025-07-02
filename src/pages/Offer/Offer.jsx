import React from "react";
import TopBar from "../../beolayer/layout/TopBar";
import { useNavigate } from "react-router-dom";
import "./Offer.css"; 
import samplePDF from "../../assets/documents/sample_offer.pdf"
import { useState } from "react";
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';


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
    <div className="top-bar">
      <TopBar />
</div>
      <div className="offer-banner">
        <div>
          <p className="offer-title">Review & Accept Offer</p>
          <p className="offer-subtitle">Your joining date with BEO is</p>
        </div>
      </div>

      <div className="offer-container">
        <div className="offer-card">

          <div className="offer-card-inner">

            <div className="back-to-home" onClick={() => navigate('/')}>
              <span className="back-arrow">←</span> Back
            </div>
            <hr className="divider" />


       <div className="offer-letter-pdf" style={{ height: "600px" }}>
  {/* <iframe
    //  src={`${'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'}#toolbar=0&navpanes=0&scrollbar=0`}
      src={`${samplePDF}#toolbar=0&navpanes=0&scrollbar=0`}
    title="Offer Letter PDF"
    width="100%"
    height="100%"
    style={{ border: "none" }}
  /> */}
  <div>
      <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
</div>
            {/* Form Section */}
            <div className="form-grid">
              <div className="form-column">
                <div>
                  <label className="form-label">Name</label>
                  <input type="text" placeholder="Enter your name" className="form-input" />
                </div>

                <div className="form-field">
                  <label className="form-label">Comment</label>
                  <textarea placeholder="Enter your comment" className="form-textarea" />
                </div>
              </div>

              <div className="form-column">
                <label className="form-label">Upload Sign</label>
                <div className="upload-box">
                  Click to upload
                  <div className="upload-note">PDF, DOCX, TXT | &lt; 10 MB</div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="button-group">
              <button className="btn btn-decline">Decline</button>
              <button className="btn btn-accept">Accept</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
