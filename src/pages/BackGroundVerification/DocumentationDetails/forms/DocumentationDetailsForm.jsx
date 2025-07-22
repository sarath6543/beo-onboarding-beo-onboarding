import React from "react";
import FormWrapper from "../../../../beolayer/components/base/Form/FormWrapper";
import DetailsCard from "../../../../beolayer/components/base/DetailsCard/DetailsCard";
import usePersonalDetailsStore from "../../../../beolayer/stores/BGV/PersonalDetails/usePersonalDetailsStore";
import useExperienceStore from "../../../../beolayer/stores/BGV/ExperienceDetails/useExperienceDetailsStore";
import usePanCardStore from '../../../../beolayer/stores/BGV/PersonalDetails/usePanCardStore';
import useAadhaaStore from '../../../../beolayer/stores/BGV/PersonalDetails/useAadharDetailsStore';
import useAddressStore from "../../../../beolayer/stores/BGV/PersonalDetails/useAddressStore";
import useEducationStore from '../../../../beolayer/stores/BGV/EducationalDetails/useEducationalDetailsStore';
import Button from "../../../../beolayer/components/base/Button/Button";

const DocumentationDetailsForm = () => {
  const personalDetails = usePersonalDetailsStore();
  const panCardDetails = usePanCardStore();
  const aadhaarDetails = useAadhaaStore();
  const { experienceList } = useExperienceStore();
  const { educationList } = useEducationStore();
  const addressDetails = useAddressStore();

  const handleView = () => {
    alert("View clicked");
  };

  const handleSave = () => {
    console.log("Save clicked");
  };

  const personalDetailsColumns = [
    [
      { label: "First Name", value: personalDetails.firstName },
      { label: "Father’s Name", value: personalDetails.fathersName },
      { label: "Place of Birth", value: personalDetails.placeOfBirth },
    ],
    [
      { label: "Middle Name", value: personalDetails.middleName },
      { label: "Date of Birth", value: personalDetails.dob },
      { label: "Gender", value: personalDetails.gender },
    ],
    [
      { label: "Last Name", value: personalDetails.lastName },
      { label: "Nationality", value: personalDetails.nationality },
      { label: "Marital Status", value: personalDetails.maritalStatus },
    ],
    [
      { label: "Alternate Mobile Number", value: personalDetails.alternateMobileNumber },
      { label: "Blood Group", value: personalDetails.bloodGroup },
      { label: "Mobile", value: personalDetails.mobile },
    ],
  ];

  const panCardDetailsColumns = [
    [{ label: "PAN Number", value: panCardDetails.panNumber }],
    [{ label: "Name on PAN Card", value: panCardDetails.panName }],
  ];

  const aadhaarDetailsColumns = [
    [{ label: "Aadhaar Number", value: aadhaarDetails.aadharNumber }],
    [{ label: "Name on Aadhaar Card", value: aadhaarDetails.aadharName }],
  ];

  const createAddressColumns = (formData) => [
    [
      { label: "Address Line 1", value: formData.addressLine1 },
      { label: "City", value: formData.city },
    ],
    [
      { label: "Address Line 2", value: formData.addressLine2 },
      { label: "Country", value: formData.country },
    ],
    [
      { label: "Address Line 3", value: formData.addressLine3 },
      { label: "State", value: formData.state },
    ],
    [
      { label: "Landmark", value: formData.landmark },
      { label: "Duration of Stay From", value: formData.DurationOfStay },
    ],
  ];

  const addressDetailsColumns = [
    { sectionTitle: "Current Address", data: createAddressColumns(addressDetails.formDataCurrent) },
    { sectionTitle: "Permanent Address", data: createAddressColumns(addressDetails.formDataPermanent) },
  ];

  const createEducationColumns = (edu) => {
    const isSchool = edu.key === "10th" || edu.key === "12th";
    return [
      [
        { label: isSchool ? "Board" : "University", value: edu.board },
        { label: isSchool ? "From Date" : "Mode of Education", value: isSchool ? edu.fromDate : edu.modeOfEducation },
      ],
      [
        { label: isSchool ? "School" : "College/Institute", value: edu.school },
        { label: isSchool ? "To Date" : "Specialization", value: isSchool ? edu.toDate : edu.specialization },
      ],
      [{ label: "Percentage/CGPA", value: edu.percentage }],
    ];
  };

  const educationDetailsColumns = educationList.map((edu) => {
    const certificateUrl =
      edu.certificateFilePreviewUrl ||
      (edu.certificate instanceof File ? URL.createObjectURL(edu.certificate) : null);

    const sectionImages = certificateUrl
      ? [{
          label: `${edu.key} Certificate`,
          url: certificateUrl,
          type: edu.certificate?.type || "application/pdf",
          onViewClick: () => window.open(certificateUrl, "_blank"),
        }]
      : [];

    return {
      sectionTitle: edu.key,
      data: createEducationColumns(edu),
      img: sectionImages,
    };
  });

  const createExperienceColumns = (exp) => [
    [
      { label: "Company Name", value: exp.companyName },
      { label: "Employee Id", value: exp.employeeId },
      { label: "Designation", value: exp.designation },
    ],
    [
      { label: "Location", value: exp.location },
      { label: "Mode of Employment", value: exp.modeOfEmployement },
      { label: "Start Date", value: exp.startDate },
    ],
    [
      { label: "Last Working Date", value: exp.lastWorkingDate },
    ],
  ];

  const experienceDetailsColumns = experienceList.map((exp, index) => {
    const relievingLetterUrl =
      exp.relievingPreviewUrl ||
      (exp.relievingFile instanceof File ? URL.createObjectURL(exp.relievingFile) : null);

    const salarySlipUrl =
      exp.salaryPreviewUrl ||
      (exp.salaryFile instanceof File ? URL.createObjectURL(exp.salaryFile) : null);

    const experienceImages = [];

    if (relievingLetterUrl) {
      experienceImages.push({
        label: "Relieving Letter",
        url: relievingLetterUrl,
        type: exp.relievingFile?.type || "application/pdf",
        onViewClick: () => window.open(relievingLetterUrl, "_blank"),
      });
    }

    if (salarySlipUrl) {
      experienceImages.push({
        label: "Salary Slip",
        url: salarySlipUrl,
        type: exp.salaryFile?.type || "application/pdf",
        onViewClick: () => window.open(salarySlipUrl, "_blank"),
      });
    }
    // console.log("DEBUG experienceImages:", experienceImages);
    return {
      sectionTitle: `Experience ${index + 1}`,
      data: createExperienceColumns(exp),
      img: experienceImages,
    };
  });

  return (
    <FormWrapper columns={1} onSave={handleSave}>
      <div className="p-4 space-y-6">
        <DetailsCard
          title="Personal Details"
          columns={personalDetailsColumns}
          images={
            personalDetails.photoPreviewUrl
              ? [{
                  label: "Photo",
                  url: personalDetails.photoPreviewUrl,
                  onViewClick: handleView,
                }]
              : []
          }
        />

        <DetailsCard
          title="PAN Card Details"
          columns={panCardDetailsColumns}
          images={
            panCardDetails.panFilePreviewUrl
              ? [{
                  label: "PAN Card",
                  url: panCardDetails.panFilePreviewUrl,
                  onViewClick: handleView,
                }]
              : []
          }
        />

        <DetailsCard
          title="Aadhaar Card Details"
          columns={aadhaarDetailsColumns}
          images={
            aadhaarDetails.aadharFilePreviewUrl
              ? [{
                  label: "Aadhaar Card",
                  url: aadhaarDetails.aadharFilePreviewUrl,
                  onViewClick: handleView,
                }]
              : []
          }
        />

        <DetailsCard
          title="Address Details"
          columns={addressDetailsColumns}
        />

        <DetailsCard
          title="Experience Details"
          columns={experienceDetailsColumns}
        />

        <DetailsCard
          title="Education Details"
          columns={educationDetailsColumns}
        />
      </div>
  
        <div className="max-w-6xl mx-auto px-2 flex flex-col sm:flex-row justify-end gap-5">
          <button className="px-7 py-3 text-sm rounded-full border border-gray-300 bg-white text-black hover:bg-gray-100 font-semibold transition">
           Back
          </button>
          <button className="px-7 py-3 text-sm rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition font-semibold">
            Submit
          </button>
        </div>
      
    </FormWrapper>
  );
};

export default DocumentationDetailsForm;









































// import React from "react";
// import FormWrapper from "../../../../beolayer/components/base/Form/FormWrapper";
// import DetailsCard from "../../../../beolayer/components/base/DetailsCard/DetailsCard";
// import usePersonalDetailsStore from "../../../../beolayer/stores/BGV/PersonalDetails/usePersonalDetailsStore";
// import useExperienceStore from "../../../../beolayer/stores/BGV/ExperienceDetails/useExperienceDetailsStore";
// import usePanCardStore from '../../../../beolayer/stores/BGV/PersonalDetails/usePanCardStore'
// import useAadhaaStore from '../../../../beolayer/stores/BGV//PersonalDetails/useAadharDetailsStore'
// import useAddressStore from "../../../../beolayer/stores/BGV/PersonalDetails/useAddressStore";
// import useEducationStore from '../../../../beolayer/stores/BGV/EducationalDetails/useEducationalDetailsStore'


// const DocumentationDetailsForm = () => {
//   const personalDetails = usePersonalDetailsStore();
//   const panCardDetails = usePanCardStore();
//   const aadhaarDetails = useAadhaaStore();
//   const { experienceList } = useExperienceStore();
//   const { educationList } = useEducationStore()
//   const addressDetails = useAddressStore()


//   const handleView = () => {
//     alert("View clicked");
//   };

//   const handleSave = () => {
//     console.log("Save clicked");
//   };

//   const personalDetailsColumns = [
//     [
//       { label: "First Name", value: personalDetails.firstName },
//       { label: "Father’s Name", value: personalDetails.fathersName },
//       { label: "Place of Birth", value: personalDetails.placeOfBirth },
//     ],
//     [
//       { label: "Middle Name", value: personalDetails.middleName },
//       { label: "Date of Birth", value: personalDetails.dob },
//       { label: "Gender", value: personalDetails.gender },
//     ],
//     [
//       { label: "Last Name", value: personalDetails.lastName },
//       { label: "Nationality", value: personalDetails.nationality },
//       { label: "Marital Status", value: personalDetails.maritalStatus },
//     ],
//     [
//       { label: "Alternate Mobile Number", value: personalDetails.alternateMobileNumber },
//       { label: "Blood Group", value: personalDetails.bloodGroup },
//       { label: "Mobile", value: personalDetails.mobile },
//     ],
//   ];

//   const panCardDetailsColumns = [
//     [{ label: "PAN Number", value: panCardDetails.panNumber }],
//     [{ label: "Name on PAN Card", value: panCardDetails.panName }],
//   ];

//   const aadhaarDetailsColumns = [
//     [{ label: "Aadhaar Number", value: aadhaarDetails.aadharNumber }],
//     [{ label: "Name on Aadhaar Card", value: aadhaarDetails.aadharName }],
//   ];

//   const createAddressColumns = (formData) => [
//     [
//       { label: "Address Line 1", value: formData.addressLine1 },
//       { label: "City", value: formData.city },
//     ],
//     [
//       { label: "Address Line 2", value: formData.addressLine2 },
//       { label: "Country", value: formData.country },
//     ],
//     [
//       { label: "Address Line 3", value: formData.addressLine3 },
//       { label: "State", value: formData.state },
//     ],
//     [
//       { label: "Landmark", value: formData.landmark },
//       { label: "Duration of Stay From", value: formData.DurationOfStay },
//     ],
//   ];
//   const addressDetailsColumns = [
//     { sectionTitle: "Current Address", data: createAddressColumns(addressDetails.formDataCurrent) },
//     { sectionTitle: "Permanent Address", data: createAddressColumns(addressDetails.formDataPermanent) },
//   ];

//   //  education column creation
//   const createEducationColumns = (edu) => {

//     const isSchool = edu.key === "10th" || edu.key === "12th";
//     return [
//       [
//         { label: (isSchool ? "Board" : "University"), value: edu.board },
//         { label: (isSchool ? "From Date" : "modeOfEducation"), value: (isSchool ? edu.fromDate : edu.modeOfEducation) },
//       ],
//       [
//         { label: (isSchool ? "School" : "College/Institute"), value: edu.school },
//         { label: (isSchool ? "To Date" : "Specialization"), value: (isSchool ? edu.toDate : edu.specialization) },
//       ],
//       [
//         { label: "Percentage/CGPA", value: edu.percentage },
//       ],
//     ];
//   };

//   const educationDetailsColumns = educationList.map((edu) => {
//     const certificateUrl =
//       edu.certificateFilePreviewUrl ||
//       (edu.certificate instanceof File ? URL.createObjectURL(edu.certificate) : null);

//     const sectionImages = certificateUrl
//       ? [{
//         label: `${edu.key} Certificate`,
//         url: certificateUrl,
//         onViewClick: () => window.open(certificateUrl, "_blank"),
//       }]
//       : [];

//     return {
//       sectionTitle: edu.key,
//       data: createEducationColumns(edu),
//       img: sectionImages,
//     };
//   });

//   //  experience column creation
//   const createExperienceColumns = (exp) => {
//     return [
//       [
//         { label: "Company Name", value: exp.companyName },
//         { label: "Employee Id", value: exp.employeeId },
//         { label: "Designation", value: exp.designation },
//       ],
//       [
//         { label: "Location", value: exp.location },
//         { label: "Mode of Employment", value: exp.modeOfEmployement },
//         { label: "Start Date", value: exp.startDate },
//       ],
//       [
//         { label: "Last Working Date", value: exp.lastWorkingDate },
//       ],
//     ];
//   };

//   const experienceDetailsColumns = experienceList.map((exp, index) => {
//     const relievingLetterUrl =
//       exp.relievingPreviewUrl ||
//       (exp.relievingFile instanceof File ? URL.createObjectURL(exp.relievingFile) : null);

//     const salarySlipUrl =
//       exp.salaryPreviewUrl ||
//       (exp.salaryFile instanceof File ? URL.createObjectURL(exp.salaryFile) : null);

//     const experienceImages = [];

//     if (relievingLetterUrl) {
//       experienceImages.push({
//         label: "Relieving Letter",
//         url: relievingLetterUrl,
//         onViewClick: () => window.open(relievingLetterUrl, "_blank"),
//       });
//     }

//     if (salarySlipUrl) {
//       experienceImages.push({
//         label: "Salary Slip",
//         url: salarySlipUrl,
//         onViewClick: () => window.open(salarySlipUrl, "_blank"),
//       });
//     }

//     return {
//       sectionTitle: `Experience ${index + 1}`,
//       data: createExperienceColumns(exp),
//       img: experienceImages
//     }
//   });

//   return (
//     <FormWrapper columns={1} onSave={handleSave}>
//       <div className="p-4 space-y-6">
//         <DetailsCard
//           title="Personal Details"
//           columns={personalDetailsColumns}
//           images={[
//             {
//               label: "Photo",
//               url: personalDetails.photoPreviewUrl || "https://via.placeholder.com/60",
//               onViewClick: handleView,
//             },
//           ]}
//         />
//         <DetailsCard
//           title="PAN Card Details"
//           columns={panCardDetailsColumns}
//           images={[
//             {
//               label: "PAN Card",
//               url: panCardDetails.panFilePreviewUrl || "https://via.placeholder.com/60",
//               onViewClick: handleView,
//             },
//           ]}
//         />
//         <DetailsCard
//           title="Aadhaar Card Details"
//           columns={aadhaarDetailsColumns}
//           images={[
//             {
//               label: "Aadhaar Card",
//               url: aadhaarDetails.aadharFilePreviewUrl || "https://via.placeholder.com/60",
//               onViewClick: handleView,
//             },
//           ]}
//         />

//         <DetailsCard
//           title="Address Details"
//           columns={addressDetailsColumns}
//         />



//         <DetailsCard
//           title="Experience Details"
//           columns={experienceDetailsColumns}
//         />


//         {/* Education Details */}


//         <DetailsCard
//           title="Education Details"
//           columns={educationDetailsColumns}
//         />

//       </div>
//     </FormWrapper>
//   );
// };

// export default DocumentationDetailsForm;
