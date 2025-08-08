import React, { useState } from "react";

const sampleCandidateData = {
  personalDetails: {
    firstName: "Vishnu",
    middleName: "S",
    lastName: "Nair",
    photoUrl: "https://www.gstatic.com/webp/gallery/1.webp",
  },
  documents: {
    aadhaar: {
      number: "1234-5678-9012",
      nameOnCard: "Vishnu S Nair",
      fileUrl: "https://example.com/aadhaar.pdf",
    },
    pan: {
      number: "ABCDE1234F",
      nameOnCard: "Vishnu S Nair",
      fileUrl: "https://www.gstatic.com/webp/gallery/4.webp",
    },
  },
};

const Row = ({ label, value }) => (
  <div
    style={{
      display: "flex",
      padding: "6px 0",
      borderBottom: "1px solid #eee",
    }}
  >
    <div style={{ width: 150, fontWeight: "600", color: "#555" }}>{label}</div>
    <div style={{ flex: 1 }}>{value || "—"}</div>
  </div>
);

const Section = ({ title, rows, fileUrl }) => {
  const [viewUrl, setViewUrl] = useState(null);

  const isPdf = fileUrl?.toLowerCase().endsWith(".pdf");

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 16,
        marginBottom: 32,
        maxWidth: 450,
      }}
    >
      <h3 style={{ marginBottom: 16 }}>{title}</h3>

      {/* 3 rows label+value */}
      {rows.map(({ label, value }, i) => (
        <Row key={i} label={label} value={value} />
      ))}

      {/* 4th row full width image/pdf preview */}
      <div
        onClick={() => fileUrl && setViewUrl(fileUrl)}
        style={{
          marginTop: 16,
          height: 180,
          borderRadius: 6,
          border: "1px solid #ccc",
          backgroundColor: "#f9f9f9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: fileUrl ? "pointer" : "default",
          color: "#666",
          fontWeight: "600",
          userSelect: "none",
          overflow: "hidden",
        }}
        title={fileUrl ? "Click to view" : "No file available"}
      >
        {!fileUrl ? (
          "No file available"
        ) : isPdf ? (
          <div>PDF Document (Click to View)</div>
        ) : (
          <img
            src={fileUrl}
            alt={title}
            style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
          />
        )}
      </div>

      {/* Buttons left aligned below */}
      <div style={{ marginTop: 16 }}>
        <button
          onClick={() => alert(`Verify ${title}`)}
          style={{
            marginRight: 12,
            padding: "8px 16px",
            borderRadius: 4,
            border: "none",
            backgroundColor: "#28a745",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Verify
        </button>
        <button
          onClick={() => alert(`Complete ${title}`)}
          style={{
            padding: "8px 16px",
            borderRadius: 4,
            border: "none",
            backgroundColor: "#ffc107",
            color: "#000",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Complete
        </button>
      </div>

      {/* Modal view */}
      {viewUrl && (
        <div
          onClick={() => setViewUrl(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              backgroundColor: "#fff",
              padding: 12,
              borderRadius: 8,
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              overflow: "hidden",
            }}
          >
            {isPdf ? (
              <iframe
                src={viewUrl}
                title="Document Preview"
                width="700"
                height="900"
                style={{ border: "none" }}
              />
            ) : (
              <img
                src={viewUrl}
                alt="Preview"
                style={{ maxWidth: "80vw", maxHeight: "80vh", borderRadius: 6 }}
              />
            )}
            <button
              onClick={() => setViewUrl(null)}
              style={{
                marginTop: 12,
                padding: "8px 14px",
                cursor: "pointer",
                borderRadius: 4,
                border: "none",
                backgroundColor: "#007bff",
                color: "#fff",
                fontWeight: "600",
                width: "100%",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Documents() {
  return (
    <div
      style={{
        padding: 24,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Section
        title="Personal Details & Photo"
        rows={[
          { label: "First Name", value: sampleCandidateData.personalDetails.firstName },
          { label: "Middle Name", value: sampleCandidateData.personalDetails.middleName },
          { label: "Last Name", value: sampleCandidateData.personalDetails.lastName },
        ]}
        fileUrl={sampleCandidateData.personalDetails.photoUrl}
      />

      <Section
        title="Aadhaar Document"
        rows={[
          { label: "Document Number", value: sampleCandidateData.documents.aadhaar.number },
          { label: "Name on Card", value: sampleCandidateData.documents.aadhaar.nameOnCard },
          { label: "Type", value: "Aadhaar" },
        ]}
        fileUrl={sampleCandidateData.documents.aadhaar.fileUrl}
      />

      <Section
        title="PAN Document"
        rows={[
          { label: "Document Number", value: sampleCandidateData.documents.pan.number },
          { label: "Name on Card", value: sampleCandidateData.documents.pan.nameOnCard },
          { label: "Type", value: "PAN" },
        ]}
        fileUrl={sampleCandidateData.documents.pan.fileUrl}
      />
    </div>
  );
}
