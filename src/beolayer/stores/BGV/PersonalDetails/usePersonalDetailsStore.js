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
  photoPreviewUrl: "https://www.gstatic.com/webp/gallery/1.webp", // <-- Add this
  bloodGroup: "",

  setPersonalDetailsField: (field, value) =>
    set((state) => ({
      ...state,
      [field]: value,
    })),
}));

export default usePersonalDetailsStore;
