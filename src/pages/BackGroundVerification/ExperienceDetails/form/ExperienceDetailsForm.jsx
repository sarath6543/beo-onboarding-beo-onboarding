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
        asterisk
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
        asterisk
      />
      <InputField
        label="Location"
        type="text"
        value={formData.location}
        onChange={(e) => handleChange(index, e)}
        name="location"
        asterisk
      />
      <InputField
        label="Mode of Employement"
        type="text"
        value={formData.modeOfEmployement}
        onChange={(e) => handleChange(index, e)}
        name="modeOfEmployement"
        asterisk
      />
      <InputField
        label="Start Date"
        type="date"
        value={formData.startDate}
        onChange={(e) => handleChange(index, e)}
        name="startDate"
        asterisk
      />
      <InputField
        label="Last Working Date"
        type="date"
        value={formData.lastWorkingDate}
        onChange={(e) => handleChange(index, e)}
        name="lastWorkingDate"
      />
      <InputField
        label="Relieving / Experience letter"
        type="upload"
        value={formData.lastWorkingDate}
        onChange={(e) => handleChange(index, e)}
        name="lastWorkingDate"
        asterisk
      />
      <InputField
        label="Last 3 month's payslips "
        type="upload"
        value={formData.lastWorkingDate}
        onChange={(e) => handleChange(index, e)}
        name="lastWorkingDate"
        asterisk
      />
      
    </FormWrapper>

    <div className="my-4 me-6 flex justify-end">
                    <label className="flex items-center space-x-2">
                        <span className="text-sm">Current Organization</span>
                        <input
                        className="w-4 h-5"
                        type="checkbox"
                        // checked={}
                        // onChange={}
                        />
                    </label>
                </div>

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