import React, { useState } from "react";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import PageContainer from "./PageContainer";

export default function PageLayout({ title, children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col h-screen">
      <TopBar isMobile={isMobile} onToggleSidebar={handleToggleSidebar} />
      
      <main className="flex-1 overflow-auto">
        <PageContainer title={title}>
          {children}
        </PageContainer>
      </main>

      <BottomBar />
    </div>
  );
}
