import { get } from "react-hook-form";

const API_PATHS = {
  auth: {
    login: "api/login/login",
    register: "/auth/register",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
  },

};

export default API_PATHS;