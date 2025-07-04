import React, { useState } from 'react'
import FormWrapper from '../../../../beolayer/components/base/Form/FormWrapper'
import InputField from '../../../../beolayer/components/base/InputField/InputField';

const EducationDetailsForm = () => {

    const [formDataList,setFormDataList] = useState([
        {
        board:"",
        school:"",
        percentage:"",
        fromDate:"",
        toDate:"",
        key:"10th Standard"
        },
    ]);

    const handleSelectChange = (e) => {
    const { value } = e.target;
    setFormDataList((prev) => [
        ...prev,
        {
        board: "",
        school: "",
        percentage: "",
        fromDate: "",
        toDate: "",
        key: value
        }
    ]);
    };

    const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setFormDataList((prev) => {
        const updated = [...prev];
        updated[index][name] = value;
        return updated;
    });
    };

    const handleDeleteForm =(removeForm) =>{
      setFormDataList((prev)=> prev.filter((_,index)=> index !==removeForm))
    }

    const disableDropdown = (value) => {
        return formDataList.some(item => item.key === value);
    };

    const handleSave = () => {
        console.log("Saving educational details:", formDataList);
    };


  return (
    <FormWrapper columns={1} onSave={handleSave}> 
       {formDataList.map((formData,index)=>(
        <>
            <p className='text-xl font-medium'>{formData.key}</p>
                <FormWrapper columns={3}>    
                    <InputField
                        label="Board"
                        type="text"
                        value={formData.board}
                        onChange={(e) => handleInputChange(e, index)}
                        name="board"
                        asterisk
                    />
                    <InputField
                        label="School"
                        type="text"
                        value={formData.school}
                        onChange={(e) => handleInputChange(e, index)}
                        name="school"
                        asterisk
                    />
                    <InputField
                        label="Percentage"
                        type="text"
                        value={formData.percentage}
                        onChange={(e) => handleInputChange(e, index)}
                        name="percentage"
                        asterisk
                    />
                
                    <InputField
                        label="From Date"
                        type="date"
                        value={formData.fromDate}
                        onChange={(e) => handleInputChange(e, index)}
                        name="fromDate"
                        asterisk
                    />
                    <InputField
                        label="To Date"
                        type="date"
                        value={formData.toDate}
                        onChange={(e) => handleInputChange(e, index)}
                        name="toDate"
                        asterisk
                    /> 
                    <InputField
                        label="Certificate"
                        type="upload"
                        value={formData.toDate}
                        onChange={(e) => handleInputChange(e, index)}
                        name=""
                        asterisk
                    />  
                </FormWrapper>
               
                {formDataList.length > 1 &&
                    <>
                        <div className="flex justify-end">
                        <button
                            className="px-4 py-2 rounded transition-colors duration-300 text-base bg-red-200 hover:bg-red-500 hover:text-white" 
                            onClick={()=>handleDeleteForm(index)}
                        >Delete -</button>
                        </div>
                    </>  
                }

                <div className="my-4 me-6 flex justify-end">
                    <label className="flex items-center space-x-2">
                        <span className="text-sm">Click if This is your highest education qualification</span>
                        <input
                        className="w-4 h-5"
                        type="checkbox"
                        // checked={}
                        // onChange={}
                        />
                    </label>
                </div>

             <hr />    
        </>
        ))}

            <div className="flex justify-start">     
            <select 
                onChange={handleSelectChange}
                defaultValue=""
                className="mt-1 block px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="" disabled hidden>Add Education</option>
                <option disabled={disableDropdown("12th")} value="12th">12th standard</option>
                <option disabled={disableDropdown("Diploma")} value="Diploma">Diploma</option>
                <option disabled={disableDropdown("UG")} value="UG">UG</option>
                <option disabled={disableDropdown("PG")} value="PG">PG</option>
                <option disabled={disableDropdown("Others")} value="Others">Others</option>
            </select>
            </div>



    </FormWrapper>
  )
}

export default EducationDetailsForm