import { useState } from "react";
import { http} from "../interceptor";
import  apiPaths  from "../apiPaths";

export function useAuthQuery() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await http.post(apiPaths.login, { email, password });
      const token = response.data.token;

      if (token) {
        localStorage.setItem("accessToken", token);
        // Optionally return token or user data
        return { token };
      } else {
        throw new Error("Token not found in response.");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Login failed.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    error,
  };
}
