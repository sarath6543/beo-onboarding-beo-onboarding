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

  const [status, setStatus] = useState("Not Started");  
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

    const template = `
<html>
<head>
<meta charset="UTF-8">
<style>
  body {
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #222;
    background: #fff;
    line-height: 1.6;
    padding: 40px;
    max-width: 800px;
    margin: auto;
  }
  h1, h2, h3 { color: #303043; margin-top: 1.5em; }
  p { margin-bottom: 1em; text-align: justify; }
  ol, ul { padding-left: 20px; }
  table { width: 100%; border-collapse: collapse; margin: 16px 0; }
  th, td { border: 1px solid #ccc; padding: 8px 10px; text-align: right; }
  th:first-child, td:first-child { text-align: left; }
  th { background: #f0f4ff; }
  .signature-block { margin-top: 36px; padding-top: 12px; border-top: 1px solid #ccc; }
  .annexure { margin-top: 40px; padding-top: 8px; border-top: 2px solid #444; }
  .letter-meta { color: #5d94ce; margin-bottom: 16px; }
  strong { color: #000; }
</style>
</head>
<body>

<div class="letter-meta">
<b>Date:</b> 28-03-2025
</div>

<p>Dear <strong>${formData.name}</strong>,</p>

<p>Congratulations! Further to your application for employment with us, you have successfully completed our selection process and we are pleased to make you an offer of employment.</p>

<p>This offer is based on your profile, relevant work experience, and performance in the selection process. You have been selected for the position of <b>Senior Developer</b>, at <b>BEO Software Private Limited</b>, Cochin. Your CTC as applicable with break-up has been detailed in the Annexure to this letter. The terms of this offer letter shall remain confidential and are not to be disclosed to any third party.</p>

<p>Kindly confirm your acceptance of this offer and your date of joining by signing Annexure and proposing your date of joining. If not accepted within 7 days of receipt, this offer is liable to lapse at the discretion of BEO Software Private Limited.</p>

<p>For any clarifications regarding your job, salary, or any policy, please contact HR Department <a href="mailto:hrgrp@beo.in">hrgrp@beo.in</a>.</p>

<p>We request you to carry a signed copy of the offer letter and its annexure as a token of your acceptance on the joining day. You are advised to go through the contents before signing the documents.</p>

<p>At the time of your joining, please submit photocopies of the following documents, and bring original copies for verification:</p>

<ol>
  <li>All academic certificates</li>
  <li>Experience certificate(s) from all previous employers and release letter from current employer</li>
  <li>Passport/ID proof</li>
  <li>Form 16 (Income Tax) from previous employer (if applicable)</li>
  <li>4 passport size photographs</li>
  <li>PAN Card</li>
</ol>

<p>Welcome to BEO Software. We wish you a long, rewarding, and fulfilling career and look forward to your joining us.</p>

<p>Yours sincerely,<br>
For BEO Software Private Limited<br><br>
<b>Joseph Antony</b><br>
Chief Executive Officer</p>

<!-- ANNEXURE I -->
<div class="annexure">
<h3>ANNEXURE - I<br>Compensation Structure</h3>

<table>
  <thead>
    <tr>
      <th>Salary Component</th>
      <th>Monthly (₹)</th>
      <th>Annual (₹)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Basic</td><td>${calculate(breakup.BASIC)}</td><td>${(calculate(breakup.BASIC) * 12).toFixed(2)}</td></tr>
    <tr><td>DA</td><td>${calculate(breakup.DA)}</td><td>${(calculate(breakup.DA) * 12).toFixed(2)}</td></tr>
    <tr><td>HRA</td><td>${calculate(breakup.HRA)}</td><td>${(calculate(breakup.HRA) * 12).toFixed(2)}</td></tr>
    <tr><td>Children Education Allowance</td><td>${calculate(breakup.CEA)}</td><td>${(calculate(breakup.CEA) * 12).toFixed(2)}</td></tr>
    <tr><td>Leave Travel Allowance</td><td>${calculate(breakup.LTA)}</td><td>${(calculate(breakup.LTA) * 12).toFixed(2)}</td></tr>
    <tr><td>Special Allowance</td><td>${calculate(breakup.SPECIAL_ALLOWANCE)}</td><td>${(calculate(breakup.SPECIAL_ALLOWANCE) * 12).toFixed(2)}</td></tr>
    <tr><td>Communication Allowance</td><td>${calculate(breakup.COMMUNICATION_ALLOWANCE)}</td><td>${(calculate(breakup.COMMUNICATION_ALLOWANCE) * 12).toFixed(2)}</td></tr>
    <tr><td>Research Allowance</td><td>${calculate(breakup.RESEARCH_ALLOWANCE)}</td><td>${(calculate(breakup.RESEARCH_ALLOWANCE) * 12).toFixed(2)}</td></tr>
    <tr><td><strong>Monthly Gross Salary</strong></td><td><strong>${totalSalary.toFixed(2)}</strong></td><td><strong>${(totalSalary * 12).toFixed(2)}</strong></td></tr>
    <tr><td>Family Health & Personal Accident Insurance</td><td></td><td>5,985.00</td></tr>
    <tr><td>Employer PF Contribution</td><td>1,800.00</td><td>21,600.00</td></tr>
    <tr><td><strong>Total CTC</strong></td><td></td><td><strong>${(totalSalary * 12 + 5985 + 21600).toFixed(2)}</strong></td></tr>
  </tbody>
</table>

<p><em>Statutory Deductions</em> like PF (1,800), ESIC (0.00), Employee Fund (50), Professional Tax (208), Income Tax, etc., which are applicable to you will be deducted from your monthly Gross Salary.</p>
<h4>Benefits</h4>
<ul>
  <li>Health Insurance Plan (FY 2024-2025): Group Health Insurance up to ₹3 lakhs & Personal Accident cover up to ₹5 lakhs as per company policy.</li>
  <li>Joining Bonus: 50% of Monthly Gross Salary (₹${(totalSalary * 0.5).toFixed(2)}) paid with first month’s salary.</li>
</ul>
</div>

<!-- ANNEXURE II -->
<div class="annexure">
<h3>ANNEXURE - II<br>General Terms and Conditions of Employment</h3>
<ol>
  <li>Either side will have to give three months’ notice for terminating your service at any time.</li>
  <li>You may be liable to transfer to any location in India or abroad without change in terms.</li>
  <li>Your employment will be governed by current and future company policies and rules.</li>
  <li>Do not divulge any confidential company information to outsiders.</li>
  <li>Do not share your salary details with other employees.</li>
  <li>Treat company material and funds with honesty; theft may cause immediate termination.</li>
  <li>All work produced during employment remains the company’s property.</li>
  <li>You may not engage in other employment or competing business while employed.</li>
</ol>
</div>

<!-- ANNEXURE III -->
<div class="annexure">
<h3>ANNEXURE - III<br>Additional Policies</h3>
<h4>Work Time Rules</h4>
<ul>
  <li>Flexible working hours within Mon–Fri, 8:00 am – 7:30 pm. Closed on weekends and holidays.</li>
  <li>Must complete an average of 8 hours/day in a month.</li>
  <li>Less than 3 hours → full day leave; less than 6 hours → half day leave.</li>
</ul>

<h4>Leave Policy</h4>
<ul>
  <li>Apply through BEO system in advance; must have leave balance.</li>
  <li>Apply 1 week ahead for 1 day, 2 weeks for 2–5 days, 1 month for more than 5 days leave.</li>
  <li>Emergency leave must be reported to Project Manager/Director.</li>
  <li>24 annual leaves (12 Casual/Sick + 12 Earned) + 13 holidays in year 2025.</li>
</ul>

<h4>Exit Policy</h4>
<p>Notice period as per Annexure II.</p>

<h4>Internet Usage Policy</h4>
<p>Office internet is for work use only; social networking/chat is restricted.</p>
</div>

<div class="signature-block">
  <p>This is to confirm that I have received the Letter of Offer on ____________.<br>
  I hereby accept this Offer and intend to join service on ____________.</p>
  <p>__________________________<br>Date:<br>${formData.name}</p>
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
        return <span className="text-xs px-2 py-1 rounded-full font-medium bg-green-100 text-green-700">Accepted</span>;
      case "Rejected":
        return <span className="text-xs px-2 py-1 rounded-full font-medium bg-red-100 text-red-700">Rejected</span>;
      default:
        return <span className="text-xs px-2 py-1 rounded-full font-medium bg-gray-100 text-gray-700">Not Started</span>;
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "offer_letter":
        return offerHTML ? (
          <iframe title="Offer Letter" ref={iframeRef} style={{ width: "100%", height: "900px", border: "1px solid #ddd" }} sandbox="" />
        ) : <p>No offer letter generated yet.</p>;
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
              <div className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full text-lg">👤</div>
              <div className="ml-3">
                <div className="flex items-center text-sm font-semibold">
                  {/* {formData.name || "Candidate Name"} */}
                    Vishnu S Nair
                  {(status === "Not Started" || status === "Rejected") && !isEditing && (
                    <button
                      onClick={() => {
                        setIsEditing(true);
                        if (status === "Rejected") setOfferHTML("");
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

        {isEditing && (status === "Not Started" || status === "Rejected") && (
          <div className="w-full px-4 py-6">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Create Offer</h2>
              <form onSubmit={handleOfferSubmit} className="grid gap-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Candidate Name" className="border border-gray-300 rounded px-4 py-2" required />
                <input type="date" name="joiningDate" value={formData.joiningDate} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2" required />
                <input type="text" name="salary" value={formData.salary} onChange={handleChange} placeholder="Salary" className="border border-gray-300 rounded px-4 py-2" required />
                <input type="text" name="noticePeriod" value={formData.noticePeriod} onChange={handleChange} placeholder="Notice Period" className="border border-gray-300 rounded px-4 py-2" required />
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 border rounded hover:bg-gray-100 transition">Cancel</button>
                  <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Generate Offer</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {(status === "Not Started" || status === "Rejected") && offerHTML && !isEditing && (
          <div className="w-full px-4 py-6 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow mb-6">
            <iframe title="Offer Letter" ref={iframeRef} style={{ width: "100%", height: "900px", border: "1px solid #ddd" }} sandbox="" />
          </div>
        )}

        {status === "Accepted" && (
          <div className="w-full mt-6">
            <div className="mx-auto">
              <div className="tabs flex border-b border-gray-300 mb-4">
                {tabs.map((tab) => (
                  <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                    className={`py-2 px-4 mr-2 border-b-2 ${activeTab === tab.key ? "border-blue-500 font-semibold text-blue-600" : "border-transparent text-gray-600 hover:text-blue-500"}`}>
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
