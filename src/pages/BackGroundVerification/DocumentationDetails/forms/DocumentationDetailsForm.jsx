import React from "react";
import FormWrapper from "../../../../beolayer/components/base/Form/FormWrapper";
import DetailsCard from "../../../../beolayer/components/base/DetailsCard/DetailsCard";
import usePersonalDetailsStore from "../../../../beolayer/stores/BGV/PersonalDetails/usePersonalDetailsStore";
import useExperienceStore from "../../../../beolayer/stores/BGV/ExperienceDetails/useExperienceDetailsStore";
import usePanCardStore from '../../../../beolayer/stores/BGV/PersonalDetails/usePanCardStore'
import useAadhaaStore from '../../../../beolayer/stores/BGV//PersonalDetails/useAadharDetailsStore'
import useAddressStore from "../../../../beolayer/stores/BGV/PersonalDetails/useAddressStore";

const DocumentationDetailsForm = () => {
  const personalDetails = usePersonalDetailsStore();
  const { experienceList } = useExperienceStore();
  console.log(experienceList,"exp list ")
    console.log(personalDetails,"perrrrr list ")

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

  return (
    <FormWrapper columns={1} onSave={handleSave}>
      <div className="p-4 space-y-6">
        <DetailsCard
          title="Personal Details"
          columns={personalDetailsColumns}
          images={[
            {
              label: "Photo",
              url: personalDetails.photoPreviewUrl || "https://via.placeholder.com/60",
              onViewClick: handleView,
            },
          ]}
        />
        <DetailsCard
          title="PAN Card Details"
          columns={[
            [{ label: "PAN Number", value: personalDetails.panNumber }],
          ]}
          images={[
            {
              label: "PAN Card",
              url: personalDetails.panFilePreviewUrl || "https://via.placeholder.com/60",
              onViewClick: handleView,
            },
          ]}
        />

{experienceList.map((exp, index) => {
  const relievingLetterUrl =
    exp.relievingPreviewUrl ||
    (exp.relievingFile instanceof File
      ? URL.createObjectURL(exp.relievingFile)
      : null);

  const salarySlipUrl =
    exp.salaryPreviewUrl ||
    (exp.salaryFile instanceof File
      ? URL.createObjectURL(exp.salaryFile)
      : null);

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

  const experienceImages = [];

  if (relievingLetterUrl) {
    experienceImages.push({
      label: "Relieving Letter",
      url: relievingLetterUrl,
      onViewClick: () => window.open(relievingLetterUrl, "_blank"),
    });
  }

  if (salarySlipUrl) {
    experienceImages.push({
      label: "Salary Slip",
      url: salarySlipUrl,
      onViewClick: () => window.open(salarySlipUrl, "_blank"),
    });
  }

  return (
    <DetailsCard
      key={index}
      title={`Experience ${index + 1}`}
      columns={experienceColumns}
      images={experienceImages}
    />
  );
})}


      </div>
    </FormWrapper>
  );
};

export default DocumentationDetailsForm;
