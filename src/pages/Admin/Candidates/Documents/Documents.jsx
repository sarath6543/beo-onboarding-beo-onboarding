import React, { useState } from "react";
import Popup from "../../../../beolayer/components/base/pop-up/Popup";

const sampleCandidateData = {
  personalDetails: {
    firstName: "Vishnu",
    middleName: "S",
    lastName: "Nair",
    fathersName: "S Nair",
    dob: "1990-01-01",
    nationality: "Indian",
    placeOfBirth: "Kerala",
    gender: "Male",
    maritalStatus: "Single",
    email: "vishnu@example.com",
    mobile: "9876543210",
    bloodGroup: "O+",
    photoUrl: "https://www.gstatic.com/webp/gallery/1.webp",
  },
  address: {
    current: {
      addressLine1: "123 MG Road",
      addressLine2: "Near City Mall",
      landmark: "Opposite Park",
      country: "India",
      state: "Kerala",
      pin: "682001",
    },
    permanent: {
      addressLine1: "456 Beach Road",
      addressLine2: "Near Lighthouse",
      landmark: "Opposite Beach",
      country: "India",
      state: "Kerala",
      pin: "682002",
    },
    sameAsCurrent: false,
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
  <div style={{ marginBottom: 10 }}>
    <div style={{ fontWeight: "600", color: "#555" }}>{label}</div>
    <div>{value || "—"}</div>
  </div>
);




const Section = ({ title, rows, fileUrl }) => {
  const [viewUrl, setViewUrl] = useState(null);
  const isPdf = fileUrl?.toLowerCase().endsWith(".pdf");
  // console.log("rows", rows);
  const chunkedRows = [];
  for (let i = 0; i < rows.length; i += 6) {
    chunkedRows.push(rows.slice(i, i + 6));
  }
  // console.log("data", chunkedRows);

  return (
    <>
      <Popup
        type="viewFile"
        fileType={viewUrl?.type}
        show={!!viewUrl}
        children={viewUrl}
        onClose={() => setViewUrl(null)}
      />

      <div
        className="relative"
        style={{
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 26,
          marginBottom: 32,
        }}
      >
        <h3
          className="absolute -top-3 left-10 bg-white px-2 text-lg text-gray-800"
          style={{ marginBottom: 16 }}
        >
          {title}
        </h3>

        <div className="mt-3 flex ">
          <div className=" w-full">
            {chunkedRows.map((chunk, chunkIndex) => (
              <>
                <div
                  key={chunkIndex}
                  className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
                >
                  {chunk.map((field, i) => (
                    <div key={i} className="flex flex-col bg-white rounded p-2">
                      <div className="text-sm text-gray-500">
                        {field.label}
                      </div>
                      <div className="font-semibold text-gray-800">{field.value || "—"}</div>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>

          {fileUrl ? (
            <div
              className="flex flex-col items-center"
              style={{ textAlign: "center" }}
            >
              <div
                onClick={() => fileUrl && setViewUrl(fileUrl)}
                style={{
                  width: "100%",
                  height: 120,
                  borderRadius: 6,
                  border: "1px solid #ccc",
                  backgroundColor: "#f9f9f9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: fileUrl ? "pointer" : "default",
                  overflow: "hidden",
                  marginBottom: 12,
                }}
                title={fileUrl ? "Click to view" : "No file available"}
              >
                {!fileUrl ? (
                  "No file available"
                ) : isPdf ? (
                  <div>PDF Document</div>
                ) : (
                  <img
                    src={fileUrl}
                    alt={title}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                )}
              </div>

              <button
                onClick={() => setViewUrl(fileUrl)}
                style={btnStyle("#007bff", "#fff")}
              >
                View
              </button>
              <button
                onClick={() => alert(`Verify ${title}`)}
                style={btnStyle("#28a745", "#fff")}
              >
                Verify
              </button>
              <button
                onClick={() => alert(`Resubmit ${title}`)}
                style={btnStyle("#ffc107", "#000")}
              >
                Resubmit
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        {/* {viewUrl && (
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
                overflow: "hidden",
              }}
            >
              {isPdf ? (
                <iframe src={viewUrl} width="700" height="900" style={{ border: "none" }} />
              ) : (
                <img
                  src={viewUrl}
                  alt="Preview"
                  style={{ maxWidth: "80vw", maxHeight: "80vh", borderRadius: 6 }}
                />
              )}
              <button
                onClick={() => setViewUrl(null)}
                style={btnStyle("#007bff", "#fff", "100%", 12)}
              >
                Close
              </button>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};

const btnStyle = (bg, color, width = "100%", marginBottom = 8) => ({
  marginBottom,
  padding: "6px 12px",
  borderRadius: 4,
  border: "none",
  backgroundColor: bg,
  color,
  fontWeight: 600,
  cursor: "pointer",
  width,
});

export default function Documents() {
  const { personalDetails, address, documents } = sampleCandidateData;

  const formatRows = (obj) =>
    Object.entries(obj).map(([key, value]) => ({
      label: key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase()),
      value,
    }));

  return (
    <div
      style={{
        padding: 14,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Section
        title="Personal Details"
        rows={formatRows(
          Object.fromEntries(
            Object.entries(personalDetails).filter(
              ([key]) => key !== "photoUrl"
            )
          )
        )}
        fileUrl={personalDetails.photoUrl}
      />

      <Section
        title="Address Details"
        rows={[
          ...formatRows(address.current).map((item) => ({
            ...item,
            label: `Current - ${item.label}`,
          })),
          ...formatRows(address.permanent).map((item) => ({
            ...item,
            label: `Permanent - ${item.label}`,
          })),
        ]}
      />

      <Section
        title="Aadhaar Document"
        rows={[
          { label: "Aadhaar Number", value: documents.aadhaar.number },
          { label: "Name on Aadhaar", value: documents.aadhaar.nameOnCard },
          { label: "Type", value: "Aadhaar" },
        ]}
        fileUrl={documents.aadhaar.fileUrl}
      />

      <Section
        title="PAN Document"
        rows={[
          { label: "PAN Number", value: documents.pan.number },
          { label: "Name on PAN", value: documents.pan.nameOnCard },
          { label: "Type", value: "PAN" },
        ]}
        fileUrl={documents.pan.fileUrl}
      />
    </div>
  );
}
