import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import FormWrapper from "../../../../beolayer/components/base/Form/FormWrapper";
import InputField from "../../../../beolayer/components/base/InputField/InputField";
import useExperienceStore from "../../../../beolayer/stores/BGV/ExperienceDetails/useExperienceDetailsStore";

const ExperienceDetailsForm = () => {
  const {
    experienceList,
    setExperienceList,
    updateExperienceField,
  } = useExperienceStore();

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      experiences: experienceList.length > 0 ? experienceList : [
        {
          companyName: "",
          employeeId: "",
          designation: "",
          location: "",
          modeOfEmployement: "",
          startDate: "",
          lastWorkingDate: "",
          salaryFile: null,
          salaryPreviewUrl: "",
          relievingFile: null,
          relievingPreviewUrl: "",
          isCurrentOrg: false,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  // Sync form changes with Zustand store
  useEffect(() => {
    const subscription = watch((value) => {
      if (value.experiences) {
        setExperienceList(value.experiences);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setExperienceList]);

  const onSubmit = (data) => {
    console.log("Saved experience list:", data.experiences);
    setExperienceList(data.experiences);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => {
        const watchedSalaryFile = watch(`experiences.${index}.salaryFile`);
        const watchedRelievingFile = watch(`experiences.${index}.relievingFile`);

        return (
          <div key={field.id} className="mb-8">
            <FormWrapper columns={3}>
              <InputField
                label="Company Name"
                type="text"
                asterisk
                {...register(`experiences.${index}.companyName`, {
                  required: "Company Name is required",
                })}
                error={errors.experiences?.[index]?.companyName?.message}
              />
              <InputField
                label="Employee Id"
                type="text"
                asterisk
                {...register(`experiences.${index}.employeeId`, {
                  required: "Employee Id is required",
                })}
                error={errors.experiences?.[index]?.employeeId?.message}
              />
              <InputField
                label="Designation"
                type="text"
                asterisk
                {...register(`experiences.${index}.designation`, {
                  required: "Designation is required",
                })}
                error={errors.experiences?.[index]?.designation?.message}
              />
              <InputField
                label="Location"
                type="text"
                asterisk
                {...register(`experiences.${index}.location`, {
                  required: "Location is required",
                })}
                error={errors.experiences?.[index]?.location?.message}
              />
              <InputField
                label="Mode of Employment"
                type="text"
                asterisk
                {...register(`experiences.${index}.modeOfEmployement`, {
                  required: "Mode of Employment is required",
                })}
                error={errors.experiences?.[index]?.modeOfEmployement?.message}
              />
              <InputField
                label="From Date"
                type="date"
                asterisk
                {...register(`experiences.${index}.startDate`, {
                  required: "From Date is required",
                })}
                error={errors.experiences?.[index]?.startDate?.message}
              />
              <InputField
                label="To Date"
                type="date"
                asterisk
                {...register(`experiences.${index}.lastWorkingDate`, {
                  required: "To Date is required",
                })}
                error={errors.experiences?.[index]?.lastWorkingDate?.message}
              />

              {/* Salary Slip Upload */}
              <InputField
                label="Salary Slip"
                type="upload"
                {...register(`experiences.${index}.salaryFile`, {
                  required: "Salary Slip is required",
                })}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const previewUrl = URL.createObjectURL(file);
                    setValue(`experiences.${index}.salaryFile`, file);
                    setValue(`experiences.${index}.salaryPreviewUrl`, previewUrl);
                    updateExperienceField(index, "salaryFile", file);
                    updateExperienceField(index, "salaryPreviewUrl", previewUrl);
                  }
                }}
                name={`experiences.${index}.salaryFile`}
                asterisk
                value={watchedSalaryFile || ""}
                placeholder={watchedSalaryFile?.name || "Choose salary file"}
                error={errors.experiences?.[index]?.salaryFile?.message}
              />

              {/* Relieving Letter Upload */}
              <InputField
                label="Relieving Letter"
                type="upload"
                {...register(`experiences.${index}.relievingFile`, {
                  required: "Relieving Letter is required",
                })}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const previewUrl = URL.createObjectURL(file);
                    setValue(`experiences.${index}.relievingFile`, file);
                    setValue(`experiences.${index}.relievingPreviewUrl`, previewUrl);
                    updateExperienceField(index, "relievingFile", file);
                    updateExperienceField(index, "relievingPreviewUrl", previewUrl);
                  }
                }}
                name={`experiences.${index}.relievingFile`}
                asterisk
                value={watchedRelievingFile || ""}
                placeholder={watchedRelievingFile?.name || "Choose relieving letter"}
                error={errors.experiences?.[index]?.relievingFile?.message}
              />
            </FormWrapper>

            {/* Current Org Checkbox */}
            <div className="my-4 me-6 flex justify-end">
              <label className="flex items-center space-x-2">
                <span className="text-sm">Current Organization</span>
                <input
                  className="w-4 h-5"
                  type="checkbox"
                  {...register(`experiences.${index}.isCurrentOrg`)}
                />
              </label>
            </div>

            {/* Delete Button */}
            {fields.length > 1 && (
              <div className="flex justify-end mb-8">
                <button
                  type="button"
                  className="px-4 py-2 rounded transition-colors duration-300 text-base bg-red-200 hover:bg-red-500 hover:text-white"
                  onClick={() => remove(index)}
                >
                  Delete -
                </button>
              </div>
            )}

            <hr className="my-6" />
          </div>
        );
      })}

      {/* Add / Save Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          className="bg-[#DADADA] text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300 text-base"
          onClick={() =>
            append({
              companyName: "",
              employeeId: "",
              designation: "",
              location: "",
              modeOfEmployement: "",
              startDate: "",
              lastWorkingDate: "",
              salaryFile: null,
              salaryPreviewUrl: "",
              relievingFile: null,
              relievingPreviewUrl: "",
              isCurrentOrg: false,
            })
          }
        >
          ADD +
        </button>
        <button
          type="submit"
          className="bg-[#DADADA] text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300 text-base"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ExperienceDetailsForm;
