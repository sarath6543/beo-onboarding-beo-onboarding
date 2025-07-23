import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import image_test from "@/assets/image_test.svg";
import buddy from "@/assets/know-your-buddy.svg";
import policy from "@/assets/policies.svg";
import life from "@/assets/life.svg";
import location from "@/assets/location.svg";
import PageLayout from "../../beolayer/layout/PageLayout";
import StepItem from "../../beolayer/components/base/Step/StepItem";

const Home = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const steps = [
    { label:  t("home.review"), status: "Completed", path: "/offer" },
    {
      label: t("home.BGV_Submission"),
      status: "InProgress",
      path: "/back-ground-verification-main",
    },
    {
      label: t("home.Pre_Joining"),
      status: "Yet to start",
      path: "/formalities",
    },
    { label: t("home.Day_1"), status: "Yet to start", path: "/day1" },
  ];

  const tiles = [
    {
      title: t("home.process"),
      image: image_test,
      path: "/onboarding",
      text: t("home.view_more"),
      icon:image_test,      
    },
    { 
      title: t("home.policies"), 
      image: policy, 
      // path: "/policies",
          url:"https://beo-software.in/",
      text:t("home.view_more"),
      icon:image_test, 
       external: true,
    },

    { 
      title: t("home.Life_at_BEO"), 
      image: life, 
      // path: "/life-at-beo",
      url:"https://beo-software.in/life-at-beo.html",
      text:t("home.view_more"),
      icon:image_test,  
       external: true,

    },
    
    { 
      title: t("home.Locations"), 
      image: location, 
      // path: "/locations", 
      url:"https://beo-software.in/",
      text:t("home.view_more"),
      icon:image_test, 
       external: true,
    },
 
    { 
      title: t("home.buddy"), 
      image: buddy, 
      path: "/buddy",
      text:t("home.view_more"),
      icon:image_test,  
    },
  ];

const handleTileClick = (tile) => {
  if (tile.external && tile.url) {
    window.open(tile.url, "_blank"); // opens in a new tab
  } else if (tile.path) {
    navigate(tile.path);
  }
};

  return (
    <PageLayout title={t("home.title")}>
      <div className="">
        <div className="flex flex-wrap gap-5 mt-5">
          {/* Left Box */}
          <div className="border-gray-300 border bg-white rounded-2xl p-5 shadow-md flex-1 min-w-[280px]">
            <h3 className="mb-4 text-2xl font-normal">{t("home.sub_title")}</h3>
            <ul className="list-none p-0 m-0 space-y-4">
              {steps.map((step, index) => (
                <StepItem
                  key={index}
                  icon="📄"
                  label={step.label}
                  status={step.status}
                  path={step.path}
                />
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-wrap gap-5">
              <div className="grid grid-cols-2 gap-5 flex-2 min-w-[280px]">
                {tiles.slice(0, 4).map((tile, index) => (
                  <div
                    key={index}
                    className="border-gray-300 border bg-white rounded-2xl p-2 shadow-md text-center cursor-pointer flex flex-col justify-center"
                    onClick={() => handleTileClick(tile)}
                  >
                    <img
                      src={tile.image}
                      alt={tile.title}
                      className="max-w-full object-contain mb-2"
                    />
                    <h3 className="pb-2 text-xl font-normal">{tile.title}</h3>
                    <h1 className="pb-4 font-light">{tile.text}</h1>                                    
                  </div>
                ))}
              </div>

              <div className="flex-1 min-w-[280px]">
                <div
                  className="bg-[#EDEEF0] rounded-2xl shadow-md text-center cursor-pointer flex flex-col justify-center h-full relative"
                  onClick={() => handleTileClick(tiles[4])}
                >
                  <img
                    src={tiles[4].image}
                    alt={tiles[4].title}
                    className="max-w-full object-contain absolute bottom-0 rounded-b-2xl"/>
                  <h3 className="absolute left-0 right-0 mb-6">{tiles[4].title}</h3>
                  <h1 className="absolute left-0 right-0 pt-6">{tiles[4].text}</h1>
                </div>
              </div>
            </div>

            <div className="mt-5 bg-white p-4 rounded-2xl shadow-md">
              <h3 className="font-normal">{t("home.news")}</h3>
              <p className="text-sm font-light mt-1 text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
                 Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...               
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
