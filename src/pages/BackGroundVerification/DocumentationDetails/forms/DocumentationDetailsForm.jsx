import React from "react";
import FormWrapper from "../../../../beolayer/components/base/Form/FormWrapper";
import DetailsCard from "../../../../beolayer/components/base/DetailsCard/DetailsCard";
import usePersonalDetailsStore from "../../../../beolayer/stores/BGV/PersonalDetails/usePersonalDetailsStore";
import useExperienceStore from "../../../../beolayer/stores/BGV/ExperienceDetails/useExperienceDetailsStore";
import usePanCardStore from "../../../../beolayer/stores/BGV/PersonalDetails/usePanCardStore";
import useAadhaaStore from "../../../../beolayer/stores/BGV/PersonalDetails/useAadharDetailsStore";
import useAddressStore from "../../../../beolayer/stores/BGV/PersonalDetails/useAddressStore";
import useEducationStore from '../../../../beolayer/stores/BGV/EducationalDetails/useEducationalDetailsStore';

const DocumentationDetailsForm = () => {
  const personalDetails = usePersonalDetailsStore();
  const panCardDetails = usePanCardStore();
  const aadhaarDetails = useAadhaaStore();
  const { experienceList, setExperienceField } = useExperienceStore();
  const { educationList, setEducationalField } = useEducationStore();
  const addressDetails = useAddressStore();
// console.log(panCardDetails,"kjdhfgkjdfhnkgjdnfkjgdf")

// console.log("exp",experienceList);

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
      { label: "Mobile Number", value: personalDetails.mobileNumber },
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

  const createExperienceColumns = (exp) => [
    [
      { label: "Company Name", value: exp.company },
      { label: "Role", value: exp.role },
    ],
    [
      { label: "Start Date", value: exp.startDate },
      { label: "End Date", value: exp.endDate },
    ],
    [
      { label: "Employment Type", value: exp.employmentType },
      { label: "Current Organization", value: exp.isCurrentOrg ? "Yes" : "No" },
    ],
  ];

const educationDetailsColumns = educationList.map((edu, index) => {
  const certificateUrl =
    edu.certificateFilePreviewUrl ||
    (edu.certificate instanceof File ? URL.createObjectURL(edu.certificate) : null);

  return {
    sectionTitle: edu.key,
    data: createEducationColumns(edu),
    img: [
      {
        label: `${edu.key} Certificate`,
        url: certificateUrl || null,
        type: edu.certificate?.type,
        fallback: certificateUrl ? null : "No file uploaded",
        onViewClick: certificateUrl
          ? () =>
              setSelectedImg({
                label: `${edu.key} Certificate`,
                url: certificateUrl,
                type: edu.certificate?.type,
              })
          : undefined,
        onUpload: (file, url) => {
          setEducationalField(index, "certificate", file);
          setEducationalField(index, "certificateFilePreviewUrl", url);
        },
      },
    ],
  };
});




const experienceDetailsColumns = experienceList.map((exp, index) => {
  const relievingLetterUrl =
    exp.relievingPreviewUrl ||
    (exp.relievingFile instanceof File ? URL.createObjectURL(exp.relievingFile) : null);

  const salarySlipUrl =
    exp.salaryPreviewUrl ||
    (exp.salaryFile instanceof File ? URL.createObjectURL(exp.salaryFile) : null);

  return {
    sectionTitle: `Experience ${index + 1}`,
    data: createExperienceColumns(exp),
    img: [
      {
        label: "Relieving Letter",
        url: relievingLetterUrl || null,
        type: exp.relievingFile?.type,
        fallback: relievingLetterUrl ? null : "No file uploaded",
        onViewClick: relievingLetterUrl
          ? () =>
              setSelectedImg({
                label: "Relieving Letter",
                url: relievingLetterUrl,
                type: exp.relievingFile?.type,
              })
          : undefined,
        onUpload: (file, url) => {
          setExperienceField(index, "relievingFile", file);
          setExperienceField(index, "relievingPreviewUrl", url);
        },
      },
      {
        label: exp.isCurrentOrg ? "Salary Slip" : "Experience Letter",
        url: salarySlipUrl || null,
        type: exp.salaryFile?.type,
        fallback: salarySlipUrl ? null : "No file uploaded",
        onViewClick: salarySlipUrl
          ? () =>
              setSelectedImg({
                label: exp.isCurrentOrg ? "Salary Slip" : "Experience Letter",
                url: salarySlipUrl,
                type: exp.salaryFile?.type,
              })
          : undefined,
        onUpload: (file, url) => {
          setExperienceField(index, "salaryFile", file);
          setExperienceField(index, "salaryPreviewUrl", url);
        },
      },
    ],
  };
});


  return (
    <FormWrapper columns={1} onSave={handleSave}>
      <DetailsCard
        title="Personal Details"
        heading="Personal Information"
        columns={personalDetailsColumns}
        images={[
          {
            label: "Photo",
            url: personalDetails.photoPreviewUrl || null,
            type: personalDetails.photoFile?.type,
            fallback: personalDetails.photoPreviewUrl ? null : "No file uploaded",
            onViewClick: personalDetails.photoPreviewUrl
              ? () =>
                  setSelectedImg({
                    label: "Photo",
                    url: personalDetails.photoPreviewUrl,
                    type: personalDetails.photoFile?.type
                  })
              : undefined,
            onUpload: (file, url) => {
              personalDetails.setPersonalDetailsField("photoFile", file);
              personalDetails.setPersonalDetailsField("photoPreviewUrl", url);
            }
          }
        ]}
      />

<DetailsCard
  title="PAN Card Details"
  heading="PAN Information"
  columns={panCardDetailsColumns}
  images={[
    {
      label: "PAN Card",
      url: panCardDetails.panFilePreviewUrl || null,
      type: panCardDetails.panFile?.type,
      fallback: panCardDetails.panFilePreviewUrl ? null : "No file uploaded",
      onViewClick: panCardDetails.panFilePreviewUrl
        ? () =>
            setSelectedImg({
              label: "PAN Card",
              url: panCardDetails.panFilePreviewUrl,
              type: panCardDetails.panFile?.type,
            })
        : undefined,
      onUpload: (file, url) => {
        panCardDetails.setPanField("panFile", file);
        panCardDetails.setPanField("panFilePreviewUrl", url);
      },
    },
  ]}
/>


   <DetailsCard
  title="Aadhaar Card Details"
  heading="Aadhaar Information"
  columns={aadhaarDetailsColumns}
  images={[
    {
      label: "Aadhaar Card",
      url: aadhaarDetails.aadharFilePreviewUrl || null,
      type: aadhaarDetails.aadharFile?.type,
      fallback: aadhaarDetails.aadharFilePreviewUrl ? null : "No file uploaded",
      onViewClick: aadhaarDetails.aadharFilePreviewUrl
        ? () =>
            setSelectedImg({
              label: "Aadhaar Card",
              url: aadhaarDetails.aadharFilePreviewUrl,
              type: aadhaarDetails.aadharFile?.type,
            })
        : undefined,
      onUpload: (file, url) => {
        aadhaarDetails.setAadharField("aadharFile", file);
        aadhaarDetails.setAadharField("aadharFilePreviewUrl", url);
      },
    },
  ]}
/>


      <DetailsCard title="Address Details" heading="Address Information" columns={addressDetailsColumns} />
      <DetailsCard title="Education Details" heading="Education Details" columns={educationDetailsColumns} />
      <DetailsCard title="Experience Details" heading="Experience Details" columns={experienceDetailsColumns} />
    </FormWrapper>
  );
};

export default DocumentationDetailsForm;
