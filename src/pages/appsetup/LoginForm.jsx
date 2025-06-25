// LoginForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import InputField from "../../beolayer/components/base/InputField/InputField";
import Button from "../../beolayer/components/base/Button/Button";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
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
      />
      <InputField
        label={t("password")}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit">{t("login")}</Button>

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
