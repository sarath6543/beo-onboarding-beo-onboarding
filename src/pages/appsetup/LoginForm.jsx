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
      <h3 className="mb-6 text-xl font-semibold text-center">{t("login")}</h3>

      <InputField
        label={t("email")}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <InputField
        label={t("password")}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {error && (
        <p className="text-red-500 text-sm text-center mt-2">{error}</p>
      )}

      <Button type="submit" disabled={loading}>
        {loading ? t("logging_in") : t("login")}
      </Button>

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
