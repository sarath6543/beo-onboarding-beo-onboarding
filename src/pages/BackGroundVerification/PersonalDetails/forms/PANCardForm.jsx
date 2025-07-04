// import React, { useState } from "react";
// import FormWrapper from "../../../../beolayer/components/base/Form/FormWrapper";
// import InputField from "../../../../beolayer/components/base/InputField/InputField";

// export default function PANCardForm() {
//   const [formData, setFormData] = useState({
//     panNumber: "",
//     panName: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = () => {
//     console.log("Saving PAN card details:", formData);

//   };

//   return (
//     <FormWrapper columns={3} onSave={handleSave}>
//       <InputField
//         label="PAN Number"
//         type="text"
//         value={formData.panNumber}
//         onChange={handleChange}
//         name="panNumber"
//         asterisk
//       />
//       <InputField
//         label="Name on PAN"
//         type="text"
//         value={formData.panName}
//         onChange={handleChange}
//         name="panName"
//         asterisk
//       />
//        <InputField
//         label="PAN"
//         type="upload"
//         value={formData.panNumber}
//         onChange={handleChange}
//         name="panNumber"
//         asterisk
//       />
     
//     </FormWrapper>
//   );
// }
import React from "react";
import FormWrapper from "../../../../beolayer/components/base/Form/FormWrapper";
import InputField from "../../../../beolayer/components/base/InputField/InputField";
import usePanCardStore from "../../../../beolayer/stores/BGV/PersonalDetails/usePanCardStore";

export default function PANCardForm() {
  const {
    panNumber,
    panName,
    panFile,
    setPanField,
    resetPanForm,
  } = usePanCardStore();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const finalValue = files ? files[0] : value;
    setPanField(name, finalValue);
  };

  const handleSave = () => {
    console.log("Saving PAN card details:", {
      panNumber,
      panName,
      panFile,
    });

    // Example: reset form if needed
    // resetPanForm();
  };

  return (
    <FormWrapper columns={3} onSave={handleSave}>
      <InputField
        label="PAN Number"
        type="text"
        value={panNumber}
        onChange={handleChange}
        name="panNumber"
        asterisk
      />
      <InputField
        label="Name on PAN"
        type="text"
        value={panName}
        onChange={handleChange}
        name="panName"
        asterisk
      />
      <InputField
        label="Upload PAN"
        type="upload"
        value={panFile?.name || ""}
        onChange={handleChange}
        name="panFile"
        asterisk
      />
    </FormWrapper>
  );
}

