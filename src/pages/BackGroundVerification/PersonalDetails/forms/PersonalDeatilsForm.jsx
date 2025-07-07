import React, { useEffect, useState } from 'react'
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField'
import usePersonalDetailsStore from '../../../../beolayer/stores/BGV/PersonalDetails/usePersonalDetailsStore'
import { useForm } from 'react-hook-form';

const options = [
  { key: "Male", value: "male" },
  { key: "Female", value: "female" }
  ];
  
  const nation = [
    {key:"India", value:"india" }
  ]

  const maritalStatus = [
    { key: "Single", value: "single" },
    { key: "Married ", value: "Married " },
  ]

  const group = [
    { key: "A -ve", value: "A -ve" },
    { key: "A +ve", value: "A +ve" },
  ]

const PersonalDeatilsForm = () => {
  
  const{firstName,middleName,lastName,fathersName,dob,nationality,placeOfBirth,gender,MaritialStatus,email,pin,mobile,alternativeMobile,bloodGroup,photo,setPersonalDetailsFields,resetPersonalDetailsFields} = usePersonalDetailsStore()

  const{register, handleSubmit, watch, setValue, reset, formState:{errors}} = useForm({
    defaultValues:{
      firstName:firstName,
      middleName:middleName,
      lastName:lastName,
      fathersName:fathersName,
      dob:dob,
      nationality:nationality,
      placeOfBirth:placeOfBirth,
      gender:gender,
      MaritialStatus:MaritialStatus,
      email:email,
      pin:pin,
      mobile:mobile,
      alternativeMobile:alternativeMobile,
      bloodGroup:bloodGroup,
      photo:photo ? [photo] : null
    },
  });

  useEffect(()=>{
    const subscription = watch((value, {name}) =>{
      console.log("Watch triggered:", name, value);
      if (name === "photo" && value.photo?.[0]) {
        setPersonalDetailsFields("photo", value.photo[0]);
      } else if (name && value[name] !== undefined) {
        setPersonalDetailsFields(name, value[name]);
      }
    });
    return () => subscription.unsubscribe();
  },[watch, setPersonalDetailsFields])

  const onSubmit = (data) => {
    // const file = data.panFile?.[0] || null;
    console.log("Saving Personal details:", {
      firstName: data.firstName,
      // middleName: data.middleName,
      
    });
  }


  return (
    <FormWrapper columns={3} onSave={handleSubmit(onSubmit)}>
      <InputField
        label="First Name"
        type="text"
        {...register("firstName" ,{required: "First name is required"})}
        value={watch("firstName")}
        onChange={(e)=>setValue("firstName",e.target.value)}
        name="firstName"
        asterisk
        error={errors.firstName?.message}
      />
      <InputField
        label="Middle Name"
        {...register("middleName" ,{required: "Middle name is required"})}
        value={watch("middleName")}
        onChange={(e)=>setValue("middleName",e.target.value)}  
        name="middleName"
        asterisk
        error={errors.middleName?.message}
      />
      <InputField
        label="Last Name"
        {...register("lastName" ,{required: "Last name is required"})}
        value={watch("lastName")}
        onChange={(e)=>setValue("lastName",e.target.value)}  
        name="lastName"
        asterisk
        error={errors.lastName?.message}
      />  
      <InputField
        label="Father's Name"
        {...register("fathersName" ,{required: "Father's name is required"})}
        value={watch("fathersName")}
        onChange={(e)=>setValue("fathersName",e.target.value)}  
        name="fathersName"
        asterisk
        error={errors.fathersName?.message}
      />
      <InputField
        type='date'
        label="Date Of Birth"
        {...register("dob" ,{required: "Date  Birth is required"})}
        value={watch("dob")}
        onChange={(e)=>setValue("dob",e.target.value)}  
        name="dob"
        asterisk
        error={errors.dob?.message}
      />
      <InputField
        type='dropdown'
        label="Nationality"
        {...register("nationality" ,{required: "Nationality is required"})}
        value={watch("nationality")}
        onChange={(e)=>setValue("nationality",e.target.value)}  
        name="nationality"
        asterisk
        error={errors.nationality?.message}
      />
      <InputField
        label="Place Of Birth"
        {...register("placeOfBirth" ,{required: "Place of Birth is required"})}
        value={watch("placeOfBirth")}
        onChange={(e)=>setValue("placeOfBirth",e.target.value)}  
        name="placeOfBirth"
        asterisk
        error={errors.placeOfBirth?.message}
      />

      <InputField
        label="Gender"
        type='dropdown'  
        {...register("gender" ,{required: "Gender is required"})}
        value={watch("gender")}
        onChange={(e)=>setValue("gender",e.target.value)}  
        name="gender"
        error={errors.gender?.message}
        options={options}
        asterisk
      />
      
      <InputField
        label="Marital Status"
        type='dropdown'
        {...register("MaritialStatus" ,{required: "Maritial Status is required"})}
        value={watch("MaritialStatus")}
        onChange={(e)=>setValue("MaritialStatus",e.target.value)}  
        name="MaritialStatus"
        error={errors.MaritialStatus?.message}
        options={options}
        asterisk
      />
      <InputField
        label="Email ID"
        {...register("email" ,{required: "Email is required"})}
        value={watch("email")}
        onChange={(e)=>setValue("email",e.target.value)}  
        name="email"
        error={errors.email?.message}
        options={options}
        asterisk
      />
      <InputField
        label="PIN Code"
        {...register("pin" ,{required: "Pin is required"})}
        value={watch("pin")}
        onChange={(e)=>setValue("pin",e.target.value)}  
        name="pin"
        error={errors.pin?.message}
        options={options}
        asterisk
      />
      <InputField
        label="Mobile"
        {...register("mobile" ,{required: "Mobile is required"})}
        value={watch("mobile")}
        onChange={(e)=>setValue("mobile",e.target.value)}  
        name="mobile"
        error={errors.mobile?.message}
        options={options}
        asterisk
      />
      <InputField
        label="Alternate Mobile Number"
        {...register("alternativeMobile" ,{required: "Alternative Mobile is required"})}
        value={watch("alternativeMobile")}
        onChange={(e)=>setValue("alternativeMobile",e.target.value)}  
        name="alternativeMobile"
        error={errors.alternativeMobile?.message}
        options={options}
        asterisk
      />
      <InputField
        label="Blood Group"
        type='dropdown'
        {...register("bloodGroup" ,{required: "Blood Group is required"})}
        value={watch("bloodGroup")}
        onChange={(e)=>setValue("bloodGroup",e.target.value)}  
        name="bloodGroup"
        error={errors.bloodGroup?.message}
        options={group}
        asterisk
      />

     <InputField
     type="upload"
      label="Photo"
      {...register("photo" ,{required: "photo is required"})}
        value={watch("photo")?.[0] || ""}
        onChange={(e)=>setValue("photo",e.target.files)}  
        name="photo"
        error={errors.photo?.message}
        options={options}
        asterisk
    />
        

    </FormWrapper>
  )
}

export default PersonalDeatilsForm