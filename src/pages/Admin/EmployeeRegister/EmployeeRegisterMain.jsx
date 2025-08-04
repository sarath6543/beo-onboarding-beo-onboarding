import react, { useState } from "react";
import FontIcon from "../../../beolayer/components/base/Icons/FontIcon.jsx";


const EmployeeRegisterMain = () => {
    const [showSlider,setShowSlider] = useState(false);

    return (
    <div className="p-5 py-8 flex justify-between items-center">
        <div className="text-2xl">Employee Registration</div>
        <div className="flex gap-7 ">
            <div className="flex border rounded-lg items-center p-2 w-75">
                <FontIcon iconName={"search"}/>
                <input placeholder=" Search..." className="outline-none focus:outline-none focus:ring-0 focus:border-transparent text-sm " type="text" />
            </div>
            <button onClick={()=>setShowSlider(true)} className="bg-[#3F3F3F] p-1 text-white rounded-lg text-sm flex items-center px-3"><span className="text-xl pe-1">+</span>Add Candidates</button>
        </div>
    </div>
    )
}
export default EmployeeRegisterMain