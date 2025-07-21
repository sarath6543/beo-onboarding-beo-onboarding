import { create } from "zustand";

const usePanCardStore = create((set) => ({
  panNumber: "",
  panName: "",
  panFile: null,
    panFilePreviewUrl: "https://www.gstatic.com/webp/gallery/1.webp",

  setPanField: (name, value) =>
    set((state) => ({
      ...state,
      [name]: value,
    })),

  resetPanForm: () =>
    set({
      panNumber: "",
      panName: "",
      panFile: null,
        panFilePreviewUrl: "",
    }),
}));

export default usePanCardStore;