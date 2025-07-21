import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormWrapper from "../../../../beolayer/components/base/Form/FormWrapper";
import InputField from "../../../../beolayer/components/base/InputField/InputField";
import usePanCardStore from "../../../../beolayer/stores/BGV/PersonalDetails/usePanCardStore";
import Toast from "../../../../beolayer/components/base/Toast/Toast";
import { toast } from "react-toastify";

export default function PANCardForm() {
  const {
    panNumber,
    panName,
    panFile,
    panFilePreviewUrl,
    setPanField,
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
      panNumber: panNumber || "",
      panName: panName || "",
      panFile: panFile ? [panFile] : null,
      panFilePreviewUrl: panFilePreviewUrl
    },
  });

  // Sync Zustand changes into react-hook-form when store values update
  useEffect(() => {
    reset({
      panNumber: panNumber || "",
      panName: panName || "",
      panFile: panFile ? [panFile] : null,
    });
  }, [panNumber, panName, panFile, reset]);

  // Sync react-hook-form values back into Zustand
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

    // Optional: clear form
    // resetPanForm();
    // reset();
  };

  const onError = (errors) => {
    const firstError = Object.values(errors)[0];
    toast.error(firstError?.message || "Please check the form and try again.");
  };

  const watchedFile = watch("panFile");

  return (
    <>
      <Toast />

      <FormWrapper columns={3}>
        {/* PAN Number */}
        <InputField
          label="PAN Number"
          type="text"
          {...register("panNumber", {
            required: "PAN Number is required",
            pattern: {
              value: /^[A-Z]{5}[0-9]{4}[A-Z]$/,
              message: "PAN must be 10 characters (e.g., AAAAA1234A)",
            },
          })}
          value={watch("panNumber")}
          onChange={(e) => setValue("panNumber", e.target.value.toUpperCase())}
          name="panNumber"
          asterisk
          error={errors.panNumber?.message}
        />

        {/* Name on PAN */}
        <InputField
          label="Name on PAN"
          type="text"
          {...register("panName", {
            required: "Name on PAN is required",
          })}
          value={watch("panName")}
          onChange={(e) => setValue("panName", e.target.value)}
          name="panName"
          asterisk
          error={errors.panName?.message}
        />

        {/* Upload PAN */}
        <InputField
          label="Upload PAN"
          type="upload"
          {...register("panFile", {
            required: "PAN file is required",
          })}
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const previewUrl = URL.createObjectURL(file);
              setValue("panFile", [file]);
              setValue("panFilePreviewUrl",previewUrl)
              setPanField("panFile", file);
              setPanField("panFilePreviewUrl", previewUrl);
            }
          }}
          name="panFile"
          asterisk
          value={watchedFile?.[0] || ""}
          error={errors.panFile?.message}
        />
      </FormWrapper>

      {/* Save Button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleSubmit(onSubmit, onError)}
          className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300 text-base border border-[#DADADA]"
        >
          Save
        </button>
      </div>
    </>
  );
}
