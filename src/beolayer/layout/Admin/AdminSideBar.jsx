import React from "react";
import { FaHome, FaFileAlt, FaUser } from "react-icons/fa";
import beo_logo from "@/assets/beo_logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { key: "candidates", url: "admin-candidates", label: "Candidates", icon: <FaHome /> },
  { key: "clients", url: "admin-clients", label: "Clients", icon: <FaFileAlt /> },
  { key: "reports", url: "admin-reports", label: "Reports", icon: <FaUser /> },
  { key: "employeeRegister", url: "admin-employee_register", label: "Employee Register", icon: <FaUser /> },
];

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

const currentPath = location.pathname;


const normalizedPath = currentPath === "/admin-home" ? "/admin-home/admin-candidates" : currentPath;

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
    {menuItems.map((item) => {
      const fullPath = `/admin-home/${item.url}`;
      const isActive = normalizedPath === fullPath || normalizedPath.startsWith(fullPath + "/");

      return (
      <button
              key={item.key}
              onClick={() => navigate(fullPath)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 text-sm
                ${isActive ? "bg-[#F0F0F0] text-[#000] font-semibold shadow-inner" : "hover:bg-[#F9F9F9] text-[#555]"}
              `}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
      );
    })}
  </nav>
    </aside>
  );
}
