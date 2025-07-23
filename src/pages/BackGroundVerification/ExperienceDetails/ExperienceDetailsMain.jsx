import React from 'react'
import AccordionSection from '../../../beolayer/components/base/Accordian/AccordionSection'
import ExperienceDetailsForm from './form/ExperienceDetailsForm'
import { BsPersonSquare } from "react-icons/bs";

const ExperienceDetailsMain = () => {
  return (
   <AccordionSection icon={<BsPersonSquare />} title="Experience Details">
        <ExperienceDetailsForm/>
   </AccordionSection>
  )
}

export default ExperienceDetailsMain