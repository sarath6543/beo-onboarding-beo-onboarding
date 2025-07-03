import React, { useState } from 'react'
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField';


const DocumentationDetailsForm = () => {

    const [formData,setFormData] = useState({
            aadhaar:"",
            pan:"",
            photo:"",
            tenth:"",
            twelfth:"",
            diploma:"",
            payslip:"",
            experience:"",
            diploma2:""
        });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Saving document details:", formData);
    };

  return (
    <FormWrapper columns={1} onSave={handleSave}>
        <p className='text-xl font-medium'>Personal</p>
        <FormWrapper columns={3}>
            <InputField
                    label="Aadhaar"
                    type="upload"
                    value={formData.aadhaar}
                    onChange={handleChange}
                    name="aadhaar"
                    asterisk
                />
                <InputField
                    label="Pan"
                    type="upload"
                    value={formData.pan}
                    onChange={handleChange}
                    name="pan"
                    asterisk
                />
                <InputField
                    label="Photo"
                    type="upload"
                    value={formData.photo}
                    onChange={handleChange}
                    name="photo"
                    asterisk
                />
        </FormWrapper>

        <p className='mt-6 text-xl font-medium'>Education</p>
            <FormWrapper columns={3}>
                <InputField
                    label="10th"
                    type="upload"
                    value={formData.tenth}
                    onChange={handleChange}
                    name="tenth"
                    asterisk
                />
                <InputField
                    label="12th"
                    type="upload"
                    value={formData.twelfth}
                    onChange={handleChange}
                    name="twelfth"
                    asterisk
                />
                <InputField
                    label="Diploma"
                    type="upload"
                    value={formData.diploma}
                    onChange={handleChange}
                    name="diploma"
                    asterisk
                />
            </FormWrapper>

        <p className='mt-6 text-xl font-medium'>Experience</p>
            <FormWrapper columns={3}>
                <InputField
                    label="Last 3 month's payslip"
                    type="upload"
                    value={formData.payslip}
                    onChange={handleChange}
                    name="payslip"
                    asterisk
                />
                <InputField
                    label="Relieving/ Experience letter"
                    type="upload"
                    value={formData.experience}
                    onChange={handleChange}
                    name="experience"
                    asterisk
                />
                <InputField
                    label="Diploma"
                    type="upload"
                    value={formData.diploma2}
                    onChange={handleChange}
                    name="diploma2"
                    asterisk
                />
            </FormWrapper>

    </FormWrapper>
  )
}

export default DocumentationDetailsForm