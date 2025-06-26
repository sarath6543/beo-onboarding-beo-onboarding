import React, { useState, useEffect } from "react";
import TopBar from "../../beolayer/layout/TopBar";
import LeftSideAppContainer from "../../beolayer/layout/LeftSideAppContainer";
import PageContainer from "../../beolayer/layout/PageContainer";

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <TopBar
        isMobile={isMobile}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="flex flex-1 overflow-hidden">
        <LeftSideAppContainer
          isOpen={isSidebarOpen}
          isMobile={isMobile}
          onClose={() => setIsSidebarOpen(false)}
        />
      <PageContainer title="Dashboard">
         <div className="flex flex-col h-190 items-center justify-center text-white">
          <p className='text-4xl'>WELCOME TO</p>
          <p className="text-5xl font-bold">BEO ONBOARDING</p>
        </div>

     </PageContainer>
      </div>
    </div>
  );
};

export default Dashboard;
