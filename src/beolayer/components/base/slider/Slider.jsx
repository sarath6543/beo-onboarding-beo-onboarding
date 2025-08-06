import PropTypes from "prop-types";
import clsx from "clsx";

//import components
// import { Button } from "../base/buttons/beoui.buttons";
// import Button from "../Button/Button.jsx";

//import icon:
import FontIcon from "../Icons/FontIcon.jsx";


export const Slider = ({
  children,
  showSlider,
  setShowSlider,
  headline,
  size = "small",
  icon,
  color,
}) => {
  return (
    <div
      id="notification_wrapper"
      className={clsx(
        "flex fixed h-screen z-[1000] top-0 right-0 p-2.5 transition-all duration-200 ",
        {
          "w-full md:w-72 lg:w-72 xl:w-72": size === "small",
          "w-full md:w-96 lg:w-96 xl:w-96": size === "medium",
          "w-full md:w-96 lg:w-[500px] xl:w-[500px]": size === "large",
          "translate-x-0": showSlider,
          "translate-x-full": !showSlider,
        }
      )}
    >
      <div
        id="notification_content_slider"
        className="h-full w-full bg-white rounded shadow-lg"
      >
        <div className="h-10 w-full flex items-center justify-between rounded my-3 py-9 px-6 ">
          {/* <span className="font-medium flex text-text"><FontIcon iconName="Pricetags" color="#474cef" />{headline}</span> */}
          <span className="flex text-2xl ms-5">
            <FontIcon iconName={icon} color={color} />
            {headline}
          </span>
          <button 
            onClick={() => setShowSlider(!showSlider)}>
              <FontIcon size="30" iconName="Closebox" />
          </button>
          {/* <Button
            type="close"
            icon={<FontIcon iconName="Closebox" />}
            onClick={() => setShowSlider(!showSlider)}
          ></Button> */}
        </div>
        <hr className="shadow-sm border-t border-gray-200"/>
        <div
          id="content_body"
          className="flex flex-col w-full rounded box-border overflow-hidden overflow-y-auto p-3"
          style={{ height: "calc(100% - 40px)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.node,
  showSlider: PropTypes.bool.isRequired,
  setShowSlider: PropTypes.func.isRequired,
  headline: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};
