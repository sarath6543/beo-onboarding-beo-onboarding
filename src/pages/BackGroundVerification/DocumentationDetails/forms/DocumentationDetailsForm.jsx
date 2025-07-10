import React, { use, useState } from "react";
import FormWrapper from "../../../../beolayer/components/base/Form/FormWrapper";
import DetailsCard from "../../../../beolayer/components/base/DetailsCard/DetailsCard";
import usePersonalDetailsStore from "../../../../beolayer/stores/BGV/PersonalDetails/usePersonalDetailsStore";
import useExperienceStore from "../../../../beolayer/stores/BGV/ExperienceDetails/useExperienceDetailsStore";
import usePanCardStore from '../../../../beolayer/stores/BGV/PersonalDetails/usePanCardStore'
import useAadhaaStore from '../../../../beolayer/stores/BGV//PersonalDetails/useAadharDetailsStore'
import useAddressStore from "../../../../beolayer/stores/BGV/PersonalDetails/useAddressStore";

const DocumentationDetailsForm = () => {

  const personalDetails = usePersonalDetailsStore();
  const panCardDetails = usePanCardStore();
  const aadhaarDetails = useAadhaaStore();
  const addressDetails = useAddressStore()
  const { experienceList } = useExperienceStore();
  console.log("Address Details:", addressDetails);
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

  const aadhaarDetailsColumns = [
    [{label: "Aadhar Card Number", value: aadhaarDetails.aadharNumber }],
    [{label: "Name as it appears on Aadhar", value: aadhaarDetails.aadharName }]
  ];

  const addresDetailsColumns = [
    [
      { label: "Address Line 1", value: addressDetails.addressLine1 },
      { label: "City", value: addressDetails.city },
    ],
    [
      { label: "Address Line 2", value: addressDetails.addressLine2 },
      { label: "Country", value: addressDetails.country },
    ],
    [
      { label: "Address Line 3", value: addressDetails.addressLine3 },
      { label: "State", value: addressDetails.state },
    ],
    [
      { label: "Landmark", value: addressDetails.landmark },
      { label: "Duration of Stay From", value: addressDetails.DurationOfStay },
    ],
  ]

  const panCardDetailsColumns = [
    [{label: "PAN Card Number", value: panCardDetails.panNumber }],
    [{label: "Name as it appears on PAN Card", value: panCardDetails.panName }]
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
          title="PanCard Details"
          columns={panCardDetailsColumns}
          photoUrl="https://via.placeholder.com/60"
          onViewClick={handleView}
        />
        <DetailsCard
          title="Aadhaar Details"
          columns={aadhaarDetailsColumns}
          photoUrl="https://via.placeholder.com/60"
          onViewClick={handleView}
        />
        <DetailsCard
          title="Address Details"
          columns={addresDetailsColumns}
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

