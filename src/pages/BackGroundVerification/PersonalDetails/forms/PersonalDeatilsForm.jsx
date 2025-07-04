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
    photo:"",
    bloodGroup:"",
  });

  const options = [
  { key: "Male", value: "male" },
  { key: "Female", value: "female" }
  ];
  
  const nationality = [
    {key:"India", value:"india" }
  ]

  const maritalStatus = [
    { key: "Single", value: "single" },
    { key: "Married ", value: "Married " },
  ]

  const bloodGroup = [
    { key: "A -ve", value: "A -ve" },
    { key: "A +ve", value: "A +ve" },

  ]
  
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
        asterisk
      />
      <InputField
        label="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        name="lastName"
        asterisk
      />  
      <InputField
        label="Father's Name"
        value={formData.fathersName}
        onChange={handleChange}
        name="fathersName"
        asterisk
      />
      <InputField
        type='date'
        label="Date Of Birth"
        value={formData.dob}
        onChange={handleChange}
        name="dob"
        asterisk
      />
      <InputField
        type='dropdown'
        label="Nationality"
        value={formData.nationality}
        onChange={handleChange}
        name="nationality"
        options={nationality}
        asterisk
      />
      <InputField
        label="Place Of Birth"
        value={formData.placeOfBirth}
        onChange={handleChange}
        name="placeOfBirth"
        asterisk
      />

      <InputField
        type='dropdown'  
        label="Gender"
        value={formData.gender}
        onChange={handleChange}
        name="gender"
        options={options}
        asterisk
      />
      
      <InputField
        type='dropdown'
        label="Marital Status"
        value={formData.MaritalStatus}
        onChange={handleChange}
        name="genMaritalStatusder"
        options={maritalStatus}
        asterisk
      />
      <InputField
        label="Email ID"
        value={formData.email}
        onChange={handleChange}
        name="email"
        asterisk
      />
      <InputField
        label="PIN Code"
        value={formData.pin}
        onChange={handleChange}
        name="pin"
        asterisk
      />
      <InputField
        label="Mobile"
        value={formData.mobile}
        onChange={handleChange}
        name="mobile"
        asterisk
      />
      <InputField
        label="Alternate Mobile Number"
        value={formData.alternateMobile}
        onChange={handleChange}
        name="alternateMobile"
        asterisk
      />
      <InputField
        type='dropdown'
        label="Blood Group"
        value={formData.bloodGroup}
        onChange={handleChange}
        name="bloodGroup"
        options={bloodGroup}
        asterisk
      />

      <InputField
        type='upload'
        label="Photo"
        value={formData.photo}
        onChange={handleChange}
        name="photo"
      />
        

    </FormWrapper>
  )
}

export default PersonalDeatilsForm