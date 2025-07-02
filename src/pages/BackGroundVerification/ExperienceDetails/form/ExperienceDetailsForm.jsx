// import React, { useState } from 'react'
// import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
// import InputField from '../../../../beolayer/components/base/InputField/InputField';


// const ExperienceDetailsForm = () => {

//     const [formData,setFormData] = useState({
//             companyName:"",
//             employeeId:"",
//             designation:"",
//             location:"",
//             modeOfEmployement:"",
//             startDate:"",
//             lastWorkingDate:""
//         });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSave = () => {
//         console.log("Saving Experiance details:", formData);
//     };

//   return (
//     <>
//         <FormWrapper columns={3} onSave={handleSave}>
//             <InputField
//                 label="Company Name"
//                 type="text"
//                 value={formData.companyName}
//                 onChange={handleChange}
//                 name="companyName"
//             />
//             <InputField
//                 label="Employee ID"
//                 type="text"
//                 value={formData.employeeId}
//                 onChange={handleChange}
//                 name="employeeId"
//             />
//             <InputField
//                 label="Designation"
//                 type="text"
//                 value={formData.designation}
//                 onChange={handleChange}
//                 name="designation"
//             />
//             <InputField
//                 label="Location"
//                 type="text"
//                 value={formData.location}
//                 onChange={handleChange}
//                 name="location"
//             />
//             <InputField
//                 label="Mode of Employement"
//                 type="text"
//                 value={formData.modeOfEmployement}
//                 onChange={handleChange}
//                 name="modeOfEmployement"
//             />
//             <InputField
//                 label="Start Date"
//                 type="date"
//                 value={formData.startDate}
//                 onChange={handleChange}
//                 name="startDate"
//             />
//             <InputField
//                 label="Last Working Date"
//                 type="date"
//                 value={formData.lastWorkingDate}
//                 onChange={handleChange}
//                 name="lastWorkingDate"
//             />
//         </FormWrapper>

//         <button className='border px-3 py-1 font-medium '>ADD +</button>
//     </>

    
//   )
// }

// export default ExperienceDetailsForm


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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Saving Experiance details:", formData);
    };

  return (
    <>
{formDataList.map((formData, index) => (
  <FormWrapper key={index} columns={3} onSave={() => handleSave(index)}>
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
))}

    <button
        className="border px-3 py-1 font-medium"
        onClick={handleAddForm}
        >
        ADD +
    </button>
    </>

    
  )
}

export default ExperienceDetailsForm