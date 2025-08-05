import React, { useState, useRef, useEffect } from "react";
import notification from "@/assets/bell.svg";
import avatar from "@/assets/avatar.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function AdminTopBar() {
  const [showLogout, setShowLogout] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const switchLanguage = (lng) => i18n.changeLanguage(lng);

  const toggleLogout = (e) => {
    e.stopPropagation();
    setShowLogout((prev) => !prev);
    setShowLanguage(false);
  };

  const toggleLanguage = () => {
    setShowLanguage((prev) => !prev);
  };

  const logoutClickHandler = () => navigate("/app/setup");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowLogout(false);
        setShowLanguage(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="w-full bg-white text-black flex items-center justify-between px-6 pr-10 relative border-b-[1px] border-gray-100"
      style={{ height: 88 }}
    >
      {/* You can add a title or breadcrumb here if needed */}
      <div className="flex-grow" />

      {/* Right Section */}
      <div className="flex items-center gap-4 relative">
        <button
          className="relative w-8 h-8 flex items-center justify-center"
          aria-label="Notifications"
        >
          <img src={notification} alt="Notification" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full" />
        </button>

        <button className="w-8 h-8 rounded-full flex items-center justify-center">
          <img src={avatar} alt="Avatar" />
        </button>

        <svg
          className={`w-4 h-4 cursor-pointer transition-transform duration-200 ${
            showLogout ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          onClick={toggleLogout}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>

        {/* Dropdown */}
        <div
          ref={dropdownRef}
          className={`absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-md z-50 overflow-hidden transition-all duration-300 ease-in-out ${
            showLogout
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={logoutClickHandler}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
          >
            Log out
          </button>
          <button
            onClick={toggleLanguage}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
          >
            Language
          </button>

          {showLanguage && (
            <div className="mt-1 ml-4">
              <div className="py-1 text-xs text-gray-600">
                {t("login.language")}:
              </div>
              <div className="flex gap-2 py-1">
                <button
                  onClick={() => switchLanguage("en")}
                  className={`text-sm ${
                    i18n.language === "en"
                      ? "font-semibold text-black"
                      : "text-gray-700"
                  } hover:text-black`}
                >
                  EN
                </button>
                <span>|</span>
                <button
                  onClick={() => switchLanguage("de")}
                  className={`text-sm ${
                    i18n.language === "de"
                      ? "font-semibold text-black"
                      : "text-gray-700"
                  } hover:text-black`}
                >
                  DE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
