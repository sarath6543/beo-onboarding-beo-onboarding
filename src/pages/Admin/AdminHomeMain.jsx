import React from "react";
import { useState } from "react";
import AdminSidebar from "../../beolayer/layout/Admin/AdminSideBar";
import AdminTopBar from "../../beolayer/layout/Admin/AdminTopBar";

const AdminHomeMain = () => {
     const [activePage, setActivePage] = useState("home");

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <div className="p-6 text-xl font-semibold">Welcome to the Admin Dashboard</div>;
      case "offers":
        return <AdminHomeMain />;
      case "users":
        return <div className="p-6 text-xl font-semibold">User Management</div>;
      default:
        return <div className="p-6">Page not found</div>;
    }
  };
  return (
    <div className="flex h-screen overflow-hidden">
      {/* <Sidebar onNavigate={setActivePage} /> */}
      <AdminSidebar onNavigate={setActivePage} active={activePage} />
      <div className="flex flex-col flex-grow">
        {/* <TopBar /> */}
        <AdminTopBar   />
       <main className="flex-grow overflow-auto bg-gray-50">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};
export default AdminHomeMain;
