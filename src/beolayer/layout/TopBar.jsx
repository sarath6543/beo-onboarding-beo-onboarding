import React, { useState } from "react";
import beo_logo from "../../assets/beo_logo.png";
import { useTranslation } from "react-i18next";

export default function TopBar() {
  const [showLogout, setShowLogout] = useState(false);
  const { t, i18n } = useTranslation();
  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleLogout = () => setShowLogout((prev) => !prev);

  return (
    <header
      className="w-full bg-white text-black flex items-center justify-between px-5 relative"
      style={{ height: 88 }}
    >
      <div className="flex items-center space-x-4">
        {/* {isMobile && (
          <button
            onClick={onToggleSidebar}
            className="text-2xl focus:outline-none"
            aria-label="Toggle Sidebar"
          >
            ☰
          </button>
        )} */}
        <img
          src= {beo_logo} 
          alt="Logo"
          style={{ width: 127, height: 56, objectFit: "contain" }}
        />
      </div>

      <div className="flex items-center space-x-4 relative">
   
        <button
          className="relative w-8 h-8 flex items-center justify-center text-black focus:outline-none"
          aria-label="Notifications"
        >
          🔔
       
          <span
            className="absolute top-1 right-1 block w-2 h-2 bg-red-600 rounded-full"
            aria-hidden="true"
          ></span>
        </button>

   
        <button
          // onClick={toggleLogout}
          className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center focus:outline-none"
          aria-label="User Menu"
        >
          👤
        </button>

        {/* Down Arrow */}
        <svg
          className="w-4 h-4 text-black cursor-pointer"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleLogout}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>

        {/* Logout dropdown */}
        {showLogout && (
          <div className="absolute top-1 right-0 mt-12 w-32 bg-white text-black shadow-lg rounded z-50">
            <button
              onClick={() => alert("Logged out")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Log out
            </button>

            <div className="relative group text-left py-2 hover:bg-gray-100 cursor-pointer">
              Language
              <div className="absolute w-60 right-32 px-6 top-0 hidden group-hover:block bg-white text-black shadow-lg rounded z-50">
                <div className="text-center py-2">
                  <span>{t("login.language")}: </span>
                  <button
                    type="button"
                    onClick={() => switchLanguage("en")}
                    className={`mx-2 ${
                      i18n.language === "en" ? "text-gray-700 font-medium" : "text-black"
                    } hover:text-blue-500`}
                  >
                    EN
                  </button>
                  |
                  <button
                    type="button"
                    onClick={() => switchLanguage("de")}
                    className={`mx-2 ${
                      i18n.language === "de" ? "text-gray-700 font-medium" : "text-black"
                    } hover:text-blue-500`}
                  >
                    DE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
