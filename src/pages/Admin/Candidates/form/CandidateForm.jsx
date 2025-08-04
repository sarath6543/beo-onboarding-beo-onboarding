import React from 'react'
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField'

const CandidateForm = () => {
  return (
    <>
    <FormWrapper columns={1}>
        <InputField
            label={"Name"}
            type='text' 
        />
        <InputField
            label={"Email ID"}
            type='text'
        />
        <InputField
            label={"Phone Number"}
            type='text'
        />
        <InputField
            label={"Category"}
            type='dropdown'
        />
        <InputField
            label={"Division"}
            type='dropdown'
        />

        <button className='border rounded p-1 bg-[#1F2937] hover:bg-[#0c121a] transition duration-200 text-white'>Add</button>
        <button className='border rounded p-1 bg-gray-100 hover:bg-gray-200 transition duration-200'>Cancel</button>
    </FormWrapper>
    </>
   
  )
}

export default CandidateForm