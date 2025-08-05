import React from "react";
import { FaHome, FaFileAlt, FaUser } from "react-icons/fa";
import beo_logo from "@/assets/beo_logo.png";
import { Link } from "react-router-dom";

const menuItems = [
  { key: "candidates", url: "/admin-candidates", label: "Candidates", icon: <FaHome /> },
  { key: "clients", url: "/admin-clients", label: "Clients", icon: <FaFileAlt /> },
  { key: "reports", url: "/admin-reports", label: "Reports", icon: <FaUser /> },
  { key: "employeeRegister", url: "/admin-employee_register", label: "Employee Register", icon: <FaUser /> },
];

export default function AdminSidebar({ onNavigate, active }) {
  return (
    <aside
      className="w-64 bg-white text-black h-screen flex flex-col"
      style={{
        boxShadow: '6px 0 10px rgba(0, 0, 0, 0.15)',
        zIndex: 10,
        position: 'relative', 
      }}
    >
      <div className="p-6 flex justify-center items-center border-[#E9E9E9]">
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
