import React, { useState } from 'react'
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField'

const PersonalDeatilsForm = () => {
  const [formData,setFormData] = useState({
    firstName:"",
    middleName:"",
    lastName:"",
    fathersName:"",
    dob:"",
    nationality:"",
    placeOfBirth:"",
    gender:"",
    MaritalStatus:"",
    email:"",
    pin:"",
    mobile:"",
    alternateMobile:"",
    aadhar:"",
  });

  const options = [
  { key: "Male", value: "male" },
  { key: "Female", value: "female" }
  ];
  
  const handleChange =(e)=>{
    const {name ,value} = e.target;
    setFormData((prev )=>({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    console.log("Saving Personal details:", formData);
  };

  
  return (
    <FormWrapper columns={3} onSave={handleSave}>
      <InputField
        label="First Name"
        value={formData.firstName}
        onChange={handleChange}
        name="firstName"
        asterisk
      />
      <InputField
        label="Middle Name"
        value={formData.middleName}
        onChange={handleChange}
        name="middleName"
      />
      <InputField
        label="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        name="lastName"
      />  
      <InputField
        label="Father's Name"
        value={formData.fathersName}
        onChange={handleChange}
        name="fathersName"
      />
      <InputField
        type='date'
        label="Date Of Birth"
        value={formData.dob}
        onChange={handleChange}
        name="dob"
      />
      <InputField
        label="Nationality"
        value={formData.nationality}
        onChange={handleChange}
        name="nationality"
      />
      <InputField
        label="Place Of Birth"
        value={formData.placeOfBirth}
        onChange={handleChange}
        name="placeOfBirth"
      />

      <InputField
        type='dropdown'  
        label="Gender"
        value={formData.gender}
        onChange={handleChange}
        name="gender"
        options={options}
      />
      
      <InputField
        label="Marital Status"
        value={formData.MaritalStatus}
        onChange={handleChange}
        name="genMaritalStatusder"
      />
      <InputField
        label="Email ID"
        value={formData.email}
        onChange={handleChange}
        name="email"
      />
      <InputField
        label="PIN Code"
        value={formData.pin}
        onChange={handleChange}
        name="pin"
      />
      <InputField
        label="Mobile"
        value={formData.mobile}
        onChange={handleChange}
        name="mobile"
      />
      <InputField
        label="Alternate Mobile Number"
        value={formData.alternateMobile}
        onChange={handleChange}
        name="alternateMobile"
      />

      <InputField
        type='upload'
        label="Aadhar"
        value={formData.aadhar}
        onChange={handleChange}
        name="aadhar"
      />
        

    </FormWrapper>
  )
}

export default PersonalDeatilsForm