import React from "react";

export default function TopBar({ isMobile, onToggleSidebar }) {
  return (
    <header className="h-16 bg-blue-600 text-white flex items-center justify-between px-5">
      {isMobile && (
        <button
          onClick={onToggleSidebar}
          className="text-2xl focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          ☰
        </button>
      )}
      <h1 className="text-lg font-semibold">Top Bar</h1>
      <div></div>
    </header>
  );
}
