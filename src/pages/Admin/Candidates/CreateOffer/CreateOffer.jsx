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
              padding: 30px;
              background: #f9f9f9;
              color: #333;
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
          </style>
        </head>
        <body>
          <h2>Offer Letter</h2>
          <p>Dear <strong>${formData.name}</strong>,</p>
          <p>We are pleased to offer you a position at our company.</p>
          <p><strong>Joining Date:</strong> ${formData.joiningDate}</p>
          <p><strong>Total Salary:</strong> ₹${totalSalary.toFixed(2)}</p>
          <p><strong>Notice Period:</strong> ${formData.noticePeriod}</p>
          <br/>
          ${salaryBreakupHtml}
          <br/>
          <p>Looking forward to having you on board.</p>
          <p>Regards,<br/>HR Department</p>
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