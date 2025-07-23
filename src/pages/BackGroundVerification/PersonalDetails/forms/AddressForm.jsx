import React, { useEffect } from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import InputField from '../../../../beolayer/components/base/InputField/InputField';
import useAddressStore from '../../../../beolayer/stores/BGV/PersonalDetails/useAddressStore';
import Toast from '../../../../beolayer/components/base/Toast/Toast';
import { toast } from "react-toastify";

const AddressForm = () => {
  const {
    formDataCurrent,
    formDataPermanent,
    sameAsCurrent,
    setFormDataCurrent,
    setFormDataPermanent,
    setSameAsCurrent
  } = useAddressStore();

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      current: formDataCurrent,
      permanent: formDataPermanent,
      sameAsCurrent: sameAsCurrent,
    }
  });

  const watchedCurrent = useWatch({ control, name: 'current' });
  const watchedPermanent = useWatch({ control, name: 'permanent' });
  const watchedSameAsCurrent = useWatch({ control, name: 'sameAsCurrent' });

  useEffect(() => {
    setFormDataCurrent(watchedCurrent);
  }, [watchedCurrent, setFormDataCurrent]);

  useEffect(() => {
    setSameAsCurrent(watchedSameAsCurrent);
  }, [watchedSameAsCurrent, setSameAsCurrent]);

  useEffect(() => {
    if (watchedSameAsCurrent) {
      if (JSON.stringify(formDataPermanent) !== JSON.stringify(watchedCurrent)) {
        setFormDataPermanent(watchedCurrent);
      }
      const permanentInForm = watch('permanent');
      if (JSON.stringify(permanentInForm) !== JSON.stringify(watchedCurrent)) {
        setValue('permanent', watchedCurrent);
      }
    } else {
      if (JSON.stringify(formDataPermanent) !== JSON.stringify(watchedPermanent)) {
        setFormDataPermanent(watchedPermanent);
      }
    }
  }, [watchedSameAsCurrent, watchedCurrent, watchedPermanent, setFormDataPermanent, setValue, formDataPermanent, watch]);

  const onSubmit = (data) => {
    const { current, permanent, sameAsCurrent } = data;
    console.log("Saving Address details:");
    console.log("Current Address:", current);
    console.log("Permanent Address:", sameAsCurrent ? current : permanent);
  };

  const validationRules = {
    addressLine1: { required: "Address Line 1 is required" },
    addressLine2: { required: "Address Line 2 is required" },
    addressLine3: { required: "Address Line 3 is required" },
    landmark: { required: "Landmark is required" },
    city: { required: "City is required" },
    country: { required: "Country is required" },
    state: { required: "State is required" },
    pin: { required: "Pin Code is required" },
    DurationOfStay: { required: "Duration of Stay is required" },
  };

  const getFirstErrorMessage = (errorObj) => {
    for (const key in errorObj) {
      const value = errorObj[key];
      if (value?.message) return value.message;
      if (typeof value === "object") {
        const nested = getFirstErrorMessage(value);
        if (nested) return nested;
      }
    }
    return null;
  };

  const onError = (errors) => {
    const message = getFirstErrorMessage(errors);
    toast.error(message || "Please check the form and try again.");
  };

  const renderAddressFields = (prefix, disabled = false) => (
    <>
      {[
        { name: "addressLine1", label: "Address Line 1" },
        { name: "addressLine2", label: "Address Line 2" },
        { name: "addressLine3", label: "Address Line 3" },
        { name: "landmark", label: "Landmark" },
        { name: "city", label: "City" },
        {
          name: "country",
          label: "Country",
          type: "dropdown",
          options: [
            { key: "India", value: "India" },
            { key: "USA", value: "USA" },
          ],
        },
        { name: "state", label: "State" },
        { name: "pin", label: "Pin Code" },
        { name: "DurationOfStay", label: "Duration of Stay From", type: "date" },
      ].map((field) => (
        <div key={`${prefix}.${field.name}`} className="w-full">
          <Controller
            name={`${prefix}.${field.name}`}
            control={control}
            rules={validationRules[field.name] || {}}
            render={({ field: controllerField }) => (
              <InputField
                {...controllerField}
                label={field.label}
                type={field.type || "text"}
                disabled={disabled}
                options={field.options || []}
                error={errors?.[prefix]?.[field.name]?.message}
              />
            )}
          />
        </div>
      ))}
    </>
  );

  return (
    <>
      <Toast />
      <div className="">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
            <p className="text-lg font-medium col-span-1 sm:col-span-2 lg:col-span-3">Current Address</p>
            {renderAddressFields("current")}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 mt-2">
              <Controller
                name="sameAsCurrent"
                control={control}
                render={({ field }) => (
                  <label className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 text-sm">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-[#DADADA] hover:accent-[#B0B0B0]"
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                    <span>Permanent address is same as current address</span>
                  </label>
                )}
              />
            </div>
            <p className="text-lg font-medium col-span-1 sm:col-span-2 lg:col-span-3 mt-4">Permanent Address</p>
            {renderAddressFields("permanent", watchedSameAsCurrent)}
          </div>
          

          {/* <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300 text-base border border-[#DADADA]"
            >
              Save
            </button>
          </div> */}
                  <div className="flex justify-end bg-[#F1F1F1] px-10 py-5">
         <button
           onClick={handleSubmit(onSubmit, onError)}
           className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300 text-base border border-[#9D9D9D]"
         >           Save         </button>
       </div>
        </form>
      </div>
    </>
  );
};

export default AddressForm;







// import React, { useEffect } from 'react';
// import { useForm, Controller, useWatch } from 'react-hook-form';
// import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper';
// import InputField from '../../../../beolayer/components/base/InputField/InputField';
// import useAddressStore from '../../../../beolayer/stores/BGV/PersonalDetails/useAddressStore';
// import Toast from '../../../../beolayer/components/base/Toast/Toast';

// import { toast } from "react-toastify";

// const AddressForm = () => {
//   const {
//     formDataCurrent,
//     formDataPermanent,
//     sameAsCurrent,
//     setFormDataCurrent,
//     setFormDataPermanent,
//     setSameAsCurrent
//   } = useAddressStore();

//   const {
//     control,
//     handleSubmit,
//     setValue,
//     watch,
//     formState: { errors }
//   } = useForm({
//     defaultValues: {
//       current: formDataCurrent,
//       permanent: formDataPermanent,
//       sameAsCurrent: sameAsCurrent,
//     }
//   });

//   const watchedCurrent = useWatch({ control, name: 'current' });
//   const watchedPermanent = useWatch({ control, name: 'permanent' });
//   const watchedSameAsCurrent = useWatch({ control, name: 'sameAsCurrent' });

//   // Sync to Zustand store
//   useEffect(() => {
//     setFormDataCurrent(watchedCurrent);
//   }, [watchedCurrent, setFormDataCurrent]);

//   useEffect(() => {
//     setSameAsCurrent(watchedSameAsCurrent);
//   }, [watchedSameAsCurrent, setSameAsCurrent]);

// useEffect(() => {
//   if (watchedSameAsCurrent) {
//     // Only update permanent address in store if different from current
//     if (JSON.stringify(formDataPermanent) !== JSON.stringify(watchedCurrent)) {
//       setFormDataPermanent(watchedCurrent);
//     }
//     // Only update RHF permanent fields if different
//     const permanentInForm = watch('permanent');
//     if (JSON.stringify(permanentInForm) !== JSON.stringify(watchedCurrent)) {
//       setValue('permanent', watchedCurrent);
//     }
//   } else {
//     // If not same, update permanent from form values (watchedPermanent)
//     if (JSON.stringify(formDataPermanent) !== JSON.stringify(watchedPermanent)) {
//       setFormDataPermanent(watchedPermanent);
//     }
//   }
// }, [watchedSameAsCurrent, watchedCurrent, watchedPermanent, setFormDataPermanent, setValue, formDataPermanent, watch]);


//   const onSubmit = (data) => {
//     const { current, permanent, sameAsCurrent } = data;
//     console.log("Saving Address details:");
//     console.log("Current Address:", current);
//     console.log("Permanent Address:", sameAsCurrent ? current : permanent);
//   };
//   const validationRules = {
//     addressLine1: { required: "Address Line 1 is required" },
//     addressLine2: { required: "Address Line 2 is required" },
//     addressLine3: { required: "Address Line 3 is required" },
//     landmark: { required: "Landmark is required" },
//     city: { required: "City is required" },
//     country: { required: "Country is required" },
//     state: { required: "State is required" },
//     pin: { required: "Pin Code is required" },
//     DurationOfStay: { required: "Duration of Stay is required" },

//   };

//   const getFirstErrorMessage = (errorObj) => {
//     for (const key in errorObj) {
//       const value = errorObj[key];

//       if (value?.message) {
//         return value.message;
//       }

//       if (typeof value === "object") {
//         const nested = getFirstErrorMessage(value);
//         if (nested) return nested;
//       }
//     }

//     return null;
//   };

//   const onError = (errors) => {
//     const message = getFirstErrorMessage(errors);
//     toast.error(message || "Please check the form and try again.");
//   };
//   // const onError = (errors) => {a
//   //     const firstError = Object.values(errors)[0];
//   //     console.log(errors,"error");
      
//   //     toast.error(firstError?.message || "Please check the form and try again.");
//   //   };

//   const renderAddressFields = (prefix, disabled = false) => (
//     <>
//       {[
//         { name: "addressLine1", label: "Address Line 1" },
//         { name: "addressLine2", label: "Address Line 2" },
//         { name: "addressLine3", label: "Address Line 3" },
//         { name: "landmark", label: "Landmark" },
//         { name: "city", label: "City" },
//         {
//           name: "country",
//           label: "Country",
//           type: "dropdown",
//           options: [
//             { key: "India", value: "India" },
//             { key: "USA", value: "USA" },
//           ],
//         },
//         { name: "state", label: "State" },
//         { name: "pin", label: "Pin Code" },
//         { name: "DurationOfStay", label: "Duration of Stay From", type: "date" },
//       ].map((field) => (
//         <Controller
//           key={`${prefix}.${field.name}`}
//           name={`${prefix}.${field.name}`}
//           control={control}
//           rules={validationRules[field.name] || {}}
//           render={({ field: controllerField }) => (
//             <InputField
//               {...controllerField}
//               label={field.label}
//               type={field.type || "text"}
//               disabled={disabled}
//               options={field.options || []}
//               error={errors?.[prefix]?.[field.name]?.message}
//             />
//           )}
//         />
//       ))}
//     </>
//   );

//   return (
//   <>
//     <Toast />
//     <FormWrapper columns={3} >
//       <p className="text-lg font-medium col-span-3">Current Address</p>
//       {renderAddressFields("current")}
//       <div className="my-4 col-span-3">
//   <Controller
//     name="sameAsCurrent"
//     control={control}
//     render={({ field }) => (
//       <label className="flex items-center space-x-1">
//         {/*
//           By wrapping the input inside the label, clicking on the text
//           will now automatically toggle the checkbox.
//         */}
//         <input
//           type="checkbox"
//            className="w-4 h-5 text-[#DADADA] accent-[#DADADA] hover:accent-[#B0B0B0]"
//           checked={field.value}
//           onChange={(e) => field.onChange(e.target.checked)}
//         />
//         <span className="text-sm">Permanent address is same as current address</span>
//       </label>
//     )}
//   />
// </div>

//       <p className="text-lg font-medium col-span-3">Permanent Address</p>
//       {renderAddressFields("permanent", watchedSameAsCurrent)}
//     </FormWrapper>
//        <div className="flex justify-end mt-6">
//         <button
//           onClick={handleSubmit(onSubmit, onError)}
//           className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300 text-base border border-[#DADADA]"
//         >
//           Save
//         </button>
//       </div>
//       </>
//   );
// };

// export default AddressForm;
