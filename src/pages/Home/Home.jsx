import React from "react";
import { useNavigate } from "react-router-dom";
import image_test from "../../assets/image_test.svg";
import PageLayout from "../../beolayer/layout/PageLayout";
import StepItem from "../../beolayer/components/base/Step/StepItem";

const Home = () => {
  const navigate = useNavigate();

  const steps = [
    { label: "Review & Accept offer", status: "Completed", path: "/offer" },
    {
      label: "BGV Document Submission",
      status: "InProgress",
      path: "/back-ground-verification-main",
    },
    {
      label: "Pre Joining Formalities",
      status: "Yet to start",
      path: "/formalities",
    },
    { label: "Your Day 1", status: "Yet to start", path: "/day1" },
  ];

  const tiles = [
    {
      title: "Your Onboarding Process",
      image: image_test,
      path: "/onboarding",
    },
    { title: "Policies", image: image_test, path: "/policies" },
    { title: "Know your Buddy", image: image_test, path: "/buddy" },
   {
    title: "Locations",
    image: image_test,
    path: "https://beo-software.in/",
    external: true,
  },
    { title: "Life at BEO", image: image_test, path: "/life-at-beo" },
  ];

const handleTileClick = (tile) => {
  if (!tile.path) return;

  if (tile.external) {
    window.open(tile.path, "_blank", "noopener,noreferrer");
  } else {
    navigate(tile.path);
  }
};

  return (
    <PageLayout title="Onboarding">
      <div className="font-[Segoe UI]">
        <div className="flex flex-wrap gap-5 mt-5">
          {/* Left Box */}
          <div className="bg-white rounded-lg p-5 shadow-md flex-1 min-w-[280px]">
            <h3 className="mb-4 text-xl font-semibold">Let's Get You Settled In!</h3>
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
          <div className="flex flex-col flex-1 min-w-[280px]">
            <div className="flex flex-wrap gap-5">
              <div className="grid grid-cols-2 gap-5 flex-2 min-w-[280px]">
                {tiles.slice(0, 4).map((tile, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-md text-center cursor-pointer flex flex-col justify-center"
                    onClick={() => handleTileClick(tile)}
                  >
                    <img
                      src={tile.image}
                      alt={tile.title}
                      className="max-w-full object-contain mb-2"
                    />
                    <h4>{tile.title}</h4>
                  </div>
                ))}
              </div>

              <div className="flex-1 min-w-[280px]">
                <div
                  className="bg-white rounded-lg p-4 shadow-md text-center cursor-pointer flex flex-col justify-center h-full"
                  onClick={() => handleTileClick(tiles[4])}
                >
                  <img
                    src={tiles[4].image}
                    alt={tiles[4].title}
                    className="max-w-full h-[100px] object-contain mb-2"
                  />
                  <h4>{tiles[4].title}</h4>
                </div>
              </div>
            </div>

            <div className="mt-5 bg-white p-4 rounded-lg shadow-md h-[160px]">
              <strong>Important news</strong>
              <p className="text-sm mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
                 Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
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
