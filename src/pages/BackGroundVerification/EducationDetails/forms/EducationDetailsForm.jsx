import React, { useState } from 'react'
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField';

const EducationDetailsForm = () => {

    const [formData10th,setFormData10th] = useState({
        board:"",
        school:"",
        percentage:"",
        fromDate:"",
        toDate:""
    });

    const [formData12th,setFormData12th] = useState({
        board:"",
        school:"",
        percentage:"",
        fromDate:"",
        toDate:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData10th((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Saving educational details:", formData10th);
    };

  return (
    <FormWrapper columns={1} onSave={handleSave}> 
        <p className='text-xl font-medium'>10th Standard</p>
            <FormWrapper columns={3}>    
                <InputField
                    label="Board"
                    type="text"
                    value={formData10th.board}
                    onChange={handleChange}
                    name="board"
                    asterisk
                />
                <InputField
                    label="School"
                    type="text"
                    value={formData10th.school}
                    onChange={handleChange}
                    name="school"
                    asterisk
                />
                <InputField
                    label="Percentage"
                    type="text"
                    value={formData10th.percentage}
                    onChange={handleChange}
                    name="percentage"
                    asterisk
                />
            
                <InputField
                    label="From Date"
                    type="date"
                    value={formData10th.fromDate}
                    onChange={handleChange}
                    name="fromDate"
                    asterisk
                />
                <InputField
                    label="To Date"
                    type="date"
                    value={formData10th.toDate}
                    onChange={handleChange}
                    name="toDate"
                    asterisk
                /> 
                <InputField
                    label="Certificate"
                    type="upload"
                    value={formData12th.toDate}
                    onChange={handleChange}
                    name=""
                    asterisk
                />  
            </FormWrapper>

        <p className='mt-6 text-xl font-medium'>12th Standard</p>
            <FormWrapper columns={3}>
                <InputField
                    label="Board"
                    type="text"
                    value={formData12th.board}
                    onChange={handleChange}
                    name="board"
                    asterisk
                />
                <InputField
                    label="School"
                    type="text"
                    value={formData12th.school}
                    onChange={handleChange}
                    name="school"
                    asterisk
                />
                <InputField
                    label="Percentage/CGPA"
                    type="text"
                    value={formData12th.percentage}
                    onChange={handleChange}
                    name="percentage"
                    asterisk
                />
                <InputField
                    label="From Date"
                    type="date"
                    value={formData12th.fromDate}
                    onChange={handleChange}
                    name="fromDate"
                    asterisk
                />
                <InputField
                    label="To Date"
                    type="date"
                    value={formData12th.toDate}
                    onChange={handleChange}
                    name="toDate"
                    asterisk
                />
                <InputField
                    label="Certificate"
                    type="upload"
                    value={formData12th.toDate}
                    onChange={handleChange}
                    name=""
                    asterisk
                />
            </FormWrapper>
        <p className='mt-6 text-xl font-medium'>Diploma/UG/PG/Others</p>
            <FormWrapper columns={3}>
                <InputField
                    label="University"
                    type="text"
                    value={formData12th.board}
                    onChange={handleChange}
                    name="board"
                />
                <InputField
                    label="College/Institute"
                    type="text"
                    value={formData12th.school}
                    onChange={handleChange}
                    name="school"
                    asterisk
                />
                <InputField
                    label="Mode of Education"
                    type="text"
                    value={formData12th.percentage}
                    onChange={handleChange}
                    name="percentage"
                />
                <InputField
                    label="Specilazation"
                    type="date"
                    value={formData12th.fromDate}
                    onChange={handleChange}
                    name="fromDate"
                    asterisk
                />
                <InputField
                    label="Percentage/CGPA"
                    type="date"
                    value={formData12th.toDate}
                    onChange={handleChange}
                    name="toDate"
                    asterisk
                />
                <InputField
                    label="Certificate"
                    type="upload"
                    value={formData12th.toDate}
                    onChange={handleChange}
                    name=""
                    asterisk
                />
            </FormWrapper>
    </FormWrapper>
  )
}

export default EducationDetailsForm