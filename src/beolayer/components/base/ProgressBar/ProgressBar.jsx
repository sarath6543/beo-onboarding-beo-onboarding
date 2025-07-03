import React from 'react'

const ProgressBar = () => {

  return (
    <>
    <div style={{height: 10,
        width: '100%',
        backgroundColor: "#EBBC00A1",
        borderRadius: 50,
        margin: 50,
        
    }}>
        <div style={{height: '100%',
        width: `10%`,
        backgroundColor: "#00C792",
        borderRadius: 'inherit',
        textAlign: 'right'
        }}>
            <span></span>
        </div>
    </div>
    </>
  )
}

export default ProgressBar