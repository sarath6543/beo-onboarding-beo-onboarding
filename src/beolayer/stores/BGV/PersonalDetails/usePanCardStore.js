// src/store/usePanCardStore.js
import { create } from "zustand";

const usePanCardStore = create((set) => ({
  panNumber: "",
  panName: "",
  panFile: null,

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
    }),
}));

export default usePanCardStore;
