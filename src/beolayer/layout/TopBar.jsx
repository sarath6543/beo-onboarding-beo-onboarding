import React, { useState, useRef, useEffect } from "react";
import beo_logo from "../../assets/beo_logo.png";
import notification from "@/assets/bell.svg";
import avatar from "@/assets/avatar.svg";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function TopBar() {
 const [showLogout, setShowLogout] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const { t, i18n } = useTranslation();
   const navigate = useNavigate();

  const dropdownRef = useRef(null); // for detecting outside clicks

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleLogout = () => {
    setShowLogout((prev) => !prev);
    setShowLanguage(false);
  };

  const toggleLanguage = () => {
    setShowLanguage((prev) => !prev);
  };
  const logoutClickHandler = () => {
    console.log("inside logout");
      navigate("/app/setup");
  };

  // ✅ Close on outside click
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
      className="w-full bg-white text-black flex items-center justify-between px-10 relative"
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

      <div className="flex items-center gap-4 min-w-[200px] justify-end relative shrink-0">
   
        <button
          className="relative w-8 h-8 flex items-center justify-center text-black focus:outline-none"
          aria-label="Notifications"
        >
          <img
          src= {notification} 
          alt="Logo"
          
        />
       
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
         <img
          src= {avatar} 
          alt="avatar"
          
        />
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
          <div
              ref={dropdownRef} className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-md z-50 animate-fade-slide-down">
            <button
              // onClick={() => alert("Logged out")}
               onClick={logoutClickHandler}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition"
            >
              {/* 🔒 Log out */}
              Log out
            </button>
            <button
              onClick={toggleLanguage}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
            >
              {/* 🌐 Language */}
              Language
            </button>

            {/* Language Submenu */}
            {showLanguage && (
              <div className="mt-1 ml-4 transition-all duration-200">
                <div className="py-1">
                  <span className="text-xs text-gray-600">
                    {t("login.language")}:
                  </span>
                </div>
                <div className="flex gap-2 py-1">
                  <button

                    onClick={() => switchLanguage("en")}
                    className={`text-sm ${
                      i18n.language === "en"
                        ? "font-semibold text-black"
                        : "text-gray-700"
                    } hover:text-black transition`}
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
                    } hover:text-black transition`}
                  >
                    DE
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
