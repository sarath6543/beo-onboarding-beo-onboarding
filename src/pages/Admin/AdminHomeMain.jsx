import React from "react";
import AdminSidebar from "../../beolayer/layout/Admin/AdminSideBar";
import AdminTopBar from "../../beolayer/layout/Admin/AdminTopBar";

const AdminHomeMain = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* <Sidebar onNavigate={setActivePage} /> */}
      <AdminSidebar />
      <div className="flex flex-col flex-grow">
        {/* <TopBar /> */}
        <AdminTopBar />
        <main className="flex-grow overflow-auto bg-gray-50"></main>
      </div>
    </div>
  );
};
export default AdminHomeMain;
