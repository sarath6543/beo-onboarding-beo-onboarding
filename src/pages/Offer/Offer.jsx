import React from "react";
import PageLayout from "../../beolayer/layout/PageLayout";
import TopBar from "../../beolayer/layout/TopBar";

import { RiPrinterLine } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";


const Offer = () => {
    return (
       <>   
        <TopBar/>

        <div className="offer_bg flex bg-gray-200 justify-center items-center h-[189px]">
           <div className="">
                <p className="text-white text-5xl" style={{fontWeight:"400"}}>Review & Accept Offer</p>
                <p className="text-white text-2xl text-center leading-[2]">Your joining date with BEO is</p>
           </div>
        </div>  

        <div className="flex">
         <button className="flex items-center border px-2 text-lg"><RiPrinterLine />Print</button>
         <button className="flex items-center border px-2 text-lg"><MdOutlineFileDownload />Download</button>
        </div>

        <div>
         
        </div>

       </>
    );
};

export default Offer;