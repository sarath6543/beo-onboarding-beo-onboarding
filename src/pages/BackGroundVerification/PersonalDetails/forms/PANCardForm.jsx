import React, { useState } from "react";
import FormWrapper from "../../../../beolayer/components/base/Form/FormWrapper";
import InputField from "../../../../beolayer/components/base/InputField/InputField";

export default function PANCardForm() {
  const [formData, setFormData] = useState({
    panNumber: "",
    panName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saving PAN card details:", formData);

  };

  return (
    <FormWrapper columns={2} onSave={handleSave}>
      <InputField
        label="PAN Number"
        type="text"
        value={formData.panNumber}
        onChange={handleChange}
        name="panNumber"
      />
      <InputField
        label="Name on PAN"
          type="text"
        value={formData.panName}
        onChange={handleChange}
        name="panName"
      />
       <InputField
        label="PAN Number"
          type="upload"
        value={formData.panNumber}
        onChange={handleChange}
        name="panNumber"
      />
     
    </FormWrapper>
  );
}
