import React, { useState, useEffect } from "react";
import TopBar from "../../beolayer/layout/TopBar";
import LeftSideAppContainer from "../../beolayer/layout/LeftSideAppContainer";
import PageContainer from "../../beolayer/layout/PageContainer";
import userStore from "../../store/userStore";
import { useTranslation } from "react-i18next";

export default function Page1() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const { user, setData, updateField } = userStore();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

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
      <div className="flex flex-1 overflow-auto">
        <LeftSideAppContainer
          isOpen={isSidebarOpen}
          isMobile={isMobile}
          onClose={() => setIsSidebarOpen(false)}
        />
        <PageContainer title="Page 1">
          <h1 className="text-2xl font-semibold mb-4">Welcome to the Profile Page!</h1>

          <div className="flex flex-col w-full items-center justify-center px-4">
            <h2 className="text-xl font-bold mb-2">Application</h2>
            <div className="flex items-center justify-center w-full">
              <div className="bg-black text-white p-6 rounded-xl flex flex-col items-center justify-center w-full max-w-xl space-y-4">
                <h2 className="text-lg font-semibold">{t("Welcome")}</h2>
                <h3 className="text-md">
                  <span className="font-semibold">Welcome,</span> {user.name}
                </h3>
                <h3 className="text-md font-semibold">User Details:</h3>
                <p>
                  <span className="font-semibold">Email:</span> {user.email}
                </p>
                <p>
                  <span className="font-semibold">Age:</span> {user.age}
                </p>

                <div className="flex gap-4 pt-4">
                  <button
                    className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
                    onClick={() => changeLanguage("en")}
                  >
                    English
                  </button>
                  <button
                    className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
                    onClick={() => changeLanguage("de")}
                  >
                    Français
                  </button>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </div>
  );
}
