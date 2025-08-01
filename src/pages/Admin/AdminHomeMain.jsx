import React from "react";
import { useState } from "react";
import AdminSidebar from "../../beolayer/layout/Admin/AdminSideBar";
import AdminTopBar from "../../beolayer/layout/Admin/AdminTopBar";
import { Outlet, useNavigate } from "react-router-dom";
import ClientsMain from "./Clients/ClientsMain";
import EmployeeRegisterMain from "./EmployeeRegister/EmployeeRegisterMain";
import ReportMain from "./Reports/ReportsMain";
import CandidatesMain from "./Candidates/CandidatesMain";

const AdminHomeMain = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("home");

  //   const renderContent = () => {
  //     switch (activePage) {
  //       case "home":
  //         return <div className="p-6 text-xl font-semibold">Welcome to the Admin Dashboard</div>;
  //       case "candidates":
  //         return <CandidatesMain/>
  //       case "clients":
  //         return <ClientsMain/>
  //       case "reports":
  //         return <ReportMain/>
  //       case "employeeRegister":
  //         return <EmployeeRegisterMain/>
  //       default:
  //         return <div className="p-6">Page not found</div>;
  //     }
  //   };
  return (
    <div className="flex h-screen overflow-hidden">
      {/* <Sidebar onNavigate={setActivePage} /> */}
      <AdminSidebar onNavigate={setActivePage} active={activePage} />
      <div className="flex flex-col flex-grow">
        {/* <TopBar /> */}
        <AdminTopBar />
        <main className="flex-grow overflow-auto bg-gray-50">
          {/* <div className="p-6 text-xl font-semibold">
            Welcome to the Admin Dashboard
          </div> */}
   
        </main>
      </div>
    </div>
  );
};
export default AdminHomeMain;
