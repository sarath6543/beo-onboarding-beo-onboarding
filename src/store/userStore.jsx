import { data } from "react-router-dom";
import { create } from "zustand";

const userStore = create((set)=>({
    user:{
        name:"aravind",
        email:"aravindka14@gmail.com",
        age:"24"
    },
    setData: (data)=>set({user: data}),

    setUserField: (field, value) =>set((state) => ({user: { ...state.user, [field]: value },})),
    
    resetUserField : ()=>set({user:{name:"",email:"",age:""}})

}))

export default userStore