import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import PageContainer from "./PageContainer";

export default function PageLayout({ title, children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div style={{ flex: "0 0 88px" }}>
        <TopBar isMobile={isMobile} onToggleSidebar={handleToggleSidebar} />
      </div>

      <div style={{ flex: "1 1 auto", overflow: "auto" }}>
        <PageContainer title={title}>{children}</PageContainer>
      </div>

      <div style={{ flex: "0 0 56px" }}>
        <BottomBar />
      </div>
    </div>
  );
}
