import { create } from 'zustand';

 const useEducationStore = create((set) => ({
  formDataList: [
    {
      board: "",
      school: "",
      percentage: "",
      fromDate: "",
      toDate: "",
      specialization: "",
      modeOfEducation: "",
      key: "10th Standard",
    },
  ],


  addEducation: (newEntry) =>
    set((state) => ({
      formDataList: [...state.formDataList, newEntry],
    })),

  updateField: (index, name, value) =>
    set((state) => {
      const updated = [...state.formDataList];
      updated[index][name] = value;
      return { formDataList: updated };
    }),

  deleteEducation: (indexToRemove) =>
    set((state) => ({
      formDataList: state.formDataList.filter((_, i) => i !== indexToRemove),
    })),

  setFormDataList: (list) => set({ formDataList: list }),

  
//   addEducation: (newEntry) =>
//     set((state) => ({
//       formDataList: [...state.formDataList, newEntry],
//     })),

//   updateField: (index, name, value) =>
//     set((state) => {
//       const updated = [...state.formDataList];
//       updated[index][name] = value;
//       return { formDataList: updated };
//     }),

//   deleteEducation: (indexToRemove) =>
//     set((state) => ({
//       formDataList: state.formDataList.filter((_, i) => i !== indexToRemove),
//     })),

//   setFormDataList: (list) => set({ formDataList: list }),
})); 

 export default useEducationStore;