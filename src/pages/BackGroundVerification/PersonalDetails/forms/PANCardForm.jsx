import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormWrapper from "../../../../beolayer/components/base/Form/FormWrapper";
import InputField from "../../../../beolayer/components/base/InputField/InputField";
import usePanCardStore from "../../../../beolayer/stores/BGV/PersonalDetails/usePanCardStore";
import Toast from '../../../../beolayer/components/base/Toast/Toast';
import { toast } from 'react-toastify';


export default function PANCardForm() {
  const {
    panNumber,
    panName,
    panFile,
    setPanField,
    resetPanForm,
  } = usePanCardStore();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      panNumber: panNumber,
      panName: panName,
      panFile: panFile ? [panFile] : null,
    },
  });

  // Sync RHF form values to Zustand store when changed
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "panFile" && value.panFile?.[0]) {
        setPanField("panFile", value.panFile[0]);
      } else if (name && value[name] !== undefined) {
        setPanField(name, value[name]);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setPanField]);

  const onSubmit = (data) => {
    const file = data.panFile?.[0] || null;
    toast.success("Form submitted successfully!");
    console.log("Saving PAN card details:", {
      panNumber: data.panNumber,
      panName: data.panName,
      panFile: file,
    });
    // resetPanForm();
    // reset(); // optional
  
  };

  const onError = (errors) => {
   const firstError = Object.values(errors)[0];
   toast.error(firstError.message);
  };

  const watchedFile = watch("panFile");


  return (
    <>


    <Toast />
      <FormWrapper columns={3} onSave={handleSubmit(onSubmit, onError)}>
        <InputField
          label="PAN Number"
          type="text"
          {...register("panNumber", { required: "PAN Number is required" })}
          value={watch("panNumber")}
          onChange={(e) => setValue("panNumber", e.target.value)}
          name="panNumber"
          asterisk
          error={errors.panNumber?.message}
        />
  
        <InputField
          label="Name on PAN"
          type="text"
          {...register("panName", { required: "Name on PAN is required" })}
          value={watch("panName")}
          onChange={(e) => setValue("panName", e.target.value)}
          name="panName"
          asterisk
          error={errors.panName?.message}
        />
  
        <InputField
          label="Upload PAN"
          type="upload"
          {...register("panFile", { required: "PAN file is required" })}
          onChange={(e) => {
            const file = e.target.files[0];
            if(file){
              const previewUrl = URL.createObjectURL(file);
              setValue("panFile",[file]);
              setPanField("panFile",file)
              setPanField("panFilePreviewUrl",previewUrl)
            }
          }}
          name="panFile"
          asterisk
          value={watchedFile?.[0] || ""}
          error={errors.panFile?.message}
        />
      </FormWrapper>
    </>
  );
}
