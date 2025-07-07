import {create} from "zustand";
const usePersonalDetailsStore = create((set) => ({
    firstName: "",
    middleName: "",
    lastName: "",
    fathersName: "",
    dob: "",
    nationality: "",
    placeOfBirth: "",
    gender: "",
    maritalStatus: "",
    email: "",
    pin: "",
    mobile: "",
    alternateMobileNumber: "",
    photo: "",
    bloodGroup: "",
    photoFile: null,
    setPersonalDetailsField: (name, value) =>
    set((state) => ({
      ...state,
      [name]: value,
    })),
    resetPersonalDetails: () =>
    set(() => ({
      firstName: "",
      middleName: "",
      lastName: "",
      fathersName: "",
      dob: "",
      nationality: "",
      placeOfBirth: "",
      gender: "",
      maritalStatus: "",
      email: "",
      pin: "",
      mobile: "",
      alternateMobileNumber: "",
      photo: "",
      bloodGroup: "",
      photoFile: null,
    })),
}));
 

export default usePersonalDetailsStore;