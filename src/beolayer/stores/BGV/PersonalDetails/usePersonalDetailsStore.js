import { create } from "zustand";

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
  photoFile: null,
  photoPreviewUrl: "", // <-- Add this
  bloodGroup: "",

  setPersonalDetailsField: (field, value) =>
    set((state) => ({
      ...state,
      [field]: value,
    })),
}));

export default usePersonalDetailsStore;
