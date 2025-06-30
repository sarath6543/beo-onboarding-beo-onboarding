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

  return (
    <FormWrapper columns={2}>
      <InputField
        label="PAN Number"
        value={formData.panNumber}
        onChange={handleChange}
        name="panNumber"
      />
      <InputField
        label="Name on PAN"
        value={formData.panName}
        onChange={handleChange}
        name="panName"
      />
    </FormWrapper>
  );
}
