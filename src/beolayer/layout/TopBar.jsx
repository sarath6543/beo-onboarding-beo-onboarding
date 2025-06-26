import React from "react";
import logo from '../../assets/beo-logo.png'
import UserButton from "../components/base/UserButton/userbutton";

export default function TopBar({ isMobile, onToggleSidebar }) {
  return (
    <header className="h-16 bg-gray-300 text-white flex items-center justify-between px-5">
      {isMobile && (
        <button
          onClick={onToggleSidebar}
          className="text-2xl focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          ☰
        </button>
      )}
      <div className="w-30">
        <img src={logo} alt="" />
      </div>
      <div>
        <UserButton/>
      </div>
    </header>
  );
}
