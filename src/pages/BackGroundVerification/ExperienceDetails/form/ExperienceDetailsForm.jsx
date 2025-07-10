import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import FormWrapper from "../../../../beolayer/components/base/Form/FormWrapper";
import InputField from "../../../../beolayer/components/base/InputField/InputField";
import useExperienceStore from "../../../../beolayer/stores/BGV/ExperienceDetails/useExperienceDetailsStore";

const ExperienceDetailsForm = () => {
  const { experienceList, setExperienceList } = useExperienceStore();

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      experiences: experienceList,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  // ✅ Sync form data to store whenever form values change
  const watchedExperiences = watch("experiences");

  useEffect(() => {
    setExperienceList(watchedExperiences);
  }, [watchedExperiences, setExperienceList]);

  const onSubmit = (data) => {
    console.log("Saving Experience Details:", data.experiences);
    setExperienceList(data.experiences);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
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
            <InputField
              label="Relieving / Experience letter"
              type="upload"
              name="relievingLetterFile"
              asterisk
              onChange={(e) => setValue(`experiences.${index}.relievingLetterFile`, e.target.files)}
              {...register(`experiences.${index}.relievingLetterFile`, {
                required: "Relieving letter file is required",
              })}
              error={errors.experiences?.[index]?.relievingLetterFile?.message}
            />

            <InputField
              label="Salary Slip"
              type="upload"
              name="salarySlipFile"
              asterisk
              onChange={(e) => setValue(`experiences.${index}.salarySlipFile`, e.target.files)}
              {...register(`experiences.${index}.salarySlipFile`, {
                required: "Salary Slip is required",
              })}
              error={errors.experiences?.[index]?.salarySlipFile?.message}
            />
          </FormWrapper>

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

          {fields.length > 1 && (
            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 rounded transition-colors duration-300 text-base bg-red-200 hover:bg-red-500 hover:text-white"
                onClick={() => remove(index)}
              >
                Delete -
              </button>
            </div>
          )}

          <hr className="my-10" />
        </div>
      ))}

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
              relievingLetterFile: null,
              salarySlipFile: null,
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
