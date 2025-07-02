import React from "react";
import AccordionSection from "../../../beolayer/components/base/Accordian/AccordionSection";
import PANCardForm from "./forms/PANCardForm";
import PersonalDeatilsForm from "./forms/PersonalDeatilsForm";


export default function PersonalDetailsMain() {
  return (
    <>
     
      <AccordionSection title="PAN Card">
        <PANCardForm />
      </AccordionSection>

      <AccordionSection title="Personal Details">
        <PersonalDeatilsForm/>
      </AccordionSection>
    </>
  );
}
