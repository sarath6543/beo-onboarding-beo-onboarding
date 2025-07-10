import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper';
import InputField from '../../../../beolayer/components/base/InputField/InputField';
import useEducationStore from '../../../../beolayer/stores/BGV/EducationalDetails/useEducationalDetailsStore';
import { useFieldArray, useForm } from 'react-hook-form';



const EducationDetailsForm = () => {

    const { educationList, setEducationList } = useEducationStore();

    const { register ,control ,getValues, handleSubmit, formState: { errors }, } = useForm({
        defaultValues:{
            education : educationList
        },
    });

    const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });
   
  const onSubmit = (data) => {
    console.log("Saving Education Details:", data.education);
    setEducationList(data.education);
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const educationList = watch("education");

  const handleSelectChange = (e) => {
    const { value } = e.target;
    append({
            board:"",
            school:"",
            precentage:"",
            fromDate:"",
            toDate:"",
            certificate:null,
            specialization:"",
            modeOfEducation:"",
            key:value
            })
    setSelectDrop("")
    };


    const disableDropdown = (value) => {
        return fields.some(item => item.key === value);
    };


    const [selectDrop,setSelectDrop] = useState("")

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper columns={1} > 
           {fields.map((field,index)=>{
            const isSchoolLevel = field.key === "10th Standard" || field.key === "12th Standard"
            return (
                <div key={field.id}>
                    <p className='text-xl font-medium'>{field.key}</p>
                        <FormWrapper columns={3}>    
                            <InputField
                                label={isSchoolLevel ? "Board" : "University"}
                                type="text"
                                {...register(`education.${index}.board`, {
                                    required: `${isSchoolLevel ? "Board":"University"} is required`,
                                })}
                                error={errors.education?.[index]?.board?.message}
                                asterisk
                            />
                            <InputField
                                label={isSchoolLevel ? "School" : "College/Institute"}
                                type="text"
                                {...register(`education.${index}.school`,{
                                    required :`${isSchoolLevel ? "School" : "College/Institute"} is required`
                                })}
                                error={errors?.education?.[index]?.school?.message}
                                asterisk
                            />
                            {isSchoolLevel ?
                            ( 
                            <>
                                <InputField
                                    label="Percentage"
                                    type="text"
                                    {...register(`education.${index}.percentage`,{
                                        required :`Percentage is required`
                                    })}
                                    error={errors?.education?.[index]?.percentage?.message}
                                    asterisk
                                />
                                <InputField
                                    label="From Date"
                                    type="date"
                                    {...register(`education.${index}.fromDate`,{
                                        required :`From date is required`
                                    })}
                                    error={errors?.education?.[index]?.fromDate?.message}
                                    asterisk
                                />
                                <InputField
                                    label="To Date"
                                    type="date"
                                    {...register(`education.${index}.toDate`,{
                                        required :`To date is required`
                                    })}
                                    error={errors?.education?.[index]?.toDate?.message}
                                    asterisk
                                /> 
                            </>
                            )
                        :
                            (
                            <>
                                <InputField
                                    label="Mode of Education"
                                    type="dropdown"
                                    {...register(`education.${index}.modeOfEducation`,{
                                        required :`Mode of Education is required`
                                    })}
                                    error={errors?.education?.[index]?.modeOfEducation?.message}
                                    options={educationModeOptions}
                                    asterisk
                                />
                                <InputField
                                    label="Specialization"
                                    type="text"
                                    {...register(`education.${index}.specialization`,{
                                        required :`Specialization is required`
                                    })}
                                    error={errors?.education?.[index]?.specialization?.message}
                                    asterisk
                                />
                                <InputField
                                    label="Percentage"
                                    type="text"
                                    {...register(`education.${index}.precentage`,{
                                        required :`Specialization is required`
                                    })}
                                    error={errors?.education?.[index]?.precentage?.message}
                                    asterisk
                                /> 
                            </>
                            )}
                            <InputField
                                label="Certificate"
                                type="upload"
                                {...register(`education.${index}.precentage`,{
                                        required :`Specialization is required`
                                    })}
                                error={errors?.education?.[index]?.precentage?.message}
                                asterisk
                            />  
                        </FormWrapper>
                       
                        {fields.length > 1 &&
                            <>
                                <div className="flex justify-end">
                                <button
                                    className="px-4 py-2 rounded transition-colors duration-300 text-base bg-red-200 hover:bg-red-500 hover:text-white" 
                                    onClick={() => remove(index)}
                                >Delete -</button>
                                </div>
                            </>  
                        }
        
                        <div className="my-4 me-6 flex justify-end">
                            <label className="flex items-center space-x-2">
                                <span className="text-sm">Click if This is your highest education qualification</span>
                                <input
                                    className="w-4 h-5"
                                    type="checkbox"
                                />
                            </label>
                        </div>
                     <hr /> 
                </div>   
        
           )})}
    
                <div className="flex justify-between">     
                <select 
                    onChange={handleSelectChange}
                    value={selectDrop}
                    className="mt-1 block px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="" disabled hidden>Add Education</option>
                    <option hidden={disableDropdown("10th Standard")} value="10th Standard">10th standard</option>
                    <option hidden={disableDropdown("12th Standard")} value="12th Standard">12th standard</option>
                    <option value="Diploma">Diploma</option>
                    <option value="UG">UG</option>
                    <option value="PG">PG</option>
                    <option value="Others">Others</option>
                </select>

                <button
                    type="submit"
                    className="bg-[#DADADA] text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300 text-base"
                    >
                    Save
                </button>
                </div>
        </FormWrapper>
    </form>
  )
}

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








































// import React, { useState } from 'react'
// import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
// import InputField from '../../../../beolayer/components/base/InputField/InputField';

// const educationModeOptions = [
//     {key:"Online",value:"online"},
//     {key:"Offline",value:"offline"},
// ]


// const EducationDetailsForm = () => {

//     const [formDataList,setFormDataList] = useState([
//         {
//         board:"",
//         school:"",
//         percentage:"",
//         fromDate:"",
//         toDate:"",
//         specialization:'',
//         modeOfEducation:"",
//         key:"10th"
//         },
//     ]);

//     const handleSelectChange = (e) => {
//     const { value } = e.target;
//     setFormDataList((prev) => [
//         ...prev,
//         {
//         board: "",
//         school: "",
//         percentage: "",
//         fromDate: "",
//         toDate: "",
//         specialization:'',
//         key: value
//         }
//     ]);
//     };

//     const handleInputChange = (e, index) => {
//     const { name, value } = e.target;
//     setFormDataList((prev) => {
//         const updated = [...prev];
//         updated[index][name] = value;
//         return updated;
//     });
//     };

//     const handleDeleteForm =(removeForm) =>{
//       setFormDataList((prev)=> prev.filter((_,index)=> index !==removeForm))
//     }

//     const disableDropdown = (value) => {
//         return formDataList.some(item => item.key === value);
//     };

//     const handleSave = () => {
//         console.log("Saving educational details:", formDataList);
//     };


//   return (
//     <FormWrapper columns={1} onSave={handleSave}> 
//        {formDataList.map((formData,index)=>{
//         const list = formData.key === "10th" || formData.key === "12th"
//         return (
//         <>
//             <p className='text-xl font-medium'>{formData.key}</p>
//                 <FormWrapper columns={3}>    
//                     <InputField
//                         label={list ? "board" : "university"}
//                         type="text"
//                         value={formData.board}
//                         onChange={(e) => handleInputChange(e, index)}
//                         name="board"
//                         asterisk
//                     />
//                     <InputField
//                         label={list ? "School" : "College/Institute"}
//                         type="text"
//                         value={formData.school}
//                         onChange={(e) => handleInputChange(e, index)}
//                         name="school"
//                         asterisk
//                     />
//                     {list ?
//                     ( 
//                     <>
//                         <InputField
//                             label="Percentage"
//                             type="text"
//                             value={formData.percentage}
//                             onChange={(e) => handleInputChange(e, index)}
//                             name="percentage"
//                             asterisk
//                         />
//                         <InputField
//                             label="From Date"
//                             type="date"
//                             value={formData.fromDate}
//                             onChange={(e) => handleInputChange(e, index)}
//                             name="fromDate"
//                             asterisk
//                         />
//                         <InputField
//                             label="To Date"
//                             type="date"
//                             value={formData.toDate}
//                             onChange={(e) => handleInputChange(e, index)}
//                             name="toDate"
//                             asterisk
//                         /> 
//                     </>
//                     )
//                 :
//                     (
//                     <>
//                         <InputField
//                             label="Mode of Education"
//                             type="dropdown"
//                             value={formData.modeOfEducation}
//                             onChange={(e) => handleInputChange(e, index)}
//                             name="modeOfEducation"
//                             options={educationModeOptions}
//                             asterisk
//                         />
//                         <InputField
//                             label="Specialization"
//                             type="text"
//                             value={formData.specialization}
//                             onChange={(e) => handleInputChange(e, index)}
//                             name="specialization"
//                             asterisk
//                         />
//                         <InputField
//                             label="Percentage"
//                             type="text"
//                             value={formData.percentage}
//                             onChange={(e) => handleInputChange(e, index)}
//                             name="percentage"
//                             asterisk
//                         /> 
//                     </>
//                     )}
//                     <InputField
//                         label="Certificate"
//                         type="upload"
//                         value={formData.toDate}
//                         onChange={(e) => handleInputChange(e, index)}
//                         name=""
//                         asterisk
//                     />  
//                 </FormWrapper>
               
//                 {formDataList.length > 1 &&
//                     <>
//                         <div className="flex justify-end">
//                         <button
//                             className="px-4 py-2 rounded transition-colors duration-300 text-base bg-red-200 hover:bg-red-500 hover:text-white" 
//                             onClick={()=>handleDeleteForm(index)}
//                         >Delete -</button>
//                         </div>
//                     </>  
//                 }

//                 <div className="my-4 me-6 flex justify-end">
//                     <label className="flex items-center space-x-2">
//                         <span className="text-sm">Click if This is your highest education qualification</span>
//                         <input
//                         className="w-4 h-5"
//                         type="checkbox"
//                         // checked={}
//                         // onChange={}
//                         />
//                     </label>
//                 </div>

//              <hr />    
//         </>
//        )})}

//             <div className="flex justify-start">     
//             <select 
//                 onChange={handleSelectChange}
//                 defaultValue=""
//                 className="mt-1 block px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             >
//                 <option value="" disabled hidden>Add Education</option>
//                 <option disabled={disableDropdown("12th")} value="12th">12th standard</option>
//                 <option disabled={disableDropdown("Diploma")} value="Diploma">Diploma</option>
//                 <option disabled={disableDropdown("UG")} value="UG">UG</option>
//                 <option disabled={disableDropdown("PG")} value="PG">PG</option>
//                 <option disabled={disableDropdown("Others")} value="Others">Others</option>
//             </select>
//             </div>
//     </FormWrapper>
//   )
// }

// export default EducationDetailsForm