import React, { useState } from 'react'
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField'

const AddressForm = () => {

    const [formDataCurrent,setFormDataCurrent] = useState({
        addressLine1:"",
        addressLine2:"",
        addressLine3:"",
        landmark:"",
        city:"",
        country:"",
        state:"",
        pin:"",
        DurationOfStay:""
    })

    const [formDataPermanent,setFormDataPermanent] = useState({
        addressLine1:"",
        addressLine2:"",
        addressLine3:"",
        landmark:"",
        city:"",
        country:"",
        state:"",
        pin:"",
        DurationOfStay:""
    })

    const handleChangeCurrent = (e) => {
        const {name ,value } = e.target;
        setFormDataCurrent((prev) => ({...prev , [name]:value}));
    }

    const handleChangePermanent = (e) => {
        const {name ,value } = e.target;
        setFormDataPermanent((prev) => ({...prev , [name]:value}));
    }

    const handleSave = () => {
        console.log("Saving Address details:", formData);
    };
  return (
    <>
    <p className='text-lg font-medium'>Current Address</p>
    <FormWrapper columns={3} onSave={handleSave}>
        <InputField 
            label="Address Line 1"
            type='text'
            value={formDataCurrent.addressLine1}
            onChange={handleChangeCurrent}
            name="addressLine1"
        />
        <InputField 
            label="Address Line 2"
            type='text'
            value={formDataCurrent.addressLine2}
            onChange={handleChangeCurrent}
            name="addressLine2"
        />
        <InputField 
            label="Address Line 3"
            type='text'
            value={formDataCurrent.addressLine3}
            onChange={handleChangeCurrent}
            name="addressLine3"
        />
        <InputField 
            label="Landmark"
            type='text'
            value={formDataCurrent.landmark}
            onChange={handleChangeCurrent}
            name="landmark"
        />
        <InputField 
            label="City"
            type='text'
            value={formDataCurrent.city}
            onChange={handleChangeCurrent}
            name="city"
        />
        <InputField 
            label="Country"
            type='text'
            value={formDataCurrent.country}
            onChange={handleChangeCurrent}
            name="country"
        />
        <InputField 
            label="State"
            type='text'
            value={formDataCurrent.state}
            onChange={handleChangeCurrent}
            name="state"
        />
        <InputField 
            label="Pin Code"
            type='text'
            value={formDataCurrent.pin}
            onChange={handleChangeCurrent}
            name="pin"
        />
        <InputField 
            label="Duration of Stay From"
            type='text'
            value={formDataCurrent.DurationOfStay}
            onChange={handleChangeCurrent}
            name="DurationOfStay"
        />

        <p>Permant Address</p>
        

    </FormWrapper>
    </>
  )
}

export default AddressForm