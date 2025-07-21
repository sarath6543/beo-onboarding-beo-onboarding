import {create} from "zustand";

const useAadharDetailsStore = create((set) => ({
    aadharNumber: "",
    aadharName: "",
    aadharFile: null,
        aadharFilePreviewUrl: "https://www.gstatic.com/webp/gallery/1.webp",
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