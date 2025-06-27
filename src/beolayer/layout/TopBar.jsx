import React, { useState } from "react";

export default function TopBar({ isMobile, onToggleSidebar }) {
  const [showLogout, setShowLogout] = useState(false);

  const toggleLogout = () => setShowLogout((prev) => !prev);

  return (
    <header className="h-16 bg-blue-600 text-white flex items-center justify-between px-5 relative">
      <div className="flex items-center space-x-4">
        {isMobile && (
          <button
            onClick={onToggleSidebar}
            className="text-2xl focus:outline-none"
            aria-label="Toggle Sidebar"
          >
            ☰
          </button>
        )}
        <h1 className="text-lg font-bold">My Logo</h1>
      </div>

      <div className="relative">
        <button
          onClick={toggleLogout}
          className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center focus:outline-none"
          aria-label="User Menu"
        >
          👤
        </button>

        {showLogout && (
          <div className="absolute right-0 mt-2 w-32 bg-white text-black shadow-lg rounded z-50">
            <button
              onClick={() => alert("Logged out")} // Replace with actual logout logic
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
