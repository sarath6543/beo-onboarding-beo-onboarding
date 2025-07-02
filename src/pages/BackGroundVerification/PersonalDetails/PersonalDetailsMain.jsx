import React from "react";
import AccordionSection from "../../../beolayer/components/base/Accordian/AccordionSection";
import PANCardForm from "./forms/PANCardForm";
import PersonalDeatilsForm from "./forms/PersonalDeatilsForm";
import AadhaarForm from "./forms/AadhaarForm";
import AddressForm from "./forms/AddressForm";


export default function PersonalDetailsMain() {
  return (
    <>
      <AccordionSection title="Personal Details">
        <PersonalDeatilsForm/>
      </AccordionSection>
     
      <AccordionSection title="PAN Card">
        <PANCardForm />
      </AccordionSection>

      <AccordionSection title="Aadhaar Details">
        <AadhaarForm/>
      </AccordionSection>

      <AccordionSection title="Address">
        <AddressForm/>
      </AccordionSection>
      
    </>
  );
}
