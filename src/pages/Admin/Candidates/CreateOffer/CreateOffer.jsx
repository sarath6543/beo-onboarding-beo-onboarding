import React, { useState, useRef, useEffect } from "react";

const CreateOffer = ({ onOfferGenerated }) => {
  const [formData, setFormData] = useState({
    name: "",
    joiningDate: "",
    salary: "",
    noticePeriod: "",
  });

  const [filledHtml, setFilledHtml] = useState("");
  const iframeRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalSalary = parseFloat(formData.salary.replace(/[^0-9.]/g, ""));
    if (isNaN(totalSalary)) {
      alert("Please enter a valid numeric salary.");
      return;
    }

    let breakup = {};

    if (totalSalary <= 20000) {
      breakup = {
        BASIC: 0.4,
        DA: 0.1,
        HRA: 0.15,
        LTA: 0.05,
        CEA: 0.05,
        RESEARCH_ALLOWANCE: 0.05,
        COMMUNICATION_ALLOWANCE: 0.05,
        SPECIAL_ALLOWANCE: 0.15,
      };
    } else if (totalSalary <= 100000) {
      breakup = {
        BASIC: 0.35,
        DA: 0.1,
        HRA: 0.2,
        LTA: 0.05,
        CEA: 0.05,
        RESEARCH_ALLOWANCE: 0.05,
        COMMUNICATION_ALLOWANCE: 0.05,
        SPECIAL_ALLOWANCE: 0.15,
      };
    } else {
      breakup = {
        BASIC: 0.3,
        DA: 0.1,
        HRA: 0.25,
        LTA: 0.05,
        CEA: 0.05,
        RESEARCH_ALLOWANCE: 0.05,
        COMMUNICATION_ALLOWANCE: 0.05,
        SPECIAL_ALLOWANCE: 0.15,
      };
    }

    const calculate = (percentage) =>
      (totalSalary * percentage).toFixed(2);

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
      body {
        font-family: Arial, sans-serif;
        padding: 40px;
        background: #fff;
        color: #000;
        line-height: 1.6;
      }
      h2, h3 {
        color: #444;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        margin-bottom: 6px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
      }
      th, td {
        border: 1px solid #999;
        padding: 8px;
        text-align: left;
      }
    </style>
  </head>
  <body>
    <p style="text-align: right;">28-03-2025</p>

    <p>Dear <strong>${formData.name}</strong>,</p>

    <p>Congratulations! Further to your application for employment with us, you have successfully completed our selection process and we are pleased to make you an offer of employment.</p>

    <p>This offer is based on your profile, relevant work experience and performance in the selection process. You have been selected for the position of Senior Developer, at BEO Software Private Limited Cochin. Your CTC as applicable with break-up has been detailed in the Annexure to this letter. The terms of this offer letter shall remain confidential and are not to be disclosed to any third party.</p>

    <p>Kindly confirm your acceptance of this offer and your date of joining by signing Annexure and proposing your date of joining. If not accepted within 7 days of receipt, this offer is liable to lapse at the discretion of BEO Software Private Limited.</p>

    <p>For any clarifications regarding your job, salary, or any policy, please contact HR Department hrgrp@beo.in</p>

    <p>We request you to carry a signed copy of offer letter and its annexure as a token of your acceptance on the joining day. You are advised to go through the contents before signing the documents.</p>

    <p>At the time of your joining, photocopy of the following documents should be submitted. Please carry original copies for verification.</p>
    <ol>
      <li>All academic certificates</li>
      <li>Experience certificate from all previous employer(s) and release letter from current employer</li>
      <li>Passport/ID proof</li>
      <li>Form 16 (Income Tax) from previous employer (if applicable)</li>
      <li>4 passport size photographs</li>
      <li>PAN Card</li>
    </ol>

    <p>Welcome to BEO Software. We wish you a long, rewarding and fulfilling career and looking forward to join us.</p>

    <p>Yours sincerely,<br/><br/>For BEO Software Private Limited<br/><strong>Joseph Antony</strong><br/>Chief Executive Officer</p>

    <h3>ANNEXURE - I</h3>
    <h4>Compensation Structure</h4>

    ${salaryBreakupHtml}

    <p><strong>Monthly Gross Salary:</strong> ₹${totalSalary.toFixed(2)}<br/>
    <strong>Annual Gross Salary:</strong> ₹${(totalSalary * 12).toFixed(2)}</p>

    <p><strong>Statutory Deductions:</strong> PF (₹1,800.00), Employee Fund (₹50.00), Professional Tax (₹208.00), Income Tax as applicable.</p>

    <h4>Benefits</h4>
    <ul>
      <li><strong>Health Insurance Plan:</strong> Standard cover up to ₹3,00,000 and Personal Accident cover up to ₹5,00,000.</li>
      <li><strong>Joining Bonus:</strong> 50% of Monthly Gross Salary (₹${(totalSalary * 0.5).toFixed(2)}) paid with first month's salary.</li>
    </ul>

    <p><strong>Joining Date:</strong> ${formData.joiningDate}</p>
    <p><strong>Notice Period:</strong> ${formData.noticePeriod}</p>

    <h3>ANNEXURE - II</h3>
    <h4>General Terms and Conditions of Employment</h4>
    <ol>
      <li>Three months’ notice required for resignation or termination.</li>
      <li>Transferable to any division/client/location as per company’s discretion.</li>
      <li>Bound by company’s policies including leave, PF, and misconduct clauses.</li>
      <li>Confidentiality must be maintained. Breach may lead to termination.</li>
      <li>Do not share salary/remuneration details with other employees.</li>
      <li>Dishonesty or theft will result in immediate termination.</li>
      <li>All work done is company property, with copyright belonging to BEO.</li>
      <li>No external employment during tenure with BEO.</li>
    </ol>

    <p>I accept the offer and intend to join on ________________.</p>
    <p>Date: _____________<br/><strong>${formData.name}</strong></p>

    <h3>ANNEXURE - III</h3>
    <h4>1. Work Time Rules</h4>
    <ul>
      <li>Monday to Friday: 8:00 am – 7:30 pm. Saturdays, Sundays, holidays off.</li>
      <li>Average 8 hrs/day. Less than 3 hrs = full day leave. Less than 6 hrs = half day leave.</li>
    </ul>

    <h4>2. Leave Policy</h4>
    <ul>
      <li>Apply leave through system, get prior approval.</li>
      <li>Leave requires prior planning depending on duration.</li>
      <li>Emergency leave must be reported.</li>
      <li>Employees on notice can take leave with approval.</li>
      <li>24 total leaves/year (12 sick + 12 earned). Plus 13 holidays in 2025.</li>
    </ul>

    <h4>3. Exit Policy</h4>
    <p>Notice period must be served per Annexure II.</p>

    <h4>4. Internet Usage Policy</h4>
    <p>Internet is for office use. Social/chat sites restricted.</p>

    <p>Date: _____________<br/><strong>${formData.name}</strong></p>
  </body>
</html>
`;


    setFilledHtml(template);
    if (onOfferGenerated) {
      onOfferGenerated(template); // Send the offer HTML to parent
    }
  };

  useEffect(() => {
    if (iframeRef.current && filledHtml) {
      iframeRef.current.srcdoc = filledHtml;
    }
  }, [filledHtml]);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Generate Offer Letter</h1>

      {/* Offer Form */}
      <form onSubmit={handleSubmit} className="grid gap-6 mb-10">
        <div>
          <label className="block text-sm font-semibold mb-1">Candidate Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Joining Date</label>
          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Salary</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Notice Period</label>
          <input
            type="text"
            name="noticePeriod"
            value={formData.noticePeriod}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Generate Offer
        </button>
      </form>
    </div>
  );
};

export default CreateOffer;



// import React from "react";
// import { useState, useRef,useEffect } from "react";
// const CreateOffer = () => {
//    const [formData, setFormData] = useState({
//     name: "",
//     joiningDate: "",
//     salary: "",
//     noticePeriod: "",
//   });

//   const [filledHtml, setFilledHtml] = useState("");
//   const iframeRef = useRef(null);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const totalSalary = parseFloat(formData.salary.replace(/[^0-9.]/g, ""));
//   if (isNaN(totalSalary)) {
//     alert("Please enter a valid numeric salary.");
//     return;
//   }

//   let breakup = {};

//   if (totalSalary <= 20000) {
//     breakup = {
//       BASIC: 0.4,
//       DA: 0.1,
//       HRA: 0.15,
//       LTA: 0.05,
//       CEA: 0.05,
//       RESEARCH_ALLOWANCE: 0.05,
//       COMMUNICATION_ALLOWANCE: 0.05,
//       SPECIAL_ALLOWANCE: 0.15,
//     };
//   } else if (totalSalary <= 100000) {
//     breakup = {
//       BASIC: 0.35,
//       DA: 0.1,
//       HRA: 0.2,
//       LTA: 0.05,
//       CEA: 0.05,
//       RESEARCH_ALLOWANCE: 0.05,
//       COMMUNICATION_ALLOWANCE: 0.05,
//       SPECIAL_ALLOWANCE: 0.15,
//     };
//   } else {
//     breakup = {
//       BASIC: 0.3,
//       DA: 0.1,
//       HRA: 0.25,
//       LTA: 0.05,
//       CEA: 0.05,
//       RESEARCH_ALLOWANCE: 0.05,
//       COMMUNICATION_ALLOWANCE: 0.05,
//       SPECIAL_ALLOWANCE: 0.15,
//     };
//   }

//   const calculate = (percentage) =>
//     (totalSalary * percentage).toFixed(2);

//   const salaryBreakupHtml = `
//     <h3>Salary Breakup</h3>
//     <ul>
//       <li><strong>Basic:</strong> ₹${calculate(breakup.BASIC)}</li>
//       <li><strong>DA:</strong> ₹${calculate(breakup.DA)}</li>
//       <li><strong>HRA:</strong> ₹${calculate(breakup.HRA)}</li>
//       <li><strong>LTA:</strong> ₹${calculate(breakup.LTA)}</li>
//       <li><strong>CEA:</strong> ₹${calculate(breakup.CEA)}</li>
//       <li><strong>Research Allowance:</strong> ₹${calculate(breakup.RESEARCH_ALLOWANCE)}</li>
//       <li><strong>Communication Allowance:</strong> ₹${calculate(breakup.COMMUNICATION_ALLOWANCE)}</li>
//       <li><strong>Special Allowance:</strong> ₹${calculate(breakup.SPECIAL_ALLOWANCE)}</li>
//     </ul>
//   `;

//   const template = `
//     <html>
//       <head>
//         <style>
//           body {
//             font-family: Arial, sans-serif;
//             padding: 30px;
//             background: #f9f9f9;
//             color: #333;
//           }
//           h2, h3 {
//             color: #444;
//           }
//           ul {
//             list-style: none;
//             padding: 0;
//           }
//           li {
//             margin-bottom: 6px;
//           }
//         </style>
//       </head>
//       <body>
//         <h2>Offer Letter</h2>
//         <p>Dear <strong>${formData.name}</strong>,</p>
//         <p>We are pleased to offer you a position at our company.</p>
//         <p><strong>Joining Date:</strong> ${formData.joiningDate}</p>
//         <p><strong>Total Salary:</strong> ₹${totalSalary.toFixed(2)}</p>
//         <p><strong>Notice Period:</strong> ${formData.noticePeriod}</p>
//         <br/>
//         ${salaryBreakupHtml}
//         <br/>
//         <p>Looking forward to having you on board.</p>
//         <p>Regards,<br/>HR Department</p>
//       </body>
//     </html>
//   `;

//   setFilledHtml(template);
// };

//   // Set the iframe content when filledHtml updates
//   useEffect(() => {
//     if (iframeRef.current && filledHtml) {
//       iframeRef.current.srcdoc = filledHtml;
//     }
//   }, [filledHtml]);

//   return (
//     <div className="max-w-4xl mx-auto p-8">
//       <h1 className="text-2xl font-bold mb-6">Generate Offer Letter</h1>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="grid gap-6 mb-10">
//         <div>
//           <label className="block text-sm font-semibold mb-1">Candidate Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-4 py-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold mb-1">Joining Date</label>
//           <input
//             type="date"
//             name="joiningDate"
//             value={formData.joiningDate}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-4 py-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold mb-1">Salary</label>
//           <input
//             type="text"
//             name="salary"
//             value={formData.salary}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-4 py-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold mb-1">Notice Period</label>
//           <input
//             type="text"
//             name="noticePeriod"
//             value={formData.noticePeriod}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-4 py-2"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//         >
//           Generate Offer
//         </button>
//       </form>

//       {/* Offer Preview */}
//       {filledHtml && (
//         <div className="border border-gray-300 rounded overflow-hidden">
//           <iframe
//             ref={iframeRef}
//             title="Offer Preview"
//             className="w-full h-[500px]"
//           />
//         </div>
//       )}
//     </div>
//   );
// };
// export default CreateOffer