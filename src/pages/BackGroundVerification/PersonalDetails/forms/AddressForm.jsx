import React, { useState, useEffect } from 'react'
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField'

const AddressForm = () => {

    const [formDataCurrent, setFormDataCurrent] = useState({
        addressLine1: "",
        addressLine2: "",
        addressLine3: "",
        landmark: "",
        city: "",
        country: "",
        state: "",
        pin: "",
        DurationOfStay: ""
    });

    const [formDataPermanent, setFormDataPermanent] = useState({
        addressLine1: "",
        addressLine2: "",
        addressLine3: "",
        landmark: "",
        city: "",
        country: "",
        state: "",
        pin: "",
        DurationOfStay: ""
    });

    const [sameAsCurrent, setSameAsCurrent] = useState(false);

    useEffect(() => {
        if (sameAsCurrent) {
            setFormDataPermanent({ ...formDataCurrent });
        }
    }, [sameAsCurrent, formDataCurrent]);

    const handleChangeCurrent = (e) => {
        const { name, value } = e.target;
        setFormDataCurrent((prev) => ({ ...prev, [name]: value }));
    };
    

    const handleChangePermanent = (e) => {
        const { name, value } = e.target;
        setFormDataPermanent((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        setSameAsCurrent(e.target.checked);
    };

    const handleSave = () => {
        const finalPermanent = sameAsCurrent ? formDataCurrent : formDataPermanent;
        console.log("Saving Address details:");
        console.log("Current Address:", formDataCurrent);
        console.log("Permanent Address:", finalPermanent);
    };

    const renderAddressFields = (formData, handleChange, disabled = false) => (
        <>
            <InputField label="Address Line 1" type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} disabled={disabled} />
            <InputField label="Address Line 2" type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} disabled={disabled} />
            <InputField label="Address Line 3" type="text" name="addressLine3" value={formData.addressLine3} onChange={handleChange} disabled={disabled} />
            <InputField label="Landmark" type="text" name="landmark" value={formData.landmark} onChange={handleChange} disabled={disabled} />
            <InputField label="City" type="text" name="city" value={formData.city} onChange={handleChange} disabled={disabled} />
            <InputField label="Country" type="select" name="country" value={formData.country} onChange={handleChange} disabled={disabled} />
            <InputField label="State" type="text" name="state" value={formData.state} onChange={handleChange} disabled={disabled} />
            <InputField label="Pin Code" type="text" name="pin" value={formData.pin} onChange={handleChange} disabled={disabled} />
            <InputField label="Duration of Stay From" type="date" name="DurationOfStay" value={formData.DurationOfStay} onChange={handleChange} disabled={disabled} />
        </>
    );

    return (
        <FormWrapper columns={3} onSave={handleSave}>
            <p className="text-lg font-medium col-span-3">Current Address</p>
            {renderAddressFields(formDataCurrent, handleChangeCurrent)}

            <div className="my-4 col-span-3">
                <label className="flex items-center w space-x-2">
                   
                    <span className="text-sm">Permanent address is same as current address</span>
                     <input
                        className="w-4 h-5"
                        type="checkbox"
                        checked={sameAsCurrent}
                        onChange={handleCheckboxChange}
                    />
                </label>
            </div>

            <p className="text-lg font-medium col-span-3">Permanent Address</p>
            {renderAddressFields(formDataPermanent, handleChangePermanent, sameAsCurrent)}
        </FormWrapper>
    );
};

export default AddressForm;
