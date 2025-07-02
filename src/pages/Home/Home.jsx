import React from "react";
import { useNavigate } from "react-router-dom";
import image_test from "../../assets/image_test.png";
import PageLayout from "../../beolayer/layout/PageLayout";
import StepItem from "../../beolayer/components/base/Step/StepItem";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const steps = [
    { label: "Review & Accept offer", status: "Completed", path: "/offer" },
    {
      label: "BGV document submission",
      status: "InProgress",
      path: "/back-ground-verification-main",
    },
    {
      label: "Pre joining formalities",
      status: "Yet to start",
      path: "/formalities",
    },
    { label: "Your day 1", status: "Yet to start", path: "/day1" },
  ];

  const tiles = [
    {
      title: "Your Onboarding Process",
      image: image_test,
      path: "/onboarding",
    },
    { title: "Policies", image: image_test, path: "/policies" },
    { title: "Know your Buddy", image: image_test, path: "/buddy" },
    { title: "Locations", image: image_test, path: "/locations" },
    { title: "Life at BEO", image: image_test, path: "/life-at-beo" },
  ];

  const handleTileClick = (tile) => {
    if (tile.path) navigate(tile.path);
  };

  return (
    <PageLayout title="Onboarding">
      <div className="home-container">
        <div className="home-content">
          <div className="left-box">
            <h3>Let's Get You Settled In!</h3>
            <ul className="step-list">
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

          <div className="tiles-wrapper">
            <div className="tiles-grid">
              <div className="left-tiles">
                {tiles.slice(0, 4).map((tile, index) => (
                  <div
                    key={index}
                    className="tile-box"
                    onClick={() => handleTileClick(tile)}
                  >
                    <img
                      src={tile.image}
                      alt={tile.title}
                      className="tile-image"
                    />
                    <h4>{tile.title}</h4>
                  </div>
                ))}
              </div>

              <div className="right-tile">
                <div
                  className="tile-box"
                  onClick={() => handleTileClick(tiles[4])}
                >
                  <img
                    src={tiles[4].image}
                    alt={tiles[4].title}
                    className="tile-image"
                  />
                  <h4>{tiles[4].title}</h4>
                </div>
              </div>
            </div>

            <div className="news-tile">
              <strong>Important news</strong>
              <p>
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
