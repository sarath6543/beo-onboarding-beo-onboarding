import React from "react";
import { useState } from "react";
import AdminSidebar from "../../beolayer/layout/Admin/AdminSideBar";
import AdminTopBar from "../../beolayer/layout/Admin/AdminTopBar";
import ClientsMain from "./Clients/ClientsMain";
import CandidatesMain from "./Candidates/CandidatesMain";
import ReportsMain from "./Reports/ReportsMain";
import EmployeeRegisterMain from "./EmployeeRegister/EmployeeRegisterMain";

const AdminHomeMain = () => {
     const [activePage, setActivePage] = useState("candidates");

  const renderContent = () => {
    switch (activePage) {
      case "candidates":
         return <CandidatesMain />;
      case "clients":
        return <ClientsMain />;
      case "reports":
       return <ReportsMain />;
      case "employeeRegister":
        return <EmployeeRegisterMain/>;
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
