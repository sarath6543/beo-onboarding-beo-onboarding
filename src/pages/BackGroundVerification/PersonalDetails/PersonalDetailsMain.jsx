import React from "react";
import AccordionSection from "../../../beolayer/components/base/Accordian/AccordionSection";
import PANCardForm from "./forms/PANCardForm";


export default function PersonalDetailsMain() {
  return (
    <>
     
      <AccordionSection title="PAN Card">
        <PANCardForm />
      </AccordionSection>
    </>
  );
}
