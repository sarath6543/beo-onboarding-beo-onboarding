import React, { useEffect, useState } from 'react';
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper';
import InputField from '../../../../beolayer/components/base/InputField/InputField';
import useEducationStore from '../../../../beolayer/stores/BGV/EducationalDetails/useEducationalDetailsStore';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import Toast from '../../../../beolayer/components/base/Toast/Toast';
import Popup from '../../../../beolayer/components/base/pop-up/Popup';
 
 
 
const educationModeOptions = [
  { key: "Online", value: "online" },
  { key: "Offline", value: "offline" },
];
 
const EducationDetailsForm = () => {

  const [gapInMonths,setGapInMonths] = useState(null) 
  const [dropdownHidden, setDropdownHidden] = useState("")
  const [isOpen,setIsOpen] = useState(false)

  const {educationList, setEducationList, updateEducation} = useEducationStore()

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

  useEffect(()=>{
    const subscription = watch((value)=>{
      if(value.education){
        setEducationList(value.education)
      }
    });
    return ()=> subscription.unsubscribe();
  },[watch,setEducationList]);
 
  // const watchedEducation = watch("education");

  // useEffect(()=>{
  //   setEducationList(watchedEducation);
  // },[watchedEducation,setEducationList]);
 
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
      certificate:null,
      certificateFilePreviewUrl:"",
      key: value,
    });
    setDropdownHidden("")
  };
 
  const disableDropdown = (value) =>
    educationList.some((item) => item.key === value);
 
  const onSubmit = (data) => {

    const education = [...data.education];
    // console.log(education,"saveed");

    for (let i = 0; i < education.length; i++){
      if(education[i].key === '10th'){
        var end_10th = new Date(education[i].toDate);
      }else if(education[i].key === '12th'){
        var start_12th = new Date(education[i].fromDate);
      }
    }
    const gapInMonths =
        (start_12th.getFullYear() - end_10th.getFullYear()) * 12 +
        (start_12th.getMonth() - end_10th.getMonth());
      
    if (gapInMonths < 6) {
        setGapInMonths(gapInMonths)
        setIsOpen(true)
        // console.log(
        //   `Gap of ${gapInMonths} months found between 10th & 12th`
        // );
      }
    

    console.log("Submitted Education Details:", data.education);
    setEducationList(data.education)
  };

    const onError = (errors) => {
      console.log("Validation errors:", errors);
      const firstError = Object.values(errors)[0];
      toast.error(firstError?.message || "Please check the form and try again.");
    };
 
  return (
    <>
      <Popup type={"validation"} children={`Gap of ${gapInMonths} months found between 10th & 12th`} show={isOpen} onClose={() => setIsOpen(false)}/>
      <Toast />

      <FormWrapper columns={1}>
        {fields.map((field, index) => {
          const watchedCertificateFile = watch(`education.${index}.certificate`);
          const isSchool = field.key === "10th" || field.key === "12th";
          const isOther = field.key === "Others"
   
          return (
            
            <div key={field.id}>
              <p className="text-xl font-medium">{field.key}</p>
   
              <FormWrapper columns={3}>
                <InputField
                  label={isSchool ? "Board" : "University"}
                  type="text"
                  {...register(`education.${index}.board`, { required: !isOther ? "required" : false})}
                   error={errors?.education?.[index]?.board?.message}
                  asterisk={!isOther}
                />
                <InputField
                  label={isSchool ? "School" : "College/Institute"}
                  type="text"
                  {...register(`education.${index}.school`, { required: !isOther ? true : false })}
                  error={errors?.education?.[index]?.school && "Required"}
                  asterisk={!isOther}
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
                      // {...register(`education.${index}.toDate`, { 
                      //   required: "Required",
                      //   validate: (toDate) => {
                      //     const fromDate = getValues(`education.${index}.fromDate`);
                      //     if(!fromDate || !toDate)
                      //       return true;
                      //     const from = new Date(fromDate);
                      //     const to = new Date(toDate); 
                      //     const diff = (to - from) / (1000 * 60 * 60* 24)
                      //     return diff >= 180 || "Duration must be at least 6 months";
                      //   }
                      //  })}
                      // error={errors?.education?.[index]?.toDate?.message}
                      asterisk
                    />
                  </>
                ) : (
                  <>
                    <InputField
                      label="Mode of Education"
                      type="dropdown"
                      options={educationModeOptions}
                      {...register(`education.${index}.modeOfEducation`, { required:!isOther ?  true : false})}
                      value={watch(`education.${index}.modeOfEducation`)}
                      onChange={(e) => setValue(`education.${index}.modeOfEducation`, e.target.value)}
                      error={errors?.education?.[index]?.modeOfEducation && "Required"}
                      asterisk={!isOther}
                    />
                    <InputField
                      label="Specialization"
                      type="text"
                      {...register(`education.${index}.specialization`, { required: !isOther ?  true : false })}
                      error={errors?.education?.[index]?.specialization && "Required"}
                      asterisk={!isOther}
                    />
                    <InputField
                      label="Percentage"
                      type="text"
                      {...register(`education.${index}.percentage`, { required: !isOther ? true : false })}
                      error={errors?.education?.[index]?.percentage && "Required"}
                      asterisk={!isOther}
                    />
                  </>
                )}
   
                <InputField
                  label="Certificate"
                  type="upload"
                   {...register(`education.${index}.certificate`,{ required: !isOther ? "Certificate is required" : false})}
                      onChange={(e) => {
                      const file = e.target.files[0];
                      if(file){
                          const previewUrl = URL.createObjectURL(file);
                          setValue(`education.${index}.certificate`, file);
                          setValue(`education.${index}.certificateFilePreviewUrl`, previewUrl);
                          updateEducation(index, "certificate",file);
                          updateEducation(index, "certificateFilePreviewUrl",previewUrl);
                      }
                    }}
                  name={`education.${index}.certificate`}
                  value={watchedCertificateFile || ""}
                  error={errors.education?.[index]?.certificate?.message} 
                  placeholder={watchedCertificateFile?.name || "Choose relieving letter"}
                  asterisk={!isOther}
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
   
  <div className="flex justify-between items-center w-full">
    <div>
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
  
    <div>
      <button
        onClick={handleSubmit(onSubmit, onError)}
        className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300 text-base border border-[#DADADA]"
      >
        Save
      </button>
    </div>
  </div>
  
      </FormWrapper>
    </>
  );
};
 
export default EducationDetailsForm;
 
