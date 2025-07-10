import React, { use, useState } from "react";
import FormWrapper from "../../../../beolayer/components/base/Form/FormWrapper";
import DetailsCard from "../../../../beolayer/components/base/DetailsCard/DetailsCard";
import usePersonalDetailsStore from "../../../../beolayer/stores/BGV/PersonalDetails/usePersonalDetailsStore";
import useExperienceStore from "../../../../beolayer/stores/BGV/ExperienceDetails/useExperienceDetailsStore";

const DocumentationDetailsForm = () => {

  const personalDetails = usePersonalDetailsStore();
    const { experienceList } = useExperienceStore();
 // console.log(personalDetails.firstName, "nameeeeeee");

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

  const handleView = () => {
    alert("View clicked");
  };
  const handleSave = () => {};

  return (
    <FormWrapper columns={1} onSave={handleSave}>
      <div className="p-4 space-y-6">
        <DetailsCard
          title="Personal Details"
          columns={personalDetailsColumns}
          photoUrl="https://via.placeholder.com/60"
          onViewClick={handleView}
        />
         <DetailsCard
          title="PanCard  Details"
          columns={personalDetailsColumns}
          photoUrl="https://via.placeholder.com/60"
          onViewClick={handleView}
        />
                {experienceList.map((exp, index) => {
          const experienceColumns = [
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

          return (
            <DetailsCard
              key={index}
              title={`Experience ${index + 1}`}
              columns={experienceColumns}
              photoUrl="https://via.placeholder.com/60"
              onViewClick={handleView}
            />
          );
        })}
      </div>
    </FormWrapper>
  );
};

export default DocumentationDetailsForm;

// import React, { useState } from 'react'
// import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
// import InputField from '../../../../beolayer/components/base/InputField/InputField';
// import usePanCardStore from '../../../../beolayer/stores/BGV/PersonalDetails/usePanCardStore';

// const DocumentationDetailsForm = () => {
//       const { panNumber, panName, panFile } = usePanCardStore();
//       console.log(panNumber, panName, panFile,"from store ");

//     const [formData,setFormData] = useState({
//             aadhaar:"",
//             pan:"",
//             photo:"",
//             tenth:"",
//             twelfth:"",
//             diploma:"",
//             payslip:"",
//             experience:"",
//             diploma2:""
//         });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSave = () => {
//         console.log("Saving document details:", formData);
//     };

//   return (
//     <FormWrapper columns={1} onSave={handleSave}>
//         <p className='text-xl font-medium'>Personal</p>
//         <FormWrapper columns={3}>
//             <InputField
//                     label="Aadhaar"
//                     type="upload"
//                     value={formData.aadhaar}
//                     onChange={handleChange}
//                     name="aadhaar"
//                     asterisk
//                 />
//                 <InputField
//                     label="Pan"
//                     type="upload"
//                     value={formData.pan}
//                     onChange={handleChange}
//                     name="pan"
//                     asterisk
//                 />
//                 <InputField
//                     label="Photo"
//                     type="upload"
//                     value={formData.photo}
//                     onChange={handleChange}
//                     name="photo"
//                     asterisk
//                 />
//         </FormWrapper>

//         <p className='mt-6 text-xl font-medium'>Education</p>
//             <FormWrapper columns={3}>
//                 <InputField
//                     label="10th"
//                     type="upload"
//                     value={formData.tenth}
//                     onChange={handleChange}
//                     name="tenth"
//                     asterisk
//                 />
//                 <InputField
//                     label="12th"
//                     type="upload"
//                     value={formData.twelfth}
//                     onChange={handleChange}
//                     name="twelfth"
//                     asterisk
//                 />
//                 <InputField
//                     label="Diploma"
//                     type="upload"
//                     value={formData.diploma}
//                     onChange={handleChange}
//                     name="diploma"
//                     asterisk
//                 />
//             </FormWrapper>

//         <p className='mt-6 text-xl font-medium'>Experience</p>
//             <FormWrapper columns={3}>
//                 <InputField
//                     label="Last 3 month's payslip"
//                     type="upload"
//                     value={formData.payslip}
//                     onChange={handleChange}
//                     name="payslip"
//                     asterisk
//                 />
//                 <InputField
//                     label="Relieving/ Experience letter"
//                     type="upload"
//                     value={formData.experience}
//                     onChange={handleChange}
//                     name="experience"
//                     asterisk
//                 />
//                 <InputField
//                     label="Diploma"
//                     type="upload"
//                     value={formData.diploma2}
//                     onChange={handleChange}
//                     name="diploma2"
//                     asterisk
//                 />
//             </FormWrapper>

//     </FormWrapper>
//   )
// }

// export default DocumentationDetailsForm
