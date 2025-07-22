import React from 'react';
import PropTypes from 'prop-types';
import { IoPersonCircle } from "react-icons/io5";
import { TiMortarBoard } from "react-icons/ti";
import { LuBookOpenText } from "react-icons/lu";
import { BsPersonGear } from "react-icons/bs";import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CgSoftwareUpload } from "react-icons/cg";
import { IoArrowBack } from "react-icons/io5";
import { FaAsterisk } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

const iconMap = {  
Person: IoPersonCircle,
Education: TiMortarBoard,
Documentation: LuBookOpenText,
Experience: BsPersonGear,
UpArrow: IoIosArrowUp,
DownArrow: IoIosArrowDown,
Asterisk: FaAsterisk,
Upload: CgSoftwareUpload,
Back: IoArrowBack,
Exclamation:FaCircleExclamation,
downIcon:FaChevronDown
};

const FontIcon = ({ iconName, color = '#000', size = '16px', display='inline', verticalAlign='text-bottom',margin="0.25rem"}) => {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) return null;

  return <IconComponent style={{ color, fontSize: size,display: display, verticalAlign:verticalAlign,margin:margin }}  />;
};

FontIcon.propTypes = {
  iconName: PropTypes.oneOf(Object.keys(iconMap)).isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  display: PropTypes.string,
  verticalAlign: PropTypes.string,
  margin: PropTypes.string,
};

export default FontIcon;
