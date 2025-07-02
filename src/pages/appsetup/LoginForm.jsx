import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import InputField from "../../beolayer/components/base/InputField/InputField";
import Button from "../../beolayer/components/base/Button/Button";
import { useAuthQuery } from "../../queries/auth/useAuthQuery";
export const LoginForm = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading, error } = useAuthQuery(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result?.token) {
      navigate("/"); 
    }
   
  };

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (

      <form onSubmit={handleLogin}>
        {/* <h3 className="mb-6 text-xl font-semibold text-center">{t("BEO")}</h3> */}
        <div className="text-center mb-9">
          <p className="font-bold text-[45px] tracking-[3px]">ONBOARDING</p>
        </div>


  
        {/* <InputField
          label={t("Username")}
          placeholder="Enter Your Username"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /> */}
        <label className="block mb-4 text-sm font-medium text-gray-700">
          {t("Username")}
          <input
          placeholder="Enter Your Username"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-[10px] mt-1 block w-full px-6 py-4 border border-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        {/* <InputField
          label={t("password")}
          placeholder="Enter Your Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> */}
          <label className="block mb-4 text-sm font-medium text-gray-700">
                {t("password")}
                <input
                  placeholder="Enter Your Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="rounded-[10px] mt-1 block w-full px-6 py-4 border border-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </label>
  
        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}

        <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-600"
              />
              <label htmlFor="remember" style={{fontSize:"14px",fontWeight:400}} className="ml-2">
                Remember me
              </label>
            </div>
            <a href="Forgot" style={{fontSize:"14px",fontWeight:400}} className="hover:underline">
              Forgot password
            </a>
          </div>
  
        {/* <Button type="submit" disabled={loading}>
          {loading ? t("logging_in") : t("login")}
        </Button> */}

        <div className="mt-6 flex justify-center">
          <button
            style={{ backgroundColor: '#FFB700',fontWeight:"400",}}
            className="px-13 py-2 rounded-full shadow-xl"
            type="submit"
            disabled={loading}
          >
            {loading ? t("logging_in") : t("login")}
          </button>
        </div>


  
        <div className="mt-6 text-center">
          <span>{t("language")}: </span>
          <button
            type="button"
            onClick={() => switchLanguage("en")}
            className="text-blue-600 hover:underline mx-2"
          >
            EN
          </button>
          |
          <button
            type="button"
            onClick={() => switchLanguage("de")}
            className="text-blue-600 hover:underline mx-2"
          >
            DE
          </button>
        </div>
      </form>
  );
};
