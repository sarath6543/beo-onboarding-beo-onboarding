import React from 'react'
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField'

const CandidateForm = () => {
    const category = [
        {key: "Fresher", value: "fresher"},
        {key: "Mid-Level", value: "mid-level"},
        {key: "Senior", value: "senior"},
        {key: "Lead", value: "lead"},
    ]

    const division = [
        {key: "Internal", value: "internal"},
        {key: "India-4IT", value: "India-4IT"},
    ]

  return (
    <>
    <FormWrapper columns={1}>
        <InputField
            label={"Name"}
            placeholder={"Enter your name"}
            type='text' 
            
        />
        <InputField
            label={"Email ID"}
            placeholder={"Enter your mail ID"}
            type='text'
        />
        <InputField
            label={"Phone Number"}
            placeholder={"Enter your phone number"}
            type='text'
        />
        <InputField
            label={"Category"}
            type='dropdown'
            options={category}
        />
        <InputField
            label={"Division"}
            type='dropdown'
            options={division}
        />

        <div className='flex flex-col gap-3 mt-8'>
            <button className='border rounded-lg p-1 bg-[#3F3F3F] hover:bg-[#2f2f2f] transition duration-200 text-white'>Add</button>
            <button className='border rounded-lg p-1 bg-gray-100 hover:bg-gray-200 transition duration-200'>Cancel</button>
        </div>
    </FormWrapper>
    </>
   
  )
}

export default CandidateForm