import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField';
import useAadharDetailsStore from '../../../../beolayer/stores/BGV/PersonalDetails/useAadharDetailsStore';

const AadhaarForm = () => {

    const { aadharNumber, aadharName, aadharFile, setAadharField } = useAadharDetailsStore();
    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm({
       defaultValues: {
    aadharNumber: aadharNumber,
    aadharName: aadharName,
    aadharFile: aadharFile ? [aadharFile] : null,
}
    });

 useEffect(() => {
    const subscription = watch((value, { name }) => {
        console.log("Watch triggered:", name, value);
        if (name === "aadharFile" && value.aadharFile?.[0]) {
            setAadharField("aadharFile", value.aadharFile[0]);
        } else if (name && value[name] !== undefined) {
            setAadharField(name, value[name]);
        }
    });
    return () => subscription.unsubscribe();
}, [watch, setAadharField]);


    const onSubmit = (data) => {
        const file = data.aadharFile?.[0] || null;
        console.log("Saving Aadhar card details:", {
            aadhaarNumber: data.aadhaarNumber,
            aadhaarName: data.aadhaarName,
            aadhaarFile: file,
        });
        // resetAadharForm();
        // reset(); // optional
    };
 const watchedFile = watch("aadhaarFile");
    return (
        <FormWrapper columns={3} onSave={handleSubmit(onSubmit)}>

           <InputField
  label="Aadhaar Card Number"
  type="text"
  {...register("aadharNumber", { required: "Aadhar Number is required" })}
  value={watch("aadharNumber")}
  name="aadharNumber"
  onChange={(e) => setValue("aadharNumber", e.target.value)}
  asterisk
  error={errors.aadharNumber?.message}
/>

<InputField
  label="Aadhaar Card Name"
  type="text"
  {...register("aadharName", { required: "Aadhar Name is required" })}
  value={watch("aadharName")}
  name="aadharName"
  onChange={(e) => setValue("aadharName", e.target.value)}
  asterisk
  error={errors.aadharName?.message}
/>

<InputField
  label="Upload Aadhar"
  type="upload"
  {...register("aadharFile", { required: "Aadhar file is required" })}
  onChange={(e) => setValue("aadharFile", e.target.files)}
  name="aadharFile"
  asterisk
  value={watch("aadharFile")?.[0] || ""}
  error={errors.aadharFile?.message}
/>

        </FormWrapper>
    )
}

export default AadhaarForm