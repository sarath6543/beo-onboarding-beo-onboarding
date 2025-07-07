// store/addressStore.js
import { create } from 'zustand';

const useAddressStore = create((set) => ({
    formDataCurrent: {
        addressLine1: "",
        addressLine2: "",
        addressLine3: "",
        landmark: "",
        city: "",
        country: "",
        state: "",
        pin: "",
        DurationOfStay: ""
    },
    formDataPermanent: {
        addressLine1: "",
        addressLine2: "",
        addressLine3: "",
        landmark: "",
        city: "",
        country: "",
        state: "",
        pin: "",
        DurationOfStay: ""
    },
    sameAsCurrent: false,

    setFormDataCurrent: (data) => set({ formDataCurrent: data }),
    setFormDataPermanent: (data) => set({ formDataPermanent: data }),
    setSameAsCurrent: (value) => set({ sameAsCurrent: value })
}));

export default useAddressStore;
