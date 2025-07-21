import { create } from "zustand";

const usePanCardStore = create((set) => ({
  panNumber: "",
  panName: "",
  panFile: null,
  panFilePreviewUrl: "",

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