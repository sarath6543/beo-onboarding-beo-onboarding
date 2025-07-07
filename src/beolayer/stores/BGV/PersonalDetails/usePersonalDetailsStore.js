import { create } from "zustand";

const usePersonalDetailsStore = create((set)=>({
    firstName:"",middleName:"",lastName:"",fathersName:"",dob:"",nationality:"",placeOfBirth:"",gender:"",MaritialStatus:"",email:"",pin:"",mobile:"",alternativeMobile:"",bloodGroup:"",photo:null,

    setPersonalDetailsFields: (name,value)=>
        set((state)=>({
            ...state, [name]:value,
        })),

    resetPersonalDetailsFields: ()=>
        set({
            firstName:"",middleName:"",lastName:"",fathersName:"",dob:"",nationality:"",placeOfBirth:"",gender:"",MaritialStatus:"",email:"",pin:"",mobile:"",alternativeMobile:"",bloodGroup:"",photo:null,
        })

}));

export default usePersonalDetailsStore;