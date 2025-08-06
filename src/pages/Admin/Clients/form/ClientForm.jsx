import React from 'react'
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField'

const ClientForm = () => {
    const division = [
        {key: "Internal", value: "internal"},
        {key: "India-4IT", value: "India-4IT"},
    ]
  return (
    <>
    <FormWrapper columns={1}>
        <InputField
            label={"Client Name"}
            placeholder={"Enter client name"}
            type='text' 
        />
        <InputField
            label={"Client Email ID"}
            placeholder={"Enter client email ID"}
            type='text'
        />
        <InputField
            label={"Phone Number"}
            placeholder={"Enter client phone number"}
            type='text'
        />
        <InputField
            label={"Category"}
            type='dropdown'
        />
        <InputField
            label={"Division"}
            type='dropdown'
            options={division}
        />
        <div className='flex flex-col gap-3 mt-8'>
            <button className='border rounded-lg p-1 bg-[#1F2937] hover:bg-[#0c121a] transition duration-200 text-white'>Add</button>
            <button className='border rounded-lg p-1 bg-gray-100 hover:bg-gray-200 transition duration-200'>Cancel</button>
        </div>
    </FormWrapper>
    </>
  )
}

export default ClientForm