import {create} from "zustand";

const useAadharDetailsStore = create((set) => ({
    aadharNumber: "",
    aadharName: "",
    aadharFile: null,
    setAadharField: (name, value) => set((state) => ({
        ...state,
        [name]: value,
    })),
    resetAadharForm: () => set({
        aadharNumber: "",
        aadharName: "",
        aadharFile: null,
    }),
}));

export default useAadharDetailsStore;