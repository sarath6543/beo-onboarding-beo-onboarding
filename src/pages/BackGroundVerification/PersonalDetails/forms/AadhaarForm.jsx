import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField';
import useAadharDetailsStore from '../../../../beolayer/stores/BGV/PersonalDetails/useAadharDetailsStore';
import Popup from '../../../../beolayer/components/base/pop-up/Popup';

const AadhaarForm = () => {

    const  [isOpen,setIsOpen] = useState(false)

    const { aadharNumber, aadharName, aadharFile, setAadharField } = useAadharDetailsStore();
    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm({
       defaultValues: {
    aadharNumber: aadharNumber,
    aadharName: aadharName,
    aadharFile: aadharFile ? [aadharFile] : null,
    }
    });

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            console.log("Watch triggered:", name, value);
            if (name === "aadharFile" && value.aadharFile?.[0]) {
                setAadharField("aadharFile", value.aadharFile[0]);
            } else if (name && value[name] !== undefined) {
                setAadharField(name, value[name]);
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, setAadharField]);


    const onSubmit = (data) => {
        const file = data.aadharFile?.[0] || null;
        console.log("Saving Aadhar card details:", {
            aadharNumber: data.aadharNumber,
            aadharName: data.aadharName,
            aadharFile: file,
        });
        // resetAadharForm();
        // reset(); // optional
        setIsOpen(true)
    };

 const watchedFile = watch("aadharFile");

    return (
        <>

        <Popup show={isOpen} onClose={() => setIsOpen(false)} title="Aadhar Details">
            <p>this is a sample pop-up</p>
        </Popup>

            <FormWrapper columns={3} onSave={handleSubmit(onSubmit)}>
    
                        <InputField
                label="Aadhaar Card Number"
                type="text"
                {...register("aadharNumber", { required: "Aadhar Number is required" })}
                value={watch("aadharNumber")}
                name="aadharNumber"
                onChange={(e) => setValue("aadharNumber", e.target.value)}
                asterisk
                error={errors.aadharNumber?.message}
                />
    
                <InputField
                label="Aadhaar Card Name"
                type="text"
                {...register("aadharName", { required: "Aadhar Name is required" })}
                value={watch("aadharName")}
                name="aadharName"
                onChange={(e) => setValue("aadharName", e.target.value)}
                asterisk
                error={errors.aadharName?.message}
                />
    
                <InputField
                label="Upload Aadhar"
                type="upload"
                {...register("aadharFile", { required: "Aadhaar file is required" })}
                        onChange={(e) => {
                        const file = e.target.files[0];
                        if(file){
                            const previewUrl = URL.createObjectURL(file);
                            setValue("aadharFile",[file]);
                            setAadharField("aadharFile",file)
                            setAadharField("aadharFilePreviewUrl",previewUrl)
                        }
                        }}
                name="aadharFile"
                asterisk
                value={watchedFile?.[0] || ""}
                error={errors.aadharFile?.message}
                />
            </FormWrapper>
        </>
    )
}

export default AadhaarForm