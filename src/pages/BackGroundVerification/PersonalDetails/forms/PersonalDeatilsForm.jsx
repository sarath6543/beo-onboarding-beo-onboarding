import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField'
import usePersonalDetailsStore from '../../../../beolayer/stores/BGV/PersonalDetails/usePersonalDetailsStore'
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";


const PersonalDeatilsForm = () => {
  const { t, i18n } = useTranslation();

  const { firstName, middleName, lastName, fathersName, dob, nationality, placeOfBirth, gender, maritalStatus, email, pin, mobile, alternateMobileNumber, photoFile, bloodGroup, setPersonalDetailsField } = usePersonalDetailsStore();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      fathersName: fathersName,
      dob: dob,
      nationality: nationality,
      placeOfBirth: placeOfBirth,
      gender: gender,
      maritalStatus: maritalStatus,
      email: email,
      pin: pin,
      mobile: mobile,
      alternateMobileNumber: alternateMobileNumber,
      bloodGroup: bloodGroup,
      photoFile: photoFile ? [photoFile] : null,
    },
  })

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "photoFile" && value.photoFile?.[0]) {
        setPersonalDetailsField("photoFile", value.photoFile[0]);
      } else if (name && value[name] !== undefined) {
        setPersonalDetailsField(name, value[name]);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setPersonalDetailsField]);

  const onSubmit = (data) => {
console.log("inside experince details")
  };
  const options = [
    { key: "Male", value: "male" },
    { key: "Female", value: "female" }
  ];

  const nationalityOptions = [
    { key: "India", value: "india" }
  ]

  const maritalStatusOptions = [
    { key: "Single", value: "single" },
    { key: "Married ", value: "Married " },
  ]
    const bloodGroupOptions = [
      { key: "A+", value: "A+" },
      { key: "A-", value: "A-" },
      { key: "B+", value: "B+" },
      { key: "B-", value: "B-" },
      { key: "O+", value: "O+" },
      { key: "O-", value: "O-" },
      { key: "AB+", value: "AB+" },
      { key: "AB-", value: "AB-" },
    ]



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  }


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const watchedFile = watch("photoFile");
    const onError = (errors) => {
      const firstError = Object.values(errors)[0];
      toast.error(firstError?.message || "Please check the form and try again.");
    };
  return (
      <>
    <FormWrapper columns={3}>


      <InputField
        label={t("personal_Details.personal_Details.first_name")}
        type="text"
        {...register("firstName", { required: "First Name is required" })}
        value={watch("firstName")}
        onChange={(e) => setValue("firstName", e.target.value)}
        name="panfirstNameumber"
        asterisk
        error={errors.firstName?.message}
      />

      <InputField
        label={t("personal_Details.personal_Details.middle_name")}
        type="text"
        {...register("middleName", { required: "Middle Name is required" })}
        value={watch("middleName")}
        onChange={(e) => setValue("middleName", e.target.value)}
        name="middleName"
        asterisk
        error={errors.middleName?.message}
      />

      <InputField
        label={t("personal_Details.personal_Details.last_name")}
        type="text"
        {...register("lastName", { required: "Last Name is required" })}
        value={watch("lastName")}
        onChange={(e) => setValue("lastName", e.target.value)}
        name="lastName"
        asterisk
        error={errors.lastName?.message}
      />

      <InputField
        label={t("personal_Details.personal_Details.fathers_name")}
        type="text"
        {...register("fathersName", { required: "Father's Name is required" })}
        value={watch("fathersName")}
        onChange={(e) => setValue("fathersName", e.target.value)}
        name="fathersName"
        asterisk
        error={errors.fathersName?.message}
      />

      <InputField
        label={t("personal_Details.personal_Details.dob")}
        type="date"
        {...register("dob", { required: "Date Of Birth is required" })}
        value={watch("dob")}
        onChange={(e) => setValue("dob", e.target.value)}
        name="dob"
        asterisk
        error={errors.dob?.message}
      />

      <InputField
        label={t("personal_Details.personal_Details.nationality")}
        type="dropdown"
        {...register("nationality", { required: "Nationality is required" })}
        value={watch("nationality")}
        onChange={(e) => setValue("nationality", e.target.value)}
        name="nationality"
        options={nationalityOptions}
        asterisk
        error={errors.nationality?.message}
      />

      <InputField
        label={t("personal_Details.personal_Details.birth_place")}
        type="text"
        {...register("placeOfBirth", { required: "Place Of Birth is required" })}
        value={watch("placeOfBirth")}
        onChange={(e) => setValue("placeOfBirth", e.target.value)}
        name="placeOfBirth"
        asterisk
        error={errors.placeOfBirth?.message}
      />

      <InputField
        label={t("personal_Details.personal_Details.gender")}
        type="dropdown"
        {...register("gender", { required: "Gender is required" })}
        value={watch("gender")}
        onChange={(e) => setValue("gender", e.target.value)}
        name="gender"
        
        options={options}
        asterisk
        error={errors.gender?.message}
      />
      <InputField
        label={t("personal_Details.personal_Details.marital_status")}
        type="dropdown"
        {...register("maritalStatus", { required: "Marital Status is required" })}
        value={watch("maritalStatus")}
        onChange={(e) => setValue("maritalStatus", e.target.value)}
        name="maritalStatus"
        options={maritalStatusOptions}
        asterisk
        error={errors.maritalStatus?.message}
      />
      <InputField
        label={t("personal_Details.personal_Details.alt_mobile")}
        type="text"
        {...register("alternateMobileNumber", { required: "Alternate Mobile Number is required" })}
        value={watch("alternateMobileNumber")}
        onChange={(e) => setValue("alternateMobileNumber", e.target.value)}
        name="alternateMobileNumber"
        asterisk
        error={errors.alternateMobileNumber?.message}
      />
      <InputField
      label={t("personal_Details.personal_Details.blood_group")}
      type="dropdown"
      {...register("bloodGroup", { required: "Blood Group is required" })}
      value={watch("bloodGroup")}
      onChange={(e) => setValue("bloodGroup", e.target.value)}
      name="bloodGroup"
      options={bloodGroupOptions}
      asterisk
      error={errors.bloodGroup?.message}
      />

     <InputField
  label={t("personal_Details.personal_Details.photo")}
  type="upload"
  {...register("photoFile", { required: "Photo is required" })}
  onChange={(e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setValue("photoFile", [file]);
      setPersonalDetailsField("photoFile", file);
      setPersonalDetailsField("photoPreviewUrl", previewUrl); // Save preview URL
    }
  }}
  name="photoFile"
  asterisk
  value={watchedFile?.[0] || ""}
  error={errors.photoFile?.message}
/>
  
    
    </FormWrapper>
  
     <div className="flex justify-end mt-6">
        <button
          onClick={handleSubmit(onSubmit, onError)}
          className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300 text-base border border-[#DADADA]"
        >
          Save
        </button>
      </div>
      </>
  )
}

export default PersonalDeatilsForm