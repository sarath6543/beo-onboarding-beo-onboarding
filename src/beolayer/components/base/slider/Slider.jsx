import PropTypes from "prop-types";
import clsx from "clsx";

//import components
import { Button } from "../base/buttons/beoui.buttons";

//import icon:
import FontIcon from "../base/icons/beoui.icons";


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
        "flex fixed h-screen z-[1000] top-0 right-0 p-2.5 transition-all duration-200",
        {
          "w-full md:w-72 lg:w-72 xl:w-72": size === "small",
          "w-full md:w-96 lg:w-96 xl:w-96": size === "medium",
          "w-full md:w-96 lg:w-1/2 xl:w-1/3": size === "large",
          "translate-x-0": showSlider,
          "translate-x-full": !showSlider,
        }
      )}
    >
      <div
        id="notification_content_slider"
        className="h-full w-full bg-white rounded shadow-custom"
      >
        <div className="h-10 w-full flex items-center justify-between rounded px-2.5">
          {/* <span className="font-medium flex text-text"><FontIcon iconName="Pricetags" color="#474cef" />{headline}</span> */}
          <span className="font-semibold flex text-text">
            <FontIcon iconName={icon} color={color} />
            {headline}
          </span>
          <Button
            type="close"
            icon={<FontIcon iconName="Closebox" />}
            onClick={() => setShowSlider(!showSlider)}
          ></Button>
        </div>

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
