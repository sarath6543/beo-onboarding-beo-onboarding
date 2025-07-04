import React, { useState } from 'react'
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField';

const EducationDetailsForm = () => {

    const [formDataList,setFormDataList] = useState([
        {
        board:"",
        school:"",
        percentage:"",
        fromDate:"",
        toDate:"",
        key:"10th Standard"
        },
    ]);

    const handleChange = (e) => {
        const { value } = e.target;
        setFormDataList((prev) => ([ ...prev, {
        board:"",
        school:"",
        percentage:"",
        fromDate:"",
        toDate:"",
        key: value
    }]));  
    };

    const handleSave = () => {
        console.log("Saving educational details:", formDataList);
    };


  return (
    <FormWrapper columns={1} onSave={handleSave}> 
       {formDataList.map((formData,index)=>(
        <>
            <p className='text-xl font-medium'>{formData.key}</p>
                <FormWrapper columns={3}>    
                    <InputField
                        label="Board"
                        type="text"
                        value={formData.board}
                        onChange={handleChange}
                        name="board"
                        asterisk
                    />
                    <InputField
                        label="School"
                        type="text"
                        value={formData.school}
                        onChange={handleChange}
                        name="school"
                        asterisk
                    />
                    <InputField
                        label="Percentage"
                        type="text"
                        value={formData.percentage}
                        onChange={handleChange}
                        name="percentage"
                        asterisk
                    />
                
                    <InputField
                        label="From Date"
                        type="date"
                        value={formData.fromDate}
                        onChange={handleChange}
                        name="fromDate"
                        asterisk
                    />
                    <InputField
                        label="To Date"
                        type="date"
                        value={formData.toDate}
                        onChange={handleChange}
                        name="toDate"
                        asterisk
                    /> 
                    <InputField
                        label="Certificate"
                        type="upload"
                        value={formData.toDate}
                        onChange={handleChange}
                        name=""
                        asterisk
                    />  
                </FormWrapper>
                <hr />
                
        </>
            ))}

            <div className="flex justify-start">     
            <select 
                onChange={handleChange}
                defaultValue=""
                className="mt-1 block px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="" disabled hidden>Add Education</option>
                <option disabled={formDataList.includes("12th")} value="12th">12th standard</option>
                <option value="diploma">Diploma</option>
                <option value="ug">UG</option>
                <option value="pg">PG</option>
                <option value="others">Others</option>
            </select>
            </div>



    </FormWrapper>
  )
}

export default EducationDetailsForm