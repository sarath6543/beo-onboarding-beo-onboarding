import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Documents from "./Documents/Documents";

const tabs = [
  { key: "offer_letter", label: "Offer Letter" },
  { key: "documents", label: "Documents" },
  { key: "pre_joining", label: "Pre Joining Formalities" },
  { key: "day1", label: "Day One" },
];

const CandidateDetail = () => {
  const { id } = useParams();


  const [status, setStatus] = useState("Not Started"); // "Not Started" | "Accepted" | "Rejected"

  const [isEditing, setIsEditing] = useState(false);
  const [offerHTML, setOfferHTML] = useState("");
  const iframeRef = useRef(null);
  const [activeTab, setActiveTab] = useState("offer_letter");

  const [formData, setFormData] = useState({
    name: "",
    joiningDate: "",
    salary: "",
    noticePeriod: "",
  });


  useEffect(() => {
    if (iframeRef.current && offerHTML) {
      iframeRef.current.srcdoc = offerHTML;
    }
  }, [offerHTML]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOfferSubmit = (e) => {
    e.preventDefault();

    const totalSalary = parseFloat(formData.salary.replace(/[^0-9.]/g, ""));
    if (isNaN(totalSalary)) {
      alert("Please enter a valid numeric salary.");
      return;
    }

    const breakup = {
      BASIC: 0.3,
      DA: 0.1,
      HRA: 0.25,
      LTA: 0.05,
      CEA: 0.05,
      RESEARCH_ALLOWANCE: 0.05,
      COMMUNICATION_ALLOWANCE: 0.05,
      SPECIAL_ALLOWANCE: 0.15,
    };

    const calculate = (pct) => (totalSalary * pct).toFixed(2);

    const salaryBreakupHtml = `
      <h3>Salary Breakup</h3>
      <ul>
        <li><strong>Basic:</strong> ₹${calculate(breakup.BASIC)}</li>
        <li><strong>DA:</strong> ₹${calculate(breakup.DA)}</li>
        <li><strong>HRA:</strong> ₹${calculate(breakup.HRA)}</li>
        <li><strong>LTA:</strong> ₹${calculate(breakup.LTA)}</li>
        <li><strong>CEA:</strong> ₹${calculate(breakup.CEA)}</li>
        <li><strong>Research Allowance:</strong> ₹${calculate(breakup.RESEARCH_ALLOWANCE)}</li>
        <li><strong>Communication Allowance:</strong> ₹${calculate(breakup.COMMUNICATION_ALLOWANCE)}</li>
        <li><strong>Special Allowance:</strong> ₹${calculate(breakup.SPECIAL_ALLOWANCE)}</li>
      </ul>
    `;

const template = `
  <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; padding: 32px; background: #f9f9f9; color: #222; }
        h2, h3 { color: #303043; }
        .annexure { margin-top: 32px; border-top: 1px solid #dedede; padding-top: 24px;}
        .salary-breakup { background: #fafcff; padding: 16px; border-radius: 8px; margin-top:16px;}
        ul { list-style-type: none; padding: 0;}
        li { margin-bottom: 8px;}
        .letter-meta { color: #5d94ce; margin-bottom: 16px;}
      </style>
    </head>
    <body>
      <div class="letter">
        <div class="letter-meta">
          <b>Date:</b> ${new Date().toLocaleDateString()}<br>
        </div>
        <p>Dear <strong>${formData.name}</strong>,</p>
        <p>Congratulations! Further to your application for employment with us, you have successfully completed our selection process and we are pleased to make you an offer of employment.</p>
        <p>This offer is based on your profile, relevant work experience and performance in the selection process. You have been selected for the position of <b>Senior Developer</b> at <b>BEO Software Private Limited, Cochin</b>.</p>
        
        <p>Your CTC and break-up have been detailed in the annexure below.</p>
        <p>
          Please confirm your acceptance of this offer and your date of joining by signing the annexure and proposing your date of joining.<br>
          <b>Joining Date:</b> ${formData.joiningDate}
        </p>
        <p>The terms of this offer letter shall remain confidential and are not to be disclosed to any third party.</p>
        
        <p>
          At the time of your joining, please bring originals and copies of the following documents for verification:
          <ol>
            <li>All academic certificates</li>
            <li>Experience certificate(s) and release letter(s)</li>
            <li>Passport/ID proof</li>
            <li>Form 16 (Income Tax) from previous employer (if applicable)</li>
            <li>4 passport size photographs</li>
            <li>PAN Card</li>
          </ol>
        </p>

        <p>Welcome to BEO Software. We wish you a long, rewarding and fulfilling career and look forward to your joining.</p>
        <p>Yours sincerely,<br>
           <b>Joseph Antony</b><br>Chief Executive Officer
        </p>

        <div class="annexure">
          <h3>ANNEXURE - I: Compensation Structure</h3>
          <div class="salary-breakup">
            <p><b>Monthly Gross Salary:</b> ₹${formData.salary ? parseFloat(formData.salary).toLocaleString('en-IN', {minimumFractionDigits:2}) : "-"}<br>
            <b>Total CTC (Annual):</b> ₹${(formData.salary ? (parseFloat(formData.salary)*12 + 5985 + 21600) : "-").toLocaleString('en-IN', {maximumFractionDigits:2})}</p>
            <ul>
              <li><strong>Basic:</strong> ₹${calculate(breakup.BASIC)}</li>
              <li><strong>DA:</strong> ₹${calculate(breakup.DA)}</li>
              <li><strong>HRA:</strong> ₹${calculate(breakup.HRA)}</li>
              <li><strong>Children Education Allowance:</strong> ₹${calculate(breakup.CEA)}</li>
              <li><strong>Leave Travel Allowance:</strong> ₹${calculate(breakup.LTA)}</li>
              <li><strong>Special Allowance:</strong> ₹${calculate(breakup.SPECIAL_ALLOWANCE)}</li>
              <li><strong>Communication Allowance:</strong> ₹${calculate(breakup.COMMUNICATION_ALLOWANCE)}</li>
              <li><strong>Research Allowance:</strong> ₹${calculate(breakup.RESEARCH_ALLOWANCE)}</li>
            </ul>
            <p>Annual Benefits:<br>
              <b>Health & Accident Insurance:</b> ₹5,985<br>
              <b>Employer PF Contribution:</b> ₹21,600<br>
            </p>
            <p><b>Statutory Deductions</b> will apply (PF: ₹1,800, Employee Fund: ₹50, Professional Tax: ₹208, Income Tax etc. per month as applicable).</p>
          </div>
        </div>

        <div class="annexure">
          <h3>ANNEXURE - II: General Terms & Conditions</h3>
          <ul>
            <li>Either side will have to give <b>Three months’ notice</b> for terminating your service at any time.</li>
            <li>You may be transferred to any office/division/client of the company in India or abroad, without change in terms, at management’s sole discretion.</li>
            <li>Your employment will be governed by current and future Company policies.</li>
            <li>You must **not divulge confidential information** about the Company to anyone outside, including salary details.</li>
            <li>Any dishonesty or theft of company property may lead to immediate termination.</li>
            <li>All work produced (programs, studies, etc.) remains property & copyright of the company.</li>
            <li>You may not engage in other gainful employment/business while employed with us.</li>
          </ul>
          <p><b>Notice Period:</b> ${formData.noticePeriod}</p>
        </div>

        <div class="annexure">
          <h3>Benefits</h3>
          <ul>
            <li>Group Health Insurance cover up to **₹3 lakhs**. Personal Accident cover up to **₹5 lakhs**.</li>
            <li>Joining Bonus: 50% of Monthly Gross Salary (₹${formData.salary ? (parseFloat(formData.salary)*0.5).toLocaleString('en-IN', {maximumFractionDigits:2}) : "-"}) paid with first month’s salary.</li>
          </ul>
        </div>

        <div style="margin-top:36px;">
          <hr>
          <p>
            This is to confirm that I have received the Letter of Offer on ________________<br>
            I hereby accept this Offer and intend to join service on <b>${formData.joiningDate}</b>
          </p>
          <br>
          <p>__________________________<br>Date:<br>${formData.name}</p>
        </div>
      </div>
    </body>
  </html>
`;


    setOfferHTML(template);
    setIsEditing(false);
  };

  const getStatusBadge = () => {
    switch (status) {
      case "Accepted":
        return (
          <span className="text-xs px-2 py-1 rounded-full font-medium bg-green-100 text-green-700">
            Accepted
          </span>
        );
      case "Rejected":
        return (
          <span className="text-xs px-2 py-1 rounded-full font-medium bg-red-100 text-red-700">
            Rejected
          </span>
        );
      case "Not Started":
      default:
        return (
          <span className="text-xs px-2 py-1 rounded-full font-medium bg-gray-100 text-gray-700">
            Not Started
          </span>
        );
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "offer_letter":
        return (
          offerHTML ? (
            <iframe
              title="Offer Letter"
              ref={iframeRef}
              style={{ width: "100%", height: "400px", border: "1px solid #ddd" }}
              sandbox=""
            />
          ) : (
            <p>No offer letter generated yet.</p>
          )
        );
      case "documents":
        return <Documents />;
      case "pre_joining":
        return <div>Pre-joining formalities for candidate ID: {id}</div>;
      case "day1":
        return <div>Day one details for candidate ID: {id}</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full p-9">
        <div className="w-full p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full text-lg">
                👤
              </div>
              <div className="ml-3">
                <div className="flex items-center text-sm font-semibold">
                  Vishnu S Nair
                  {(status === "Not Started" || status === "Rejected") && !isEditing && (
                    <button
                      onClick={() => {
                        setIsEditing(true);
                        if (status === "Rejected") setOfferHTML(""); // Clear old offer for rejected case
                      }}
                      className="ml-2 text-gray-500 cursor-pointer text-xs hover:text-blue-600"
                      title="Edit & Generate Offer Letter"
                    >
                      ✏️ Edit
                    </button>
                  )}
                </div>
                <div className="text-xs text-gray-500">vishnunairg@beo.in</div>
              </div>
            </div>
            <div>{getStatusBadge()}</div>
          </div>

          <hr className="my-2 border-gray-200" />

          <div>
            <label className="text-[10px] text-gray-500 uppercase">Comment</label>
            <div className="text-gray-400 text-sm mt-1">-------------</div>
          </div>
        </div>

        {/* Create Offer Form */}
        {isEditing && (status === "Not Started" || status === "Rejected") && (
          <div className="w-full px-4 py-6">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Create Offer</h2>
              <form onSubmit={handleOfferSubmit} className="grid gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Candidate Name"
                  className="border border-gray-300 rounded px-4 py-2"
                  required
                />
                <input
                  type="date"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-2"
                  required
                />
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="Salary"
                  className="border border-gray-300 rounded px-4 py-2"
                  required
                />
                <input
                  type="text"
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleChange}
                  placeholder="Notice Period"
                  className="border border-gray-300 rounded px-4 py-2"
                  required
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border rounded hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Generate Offer
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Show offer letter preview */}
        {(status === "Not Started" || status === "Rejected") && offerHTML && !isEditing && (
          <div className="w-full px-4 py-6 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow mb-6">
            <iframe
              title="Offer Letter"
              ref={iframeRef}
              style={{ width: "100%", height: "400px", border: "1px solid #ddd" }}
              sandbox=""
            />
          </div>
        )}

        {/* Tabs visible only when Accepted */}
        {status === "Accepted" && (
          <div className="w-full  mt-6">
            <div className=" mx-auto">
              <div className="tabs flex border-b border-gray-300 mb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`py-2 px-4 mr-2 border-b-2 ${
                      activeTab === tab.key
                        ? "border-blue-500 font-semibold text-blue-600"
                        : "border-transparent text-gray-600 hover:text-blue-500"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="tab-content bg-white border border-gray-200 p-6 rounded shadow-sm">
                {renderTabContent()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidateDetail;















// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import CreateOffer from "./CreateOffer/CreateOffer.jsx";


// const tabs = [
//   { key: "create_offer", label: "Create Offer" },
//   { key: "documents", label: "Documents" },
//   { key: "pre_joining", label: "Pre Joining Formalities" },
//   { key: "day1", label: "Day One" },
// ];

// const CandidateDetail = () => {
//   const { id } = useParams();
//  const [activeTab, setActiveTab] = useState("create_offer");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "create_offer":
//         // return <div>Profile information for candidate ID: {id}</div>;
//         return <CreateOffer />;
//       case "documents":
//         return <div>Documents related to candidate ID: {id}</div>;
//       case "pre_joining":
//         return <div>History and activities for candidate ID: {id}</div>;
//       case "day1":
//         return <div>Settings for candidate ID: {id}</div>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2>Candidate Detail - ID: {id}</h2>

//       <div className="tabs flex border-b border-gray-300 mb-4 ">
//         {tabs.map((tab) => (
//           <button
//             key={tab.key}
//             onClick={() => setActiveTab(tab.key)}
//             className={`py-2 px-4 mr-2 border-b-2 ${
//               activeTab === tab.key
//                 ? "border-blue-500 font-semibold text-blue-600"
//                 : "border-transparent text-gray-600 hover:text-blue-500"
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       <div className="tab-content">{renderContent()}</div>
//     </div>
//   );
// };

// export default CandidateDetail;
