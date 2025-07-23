import React from 'react'
import AccordionSection from '../../../beolayer/components/base/Accordian/AccordionSection'
import EducationDetailsForm from './forms/EducationDetailsForm'
import { GiGraduateCap } from "react-icons/gi";

const EducationDetailsMain = () => {
  return (
    <AccordionSection icon={<GiGraduateCap />} title="Education Details">
      <EducationDetailsForm/>
    </AccordionSection>
  )
}

export default EducationDetailsMain