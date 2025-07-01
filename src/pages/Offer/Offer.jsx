import React from "react";
import PageLayout from "../../beolayer/layout/PageLayout";
import TopBar from "../../beolayer/layout/TopBar";


const Offer = () => {
    return (
       <>   
        <TopBar/>

        <div className="offer_bg flex bg-gray-200 justify-center items-center h-[189px]">
           <div className="">
                <p className="text-white" style={{fontSize:"46px",fontWeight:"400"}}>Review & Accept Offer</p>
           </div>
        </div>  

       </>
    );
};

export default Offer;