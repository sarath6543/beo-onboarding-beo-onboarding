import React from "react";
import AccordionSection from "../../../beolayer/components/base/Accordian/AccordionSection";
import PANCardForm from "./forms/PANCardForm";
import PersonalDeatilsForm from "./forms/PersonalDeatilsForm";
import AadhaarForm from "./forms/AadhaarForm";
import AddressForm from "./forms/AddressForm";
import FontIcon from "../../../beolayer/components/base/Icons/FontIcon.jsx.jsx";


export default function PersonalDetailsMain() {
  return (
    <>
      <AccordionSection icon={<FontIcon iconName="Person" />} title="Personal Details">
        <PersonalDeatilsForm />
      </AccordionSection>

      <AccordionSection icon={<FontIcon iconName="Person" />} title="PAN Card">
        <PANCardForm />
      </AccordionSection>

      <AccordionSection icon={<FontIcon iconName="Person" />} title="Aadhaar Details">
        <AadhaarForm />
      </AccordionSection>

      <AccordionSection icon={<FontIcon iconName="Person" />} title="Address">
        <AddressForm />
      </AccordionSection>

    </>
  );
}
