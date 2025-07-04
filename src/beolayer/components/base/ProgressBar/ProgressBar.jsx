import React from 'react'

const ProgressBar = (props) => {
    const { completed } = props;
  return (
    <>
    <div class="h-3 w-full bg-[#EBBC00A1]  overflow-hidden">
        <div style={{width:`${completed}%`}} className="h-full bg-[#00C792] text-right">
            
            
        </div>
    </div>

    </>
  )
}

export default ProgressBar