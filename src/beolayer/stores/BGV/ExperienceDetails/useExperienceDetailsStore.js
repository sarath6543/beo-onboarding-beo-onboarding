// stores/useExperienceStore.js
import { create } from "zustand";

const useExperienceStore = create((set) => ({
  experienceList: [
    {
      companyName: "",
      employeeId: "",
      designation: "",
      location: "",
      modeOfEmployement: "",
      startDate: "",
      lastWorkingDate: "",
      salaryFile: null,
      salaryPreviewUrl: "",
      relievingFile: null,
      relievingPreviewUrl: "",
      isCurrentOrg: false,
    },
  ],

  setExperienceList: (newList) =>
    set(() => ({
      experienceList: newList,
    })),

updateExperienceField: (index, field, value) =>
  set((state) => {
    const updated = [...state.experienceList];
    updated[index] = { ...updated[index], [field]: value };
    return { experienceList: updated };
  }),
    setExperienceField: (index, field, value) =>
    set((state) => {
      const updated = [...state.experienceList];
      updated[index] = { ...updated[index], [field]: value };
      return { experienceList: updated };
    })
}));


export default useExperienceStore;
