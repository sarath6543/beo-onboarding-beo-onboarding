import React from 'react'
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField'
import { useForm } from 'react-hook-form'

const CandidateForm = () => {
    const category = [
        {key: "Intern", value: "intern"},
        {key: "Fresher", value: "fresher"},
        {key: "Experienced", value: "experienced"},
    ]

    const division = [
        {key: "Beo-India", value: "Beo-India"},
        {key: "India-4IT", value: "India-4IT"},
    ]

    const {
      register,
      handleSubmit,
      watch,
      setValue,
      reset,
    } = useForm({
        defaultValues: {
            
        },
    })

  return (
    <>
    <FormWrapper columns={1}>
        <InputField
            label={"Name"}
            placeholder={"Enter your name"}
            onChange={(e) => setValue("name", e.target.value)}
            value={watch("name")}
            type='text' 
            
        />
        <InputField
            label={"Email ID"}
            placeholder={"Enter your mail ID"}
            onChange={(e) => setValue("email", e.target.value)}
            value={watch("email")}
            type='text'
        />
        <InputField
            label={"Phone Number"}
            placeholder={"Enter your phone number"}
            onChange={(e) => setValue("phone", e.target.value)}
            value={watch("phone")}
            type='text'
        />
        <InputField
            label={"Category"}
            type='dropdown'
            options={category}
            onChange={(e) => setValue("category", e.target.value)}
            value={watch("category")}
        />
        <InputField
            label={"Division"}
            type='dropdown'
            options={division}
            onChange={(e) => setValue("division", e.target.value)}
            value={watch("division")}
        />

        <div className='flex flex-col gap-3 mt-8'>
            <button className='border rounded-lg p-1 bg-[#3F3F3F] hover:bg-[#2f2f2f] transition duration-200 text-white'>Add</button>
            <button className='border rounded-lg p-1 bg-gray-100 hover:bg-gray-200 transition duration-200 border-[#f0f0f0]'>Cancel</button>
        </div>
    </FormWrapper>
    </>
   
  )
}

export default CandidateForm