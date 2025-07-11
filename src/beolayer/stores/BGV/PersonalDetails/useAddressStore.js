// store/addressStore.js
import { create } from 'zustand';

const initialData =  {
        addressLine1: "",
        addressLine2: "",
        addressLine3: "",
        landmark: "",
        addressLine1: "",
        country: "",
        state: "",
        pin: "",
        DurationOfStay: ""
    }
const useAddressStore = create((set) => ({
    formDataCurrent: initialData,
    formDataPermanent: initialData,
    sameAsCurrent: false,

    setFormDataCurrent: (data) => set({ formDataCurrent: data }),
    setFormDataPermanent: (data) => set({ formDataPermanent: data }),
    setSameAsCurrent: (value) => set({ sameAsCurrent: value })
}));

export default useAddressStore;
