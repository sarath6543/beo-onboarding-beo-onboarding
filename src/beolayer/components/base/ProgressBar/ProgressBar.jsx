import React from 'react'

const ProgressBar = (props) => {
    const { completed } = props;
  return (
    <>
    <div className="h-3 w-full bg-[#EBBC00A1]  overflow-hidden">
        <div style={{width:`${completed}%`}} className="h-full bg-[#00C792] text-right transition-all duration-500 ease-in-out">
            
        </div>
    </div>

    </>
  )
}

export default ProgressBar