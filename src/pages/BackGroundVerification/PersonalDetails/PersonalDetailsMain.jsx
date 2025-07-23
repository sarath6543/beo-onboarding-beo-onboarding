import React from "react";
import AccordionSection from "../../../beolayer/components/base/Accordian/AccordionSection";
import PANCardForm from "./forms/PANCardForm";
import PersonalDeatilsForm from "./forms/PersonalDeatilsForm";
import AadhaarForm from "./forms/AadhaarForm";
import AddressForm from "./forms/AddressForm";
import FontIcon from "../../../beolayer/components/base/Icons/FontIcon.jsx.jsx";
import { BsPersonCircle } from "react-icons/bs";
import { RiIdCardLine } from "react-icons/ri";
import { LiaIdCardAltSolid } from "react-icons/lia";
import { PiAddressBook } from "react-icons/pi";

export default function PersonalDetailsMain() {
  return (
    <>
      <AccordionSection icon={<BsPersonCircle />} title="Personal Details">
        <PersonalDeatilsForm />
      </AccordionSection>

      <AccordionSection icon={<RiIdCardLine />} title="PAN Card">
        <PANCardForm />
      </AccordionSection>

      <AccordionSection icon={<LiaIdCardAltSolid />} title="Aadhaar Details">
        <AadhaarForm />
      </AccordionSection>

      <AccordionSection icon={<PiAddressBook />} title="Address">
        <AddressForm />
      </AccordionSection>

    </>
  );
}
