import React, { useState, useEffect } from "react";
import TopBar from "../../beolayer/layout/TopBar";
import LeftSideAppContainer from "../../beolayer/layout/LeftSideAppContainer";
import PageContainer from "../../beolayer/layout/PageContainer";

export default function Page3() {
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
      <TopBar isMobile={isMobile} onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <LeftSideAppContainer
          isOpen={isSidebarOpen}
          isMobile={isMobile}
          onClose={() => setIsSidebarOpen(false)}
        />
        <PageContainer title="Page 3">
          <p>This is the content of Page 3.</p>
        </PageContainer>
      </div>
    </div>
  );
}
