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
      salaryPreviewUrl: "https://www.gstatic.com/webp/gallery/1.webp",
      relievingFile: null,
      relievingPreviewUrl: "https://www.gstatic.com/webp/gallery/1.webp",
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
}));

export default useExperienceStore;
