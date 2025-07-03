import React, { useState } from 'react'
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField';


const ExperienceDetailsForm = () => {

    const [formDataList, setFormDataList] = useState([
    {
        companyName: "",
        employeeId: "",
        designation: "",
        location: "",
        modeOfEmployement: "",
        startDate: "",
        lastWorkingDate: "",
    },
    ]);

    const handleAddForm = () => {
        setFormDataList((prev) => [
            ...prev,
            {
            companyName: "",
            employeeId: "",
            designation: "",
            location: "",
            modeOfEmployement: "",
            startDate: "",
            lastWorkingDate: "",
            },
        ]);
    };

    const handleDeleteForm =(removeForm) =>{
      setFormDataList((prev)=> prev.filter((_,index)=> index !==removeForm))
    }

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({ ...prev, [name]: value }));
    // };

    const handleChange = (index, e) => {
      const { name, value } = e.target;
      setFormDataList((prevList) =>
        prevList.map((item, i) =>
          i === index ? { ...item, [name]: value } : item
        )
      );
    };

    const handleSave = () => {
        console.log("Saving Experiance details:", formData);
    };

  return (
    <>
{formDataList.map((formData, index) => (
  <>
    <FormWrapper key={index} columns={3} >
      <InputField
        label="Company Name"
        type="text"
        value={formData.companyName}
        onChange={(e) => handleChange(index, e)}
        name="companyName"
      />
      <InputField
        label="Employee ID"
        type="text"
        value={formData.employeeId}
        onChange={(e) => handleChange(index, e)}
        name="employeeId"
      />
      <InputField
        label="Designation"
        type="text"
        value={formData.designation}
        onChange={(e) => handleChange(index, e)}
        name="designation"
      />
      <InputField
        label="Location"
        type="text"
        value={formData.location}
        onChange={(e) => handleChange(index, e)}
        name="location"
      />
      <InputField
        label="Mode of Employement"
        type="text"
        value={formData.modeOfEmployement}
        onChange={(e) => handleChange(index, e)}
        name="modeOfEmployement"
      />
      <InputField
        label="Start Date"
        type="date"
        value={formData.startDate}
        onChange={(e) => handleChange(index, e)}
        name="startDate"
      />
      <InputField
        label="Last Working Date"
        type="date"
        value={formData.lastWorkingDate}
        onChange={(e) => handleChange(index, e)}
        name="lastWorkingDate"
      />
      
    </FormWrapper>

    {formDataList.length > 1 &&
     <>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 rounded transition-colors duration-300 text-base bg-red-200 hover:bg-red-500 hover:text-white" 
            onClick={()=>handleDeleteForm(index)}
          >Delete -</button>
        </div>
     </>
      
    }
    
    <hr className="my-10"/>
  </>
  
))}

  <div className="flex justify-between">
    
    <button
      className="bg-[#DADADA] text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300 text-base"
      onClick={handleAddForm}
    >ADD +
    </button>
  
    <button
      className="bg-[#DADADA] text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300 text-base"
      // onClick={onSave}    
    >Save
    </button>

  </div>
    
  </>
    
  )
}

export default ExperienceDetailsForm