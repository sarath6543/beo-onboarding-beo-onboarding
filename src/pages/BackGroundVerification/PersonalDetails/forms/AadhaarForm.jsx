import React, { useState } from 'react'
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField';

const AadhaarForm = () => {

    const [formData,setFormData] = useState({
        aadhaarNumber:"",
        aadhaarName:"",
        aadhaarFile:""
    })

    const handleChange = (e) => {
        const {name ,value } = e.target;
        setFormData((prev) => ({...prev , [name]:value}));
    }

    const handleSave = () => {
        console.log("Saving Aadhaar details:", formData);
    };

  return (
    <FormWrapper columns={3} onSave={handleSave}>

        <InputField
            label="Aadhaar Card Number"
            type="text"
            value={formData.aadhaarNumber}
            name="aadhaarNumber"
            onChange={handleChange}
        />

        <InputField
            label="Name as it appears on Aadhaar Card"
            type="text"
            value={formData.aadhaarNumber}
            name="aadhaarNumber"
        />

        <InputField
            label="Aadhaar Card Number"
            type="upload"
            value={formData.aadhaarFile}
            name="aadhaarFile"
        />
    </FormWrapper>
  )
}

export default AadhaarForm