import React from 'react'

const ProgressBar = (props) => {
    const { completed } = props;
  return (
    <>
    <div className='p-2 border border-gray-300 rounded-lg'>
      <div className="h-4 w-full bg-[#F3F3F3] rounded overflow-hidden">
          <div style={{width:`${completed}%`}} className="h-full bg-[#91b4ad] text-right transition-all duration-500 ease-in-out rounded">
              <div className='text-xs text-center text-white'>{completed}%</div>
          </div>
      </div>
    </div>

    </>
  )
}

export default ProgressBar