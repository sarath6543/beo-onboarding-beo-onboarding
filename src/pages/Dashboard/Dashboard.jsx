import React, { useState } from "react";
import TopBar from "../../beolayer/layout/TopBar";
import LeftSideAppContainer from "../../beolayer/layout/LeftSideAppContainer";
import PageContainer from "../../beolayer/layout/PageContainer";
import BottomBar from "../../beolayer/layout/BottomBar";
import Grid from "../../beolayer/components/base/Grid/Grid";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Uncomment if you want the sidebar visible */}
        {/* 
        <LeftSideAppContainer
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        /> 
        */}

        <PageContainer title="Dashboard">
          <p>Welcome to the dashboard!</p>
         
        </PageContainer>
      </div>

      <BottomBar />
    </div>
  );
};

export default Dashboard;
