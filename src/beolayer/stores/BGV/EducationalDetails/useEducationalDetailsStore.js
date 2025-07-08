import { create } from "zustand";

const useEducationStore = create((set)=>({
    educationList : [
        {
            board:"",
            school:"",
            precentage:"",
            fromDate:"",
            toDate:"",
            certificate:"",
            specialization:"",
            modeOfEducation:"",
            key:"10th Standard"
        }
    ],

    addEducation : ()=>set((state) => ({
        educationList : [
            ...state.educationList,
            {
                board:"",
                school:"",
                precentage:"",
                fromDate:"",
                toDate:"",
                certificate:"",
                specialization:"",
                modeOfEducation:"",
                key:""
            }
        ],
    })),

    removeEducation : (index) => set((state)=> ({
        educationList: state.educationList.filter((_, i) => i !== index),
    })),
    setEducationList: (newList) => set({ educationList: newList }),
}))

export default useEducationStore;