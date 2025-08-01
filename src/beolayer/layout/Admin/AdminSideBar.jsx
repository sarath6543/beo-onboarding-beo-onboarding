import React from "react";
import { FaHome, FaFileAlt, FaUser } from "react-icons/fa";
import beo_logo from "@/assets/beo_logo.png"; 

const menuItems = [
  { key: "home", label: "Home", icon: <FaHome /> },
  { key: "offers", label: "Offer Letters", icon: <FaFileAlt /> },
  { key: "users", label: "Users", icon: <FaUser /> },
];

export default function AdminSidebar({ onNavigate, active }) {
  return (
    <aside className="w-64 bg-white text-black h-screen flex flex-col shadow-xl">
      <div className="p-6 flex justify-center items-center  border-[#E9E9E9]">
        <img src={beo_logo} alt="Logo" className="object-contain" />
      </div>

      <nav className="flex flex-col gap-1 p-4">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => onNavigate(item.key)}
            className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-[#E9E9E9] transition ${
              active === item.key ? "bg-[#E9E9E9]" : ""
            }`}
          >
            <span>{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
