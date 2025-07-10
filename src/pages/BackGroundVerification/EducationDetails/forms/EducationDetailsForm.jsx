import React, { useEffect, useState } from 'react';
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper';
import InputField from '../../../../beolayer/components/base/InputField/InputField';
import useEducationStore from '../../../../beolayer/stores/BGV/EducationalDetails/useEducationalDetailsStore';
import { useFieldArray, useForm } from 'react-hook-form';
 
 
 
const educationModeOptions = [
  { key: "Online", value: "online" },
  { key: "Offline", value: "offline" },
];
 
const EducationDetailsForm = () => {

  const [dropdownHidden, setDropdownHidden] = useState("")

  const {educationList, setEducationList} = useEducationStore()

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
      education: educationList
    },
  });
 
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });
 
  const watchedEducation = watch("education");

  useEffect(()=>{
    setEducationList(watchedEducation);
  },[watchedEducation,setEducationList]);
 
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
    setDropdownHidden("")
  };
 
  const disableDropdown = (value) =>
    educationList.some((item) => item.key === value);
 
  const onSubmit = (data) => {
    console.log("Submitted Education Details:", data.education);
    setEducationList(data.education)
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
                asterisk
              />
              <InputField
                label={isSchool ? "School" : "College/Institute"}
                type="text"
                {...register(`education.${index}.school`, { required: true })}
                error={errors?.education?.[index]?.school && "Required"}
                asterisk
              />
 
              {isSchool ? (
                <>
                  <InputField
                    label="Percentage"
                    type="text"
                    {...register(`education.${index}.percentage`, { required: true })}
                    error={errors?.education?.[index]?.percentage && "Required"}
                    asterisk
                  />
                  <InputField
                    label="From Date"
                    type="date"
                    {...register(`education.${index}.fromDate`, { required: true })}
                    error={errors?.education?.[index]?.fromDate && "Required"}
                    asterisk
                  />
                  <InputField
                    label="To Date"
                    type="date"
                    {...register(`education.${index}.toDate`, { required: true })}
                    error={errors?.education?.[index]?.toDate && "Required"}
                    asterisk
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
                    asterisk
                  />
                  <InputField
                    label="Specialization"
                    type="text"
                    {...register(`education.${index}.specialization`, { required: true })}
                    error={errors?.education?.[index]?.specialization && "Required"}
                    asterisk
                  />
                  <InputField
                    label="Percentage"
                    type="text"
                    {...register(`education.${index}.percentage`, { required: true })}
                    error={errors?.education?.[index]?.percentage && "Required"}
                    asterisk
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
 
            {fields.length > 1 &&  field.key !== "10th"  && (
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
          value={dropdownHidden}
          className="mt-1 block px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled hidden>Add Education</option>
          <option hidden={disableDropdown("12th")} value="12th">12th standard</option>
          <option hidden={disableDropdown("10th")} value="10th">10th standard</option>
          <option value="Diploma">Diploma</option>
          <option value="UG">UG</option>
          <option value="PG">PG</option>
          <option value="Others">Others</option>
        </select>
      </div>
    </FormWrapper>
  );
};
 
export default EducationDetailsForm;
 
