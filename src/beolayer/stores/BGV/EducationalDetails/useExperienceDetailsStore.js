import { create } from 'zustand'
 
const useExperienceStore = create((set) => ({
  experienceList: [
    {
      companyName: '',
      employeeId: '',
      designation: '',
      location: '',
      modeOfEmployement: '',
      startDate: '',
      lastWorkingDate: '',
    },
  ],
  addExperience: () =>
    set((state) => ({
      experienceList: [
        ...state.experienceList,
        {
          companyName: '',
          employeeId: '',
          designation: '',
          location: '',
          modeOfEmployement: '',
          startDate: '',
          lastWorkingDate: '',
        },
      ],
    })),
  removeExperience: (index) =>
    set((state) => ({
      experienceList: state.experienceList.filter((_, i) => i !== index),
    })),
  setExperienceList: (newList) => set({ experienceList: newList }),
}))
export default useExperienceStore