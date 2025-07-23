import React from 'react'
import AccordionSection from '../../../beolayer/components/base/Accordian/AccordionSection'
import DocumentationDetailsForm from './forms/DocumentationDetailsForm'
import { GrDocumentText } from "react-icons/gr";

const DocumentationDetailsMain = () => {
  return (
    <AccordionSection icon={<GrDocumentText />} title="Documentation Center">
        <DocumentationDetailsForm/>
    </AccordionSection>
  )
}

export default DocumentationDetailsMain