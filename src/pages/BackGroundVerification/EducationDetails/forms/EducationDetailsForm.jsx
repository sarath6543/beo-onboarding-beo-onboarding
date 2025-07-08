import React, { useState } from 'react'
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField';
import useEducationStore from '../../../../beolayer/stores/BGV/EducationalDetails/useEducationalDetailsStore';
import { useFieldArray, useForm } from 'react-hook-form';


const educationModeOptions = [
    {key:"Online",value:"online"},
    {key:"Offline",value:"offline"},
]

const EducationDetailsForm = () => {

    const { educationList, setEducationList } = useEducationStore();

    const { register ,control , handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues:{
            education : educationList
        },
    });

    const { fields, append, remove } = useFieldArray({
    control,
    name: 'education'
  });

  const onSubmit = (data) => {
    console.log("Saving Education Details:", data.education);
    setExperienceList(data.education);
  };

    const handleSelectChange = (e) => {
    const { value } = e.target;
    append({
            board:"",
            school:"",
            precentage:"",
            fromDate:"",
            toDate:"",
            certificate:"",
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
    <FormWrapper columns={1} onSubmit={handleSubmit(onSubmit)}> 
       {fields.map((field,index)=>{
        const list = field.key === "10th Standard" || field.key === "12th Standard"
        return (
        <>
            <p className='text-xl font-medium'>{field.key}</p>
                <FormWrapper columns={3}>    
                    <InputField
                        label={list ? "board" : "university"}
                        type="text"
                        // value={formData.board}
                        // onChange={(e) => handleInputChange(e, index)}
                        name="board"
                        asterisk
                    />
                    <InputField
                        label={list ? "School" : "College/Institute"}
                        type="text"
                        // value={formData.school}
                        // onChange={(e) => handleInputChange(e, index)}
                        name="school"
                        asterisk
                    />
                    {list ?
                    ( 
                    <>
                        <InputField
                            label="Percentage"
                            type="text"
                            // value={formData.percentage}
                            // onChange={(e) => handleInputChange(e, index)}
                            name="percentage"
                            asterisk
                        />
                        <InputField
                            label="From Date"
                            type="date"
                            // value={formData.fromDate}
                            // onChange={(e) => handleInputChange(e, index)}
                            name="fromDate"
                            asterisk
                        />
                        <InputField
                            label="To Date"
                            type="date"
                            // value={formData.toDate}
                            // onChange={(e) => handleInputChange(e, index)}
                            name="toDate"
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
                            // value={formData.modeOfEducation}
                            // onChange={(e) => handleInputChange(e, index)}
                            name="modeOfEducation"
                            options={educationModeOptions}
                            asterisk
                        />
                        <InputField
                            label="Specialization"
                            type="text"
                            // value={formData.specialization}
                            // onChange={(e) => handleInputChange(e, index)}
                            name="specialization"
                            asterisk
                        />
                        <InputField
                            label="Percentage"
                            type="text"
                            // value={formData.percentage}
                            // onChange={(e) => handleInputChange(e, index)}
                            name="percentage"
                            asterisk
                        /> 
                    </>
                    )}
                    <InputField
                        label="Certificate"
                        type="upload"
                        // value={formData.toDate}
                        // onChange={(e) => handleInputChange(e, index)}
                        name=""
                        asterisk
                    />  
                </FormWrapper>
               
                {fields.length > 1 &&
                    <>
                        <div className="flex justify-end">
                        <button
                            className="px-4 py-2 rounded transition-colors duration-300 text-base bg-red-200 hover:bg-red-500 hover:text-white" 
                            // onClick={()=>handleDeleteForm(index)}
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
                        // checked={}
                        // onChange={}
                        />
                    </label>
                </div>

             <hr />    
        </>
       )})}

            <div className="flex justify-start">     
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
            </div>
    </FormWrapper>
  )
}

export default EducationDetailsForm