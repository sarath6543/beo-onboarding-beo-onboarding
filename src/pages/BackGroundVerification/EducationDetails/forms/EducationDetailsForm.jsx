import React from 'react';
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper';
import InputField from '../../../../beolayer/components/base/InputField/InputField';
import useEducationStore from '../../../../beolayer/stores/BGV/EducationalDetails/useEducationalDetailsStore';
import { useFieldArray, useForm } from 'react-hook-form';
 
 
 
const educationModeOptions = [
  { key: "Online", value: "online" },
  { key: "Offline", value: "offline" },
];
 
const EducationDetailsForm = () => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      education: [
        {
          board: "",
          school: "",
          percentage: "",
          fromDate: "",
          toDate: "",
          specialization: "",
          modeOfEducation: "",
          key: "10th",
        },
      ],
    },
  });
 
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });
 
  const educationList = watch("education");
 
  const handleSelectChange = (e) => {
    const { value } = e.target;
    append({
      board: "",
      school: "",
      percentage: "",
      fromDate: "",
      toDate: "",
      specialization: "",
      modeOfEducation: "",
      key: value,
    });
  };
 
  const disableDropdown = (value) =>
    educationList.some((item) => item.key === value);
 
  const onSubmit = (data) => {
    console.log("Submitted Education Details:", data.education);
  };
 
  return (
    <FormWrapper columns={1} onSave={handleSubmit(onSubmit)}>
      {fields.map((field, index) => {
        const isSchool = field.key === "10th" || field.key === "12th";
 
        return (
          <div key={field.id}>
            <p className="text-xl font-medium">{field.key}</p>
 
            <FormWrapper columns={3}>
              <InputField
                label={isSchool ? "Board" : "University"}
                type="text"
                {...register(`education.${index}.board`, { required: true })}
                error={errors?.education?.[index]?.board && "Required"}
              />
              <InputField
                label={isSchool ? "School" : "College/Institute"}
                type="text"
                {...register(`education.${index}.school`, { required: true })}
                error={errors?.education?.[index]?.school && "Required"}
              />
 
              {isSchool ? (
                <>
                  <InputField
                    label="Percentage"
                    type="text"
                    {...register(`education.${index}.percentage`, { required: true })}
                    error={errors?.education?.[index]?.percentage && "Required"}
                  />
                  <InputField
                    label="From Date"
                    type="date"
                    {...register(`education.${index}.fromDate`, { required: true })}
                    error={errors?.education?.[index]?.fromDate && "Required"}
                  />
                  <InputField
                    label="To Date"
                    type="date"
                    {...register(`education.${index}.toDate`, { required: true })}
                    error={errors?.education?.[index]?.toDate && "Required"}
                  />
                </>
              ) : (
                <>
                  <InputField
                    label="Mode of Education"
                    type="dropdown"
                    options={educationModeOptions}
                    {...register(`education.${index}.modeOfEducation`, { required: true })}
                    error={errors?.education?.[index]?.modeOfEducation && "Required"}
                  />
                  <InputField
                    label="Specialization"
                    type="text"
                    {...register(`education.${index}.specialization`, { required: true })}
                    error={errors?.education?.[index]?.specialization && "Required"}
                  />
                  <InputField
                    label="Percentage"
                    type="text"
                    {...register(`education.${index}.percentage`, { required: true })}
                    error={errors?.education?.[index]?.percentage && "Required"}
                  />
                </>
              )}
 
              <InputField
                label="Certificate"
                type="upload"
                name={`education.${index}.certificate`}
                onChange={(e) => setValue(`education.${index}.certificate`, e.target.files[0])}
                asterisk
              />
            </FormWrapper>
 
            {fields.length > 1 && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 mt-2 bg-[#DADADA] hover:bg-[#000000] hover:text-white rounded"
                  onClick={() => remove(index)}
                >
                  Delete
                </button>
              </div>
            )}
 
            <div className="my-4 me-6 flex justify-end">
              <label className="flex items-center space-x-2">
                <span className="text-sm">Click if This is your highest education qualification</span>
                <input
                  className="w-4 h-5"
                  type="checkbox"
                  {...register(`education.${index}.isHighest`)}
                />
              </label>
            </div>
 
            <hr />
          </div>
        );
      })}
 
      <div className="flex justify-start">
        <select
          onChange={handleSelectChange}
          defaultValue=""
          className="mt-1 block px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled hidden>Add Education</option>
          <option disabled={disableDropdown("12th")} value="12th">12th standard</option>
          <option disabled={disableDropdown("Diploma")} value="Diploma">Diploma</option>
          <option disabled={disableDropdown("UG")} value="UG">UG</option>
          <option disabled={disableDropdown("PG")} value="PG">PG</option>
          <option disabled={disableDropdown("Others")} value="Others">Others</option>
        </select>
      </div>
    </FormWrapper>
  );
};
 
export default EducationDetailsForm;
 