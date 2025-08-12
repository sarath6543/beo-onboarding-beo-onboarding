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
        body { font-family: Arial, sans-serif; padding: 40px; color: #222; background: #fff; }
        h3, h4 { margin-top: 32px; color: #30557d; }
        table { border-collapse: collapse; width: 100%; margin: 24px 0; }
        th, td { border: 1px solid #888; padding: 8px 12px; }
        ul, ol { margin-left: 20px; }
      </style>
    </head>
    <body>
      <p>${new Date().toLocaleDateString()}</p>
      <p>Dear <b>${formData.name}</b>,</p>
      <p>
        Congratulations! Further to your application for employment with us, you have successfully completed our selection process and we are pleased to make you an offer of employment.
      </p>
      <p>
        This offer is based on your profile, relevant work experience and performance in the selection process. You have been selected for the position of <b>Senior Developer</b>, at <b>BEO Software Private Limited Cochin</b>. Your CTC as applicable with break-up has been detailed in the Annexure to this letter. The terms of this offer letter shall remain confidential and are not to be disclosed to any third party.
      </p>
      <p>
        Kindly confirm your acceptance of this offer and your date of joining by signing Annexure and proposing your date of joining.
        If not accepted within 7 days of receipt, this offer is liable to lapse at the discretion of BEO Software Private Limited.<br>
        For any clarifications regarding your job, salary, or any policy, please contact HR Department <a href="mailto:hrgrp@beo.in">hrgrp@beo.in</a>
      </p>
      <p>
        We request you to carry a signed copy of offer letter and its annexure as a token of your acceptance on the joining day. You are advised to go through the contents before signing the documents.
      </p>
      <p>
        At the time of your joining, photocopy of the following documents should be submitted. Please carry original copies for verification:
        <ol>
          <li>All academic certificates</li>
          <li>Experience certificate from all previous employer(s) and release letter from current employer</li>
          <li>Passport/ID proof</li>
          <li>Form 16 (Income Tax) from previous employer (if applicable)*</li>
          <li>4 passport size photographs</li>
          <li>PAN Card</li>
        </ol>
      </p>
      <p>
        Welcome to BEO Software. We wish you a long, rewarding and fulfilling career and looking forward to join us.
      </p>
      <p>
        Yours sincerely,<br>
        For BEO Software Private Limited<br><br>
        <b>Joseph Antony</b><br>
        Chief Executive Officer
      </p>

      <h3>ANNEXURE - I <br> Compensation Structure</h3>
      <table>
        <tr><th>Salary Component</th><th>Monthly (₹)</th><th>Annual (₹)</th></tr>
        <tr><td>Basic</td><td>${calculate(breakup.BASIC)}</td><td>${(parseFloat(calculate(breakup.BASIC))*12).toFixed(2)}</td></tr>
        <tr><td>DA</td><td>${calculate(breakup.DA)}</td><td>${(parseFloat(calculate(breakup.DA))*12).toFixed(2)}</td></tr>
        <tr><td>HRA</td><td>${calculate(breakup.HRA)}</td><td>${(parseFloat(calculate(breakup.HRA))*12).toFixed(2)}</td></tr>
        <tr><td>Children Education Allowance</td><td>${calculate(breakup.CEA)}</td><td>${(parseFloat(calculate(breakup.CEA))*12).toFixed(2)}</td></tr>
        <tr><td>Leave Travel Allowance</td><td>${calculate(breakup.LTA)}</td><td>${(parseFloat(calculate(breakup.LTA))*12).toFixed(2)}</td></tr>
        <tr><td>Special Allowance</td><td>${calculate(breakup.SPECIAL_ALLOWANCE)}</td><td>${(parseFloat(calculate(breakup.SPECIAL_ALLOWANCE))*12).toFixed(2)}</td></tr>
        <tr><td>Communication Allowance</td><td>${calculate(breakup.COMMUNICATION_ALLOWANCE)}</td><td>${(parseFloat(calculate(breakup.COMMUNICATION_ALLOWANCE))*12).toFixed(2)}</td></tr>
        <tr><td>Research Allowance</td><td>${calculate(breakup.RESEARCH_ALLOWANCE)}</td><td>${(parseFloat(calculate(breakup.RESEARCH_ALLOWANCE))*12).toFixed(2)}</td></tr>
        <tr>
            <td><b>Monthly Gross Salary</b></td>
            <td><b>₹${formData.salary ? parseFloat(formData.salary).toLocaleString('en-IN', {minimumFractionDigits:2}) : "-"}</b></td>
            <td><b>₹${formData.salary ? (parseFloat(formData.salary)*12).toLocaleString('en-IN', {maximumFractionDigits:2}) : "-"}</b></td>
        </tr>
        <tr><td>Family Health & Personal Accident Insurance</td><td>-</td><td>5,985.00</td></tr>
        <tr><td>Employer PF Contribution</td><td>1,800.00</td><td>21,600.00</td></tr>
        <tr><td><b>TOTAL CTC</b></td><td>-</td><td><b>₹${formData.salary ? (parseFloat(formData.salary)*12+5985+21600).toLocaleString('en-IN', {maximumFractionDigits:2}) : "-"}</b></td></tr>
      </table>
      <p>
        Statutory Deductions like PF(1,800.00), ESIC(0.00), Employee Fund(50.00), Professional Tax(208.00), Income Tax, etc. which are applicable to you will be deducted from your monthly Gross Salary.
      </p>
      <h4>Benefits</h4>
      <ol>
        <li>
          <b>Health Insurance Plan:</b><br>
          You will be covered under the Group Health Insurance Scheme and Personal Accident insurance claim. Standard Plan provides you a cover up to Rupees Three lakhs and Personal accident cover up to Rupees Five Lakhs. The insurance cover will be as per the terms and conditions specified in the Company policy and may be revised from time to time.
        </li>
        <li>
          <b>Joining Bonus:</b><br>
          You will be entitled for a joining bonus (50 percent of your Monthly Gross Salary) which will be paid to you along with your first month’s salary.
        </li>
      </ol>
      <p>
        For BEO Software Private Limited <br><br>
        <b>Joseph Antony</b><br>
        Chief Executive Officer
      </p>

      <h3>ANNEXURE - II <br> General Terms and Conditions of Employment</h3>
      <ol>
        <li>Either side will have to give Three months’ notice for terminating your service at any time.</li>
        <li>During your employment you can be transferred across the company, its divisions/clients in India or abroad without change in terms.</li>
        <li>Your employment is governed by company rules and policies as amended from time to time.</li>
        <li>Confidentiality about company information is strictly expected; breach may result in immediate termination.</li>
        <li>Remuneration/terms must not be communicated to other employees.</li>
        <li>Honesty with company assets and documents is mandatory; breaches can result in instant termination.</li>
        <li>All company work (programs, reports, etc.) is company property and copyright.</li>
        <li>No outside employment/business while on company rolls; any violation can lead to termination.</li>
      </ol>
      <p>
        Kindly sign the duplication of this letter as a token of your acceptance of the appointment letter and its terms and conditions. You are advised to go through the contents before signing this letter.
      </p>
      <p>
        This is to confirm that I have received the Letter of Offer on ________________.<br>
        I hereby accept this Offer and intend to join service on ________________.
      </p>
      <br>
      <p style="margin-left:250px;">
        ___________________________<br>
        Date:<br>
        ${formData.name}
      </p>

      <h3>ANNEXURE - III</h3>
      <b>1. Work time rules</b>
      <ul>
        <li>Flexible working hours, Monday-Friday 8:00 am – 7:30 pm (office closed on weekends & holidays)</li>
        <li>Monthly average of 8 hours working/day needed</li>
        <li>Less than 3 hrs: full day leave; less than 6 hrs: half day leave</li>
      </ul>
      <b>2. Leave Policy</b>
      <ul>
        <li>Apply leave via BEO system and get sanction prior to leave day</li>
        <li>Leave(s) only with enough balance</li>
        <li>Apply 1 week ahead for 1 day, 2 weeks for 2-5 days, 1 month for >5 days</li>
        <li>Emergency leave: inform manager by phone/email</li>
        <li>In notice period, leave only with manager consent</li>
        <li>Company provides 24 leaves per year (12 Casual/Sick + 12 Earned), 13 holidays for 2025</li>
      </ul>
      <b>3. Exit Policy</b>
      <p>Notice Period as per Annexure II.</p>
      <b>4. Internet Usage Policy</b>
      <p>Internet for office use only; categories like social networking/chat are restricted.</p>
      <br>
      <p>
        _______________________________<br>
        Date:<br>
        ${formData.name}
      </p>
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
