import { create } from 'zustand';

 const useEducationStore = create((set) => ({
  educationList: [
    {
      board: "",
      school: "",
      percentage: "",
      fromDate: "",
      toDate: "",
      specialization: "",
      modeOfEducation: "",
      certificate:null,
      certificateFilePreviewUrl:"",
      isHighest:"",
      key: "10th",
    },
  ],

  addEducation: (newEntry) =>
    set((state) => ({
      educationList: [...state.educationList, newEntry],
    })),
 setEducationalField: (index, field, value) =>
    set((state) => {
      const updated = [...state.educationList];
      updated[index][field] = value;
      return { educationList: updated };
    }),
  updateEducation: (index, name, value) =>
    set((state) => {
      const updated = [...state.educationList];
      updated[index][name] = value;
      return { educationList: updated };
    }),

  deleteEducation: (indexToRemove) =>
    set((state) => ({
      educationList: state.educationList.filter((_, i) => i !== indexToRemove),
    })),

  setEducationList: (list) => set({ educationList: list }),

})); 

 export default useEducationStore;
