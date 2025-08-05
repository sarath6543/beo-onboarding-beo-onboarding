// src/pages/Admin/AdminHomeMain.jsx
import { Outlet } from "react-router-dom";
import AdminSidebar from "../../beolayer/layout/Admin/AdminSideBar";
import AdminTopBar from "../../beolayer/layout/Admin/AdminTopBar";

const AdminHomeMain = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar />
      <div className="flex flex-col flex-grow">
        <AdminTopBar />
        <main className="flex-grow overflow-auto bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminHomeMain;
