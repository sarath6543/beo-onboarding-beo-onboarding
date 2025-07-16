import React, { useState } from 'react';
import FontIcon from '../Icons/FontIcon.jsx';


const Popup = ({ onClose, show, title, type, children }) => {

  const [textBox,setTextBox] = useState("")
  
  const validation = type === "validation";
  const warning = type === "warning";

  if (!show) return null;

  return ( 
    <>
          {validation ?(
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-black/50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-2xl font-semibold mb-4">{title ? title : ""}</h2>
              <div className="text-sm text-gray-700 text-center">{children ? children : "warning"} </div>
              <textarea
                onChange={(e)=>setTextBox(e.target.value)}
                className="w-full mt-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 resize-none text-sm text-gray-800"
                rows="3"
                placeholder="Enter your message here..."
              ></textarea> 
              <div className='flex justify-center gap-6 mt-6'>
                  <button
                    onClick={onClose}
                    className="bg-gray-200 text-gray-600 hover:text-gray-400 rounded-md py-1 px-3 "
                  >
                  Close
                  </button>

                  <button
                    value={textBox}
                    onClick={onClose}
                    disabled={!textBox.trim()}
                    className={`rounded-md py-1 px-3 bg-black text-gray-200 hover:text-gray-400`}
                  >
                    Submit
                  </button>
                </div>          
             </div>
          </div>
          ) : warning ? (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-black/50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                &times;
              </button>
              <div className="flex flex-col justify-center items-center">
                <FontIcon size='60' iconName="Exclamation"/>
                <h2 className="text-2xl font-semibold mb-4 mt-2">
                  {title ? title : "Discard Changes"}
                </h2>
                <div className="text-sm text-gray-700 text-center">
                 {children ? (children) : (
                    <>
                      You have unused changes. If you leave now, all changes will be lost.
                      <br />
                      Are you sure you want to discard them?
                    </>
                  )}

                </div>

                <div className='flex justify-end gap-6 mt-6'>
                    <button
                      onClick={onClose}
                      className="bg-gray-200 text-gray-600 hover:text-gray-400 rounded-md py-1 px-3 "
                    >
                    Cancel Creation
                    </button>

                    <button
                      // onClick={onClose}
                      className="bg-black text-gray-200 hover:text-gray-400 rounded-md py-1 px-3"
                    >
                      Save Article
                    </button>
                </div>
              </div>
            </div>
          </div>
          ) : (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-black/50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
              </button>
              <h2 className="text-2xl text-center font-semibold mb-4">{title ? (title): "Please Confirm"}</h2>
              <div className="text-center text-gray-700 text-sm">{children ? (children) :  "R U sure you want to submit changes"}</div>
              <hr className='border-gray-300 mt-6'/>
              <div className='flex justify-center gap-6 mt-6'>
                  <button
                    onClick={onClose}
                    className="bg-gray-200 text-gray-600 hover:text-gray-400 rounded-md py-1 px-3 "
                  >
                  Close
                  </button>

                  <button
                    // onClick={onClose}
                    className="bg-black text-gray-200 hover:text-gray-400 rounded-md py-1 px-3"
                  >
                    Submit
                  </button>
                </div>   
            </div>
          </div>
          )}
    </>  
    );
  };
   

export default Popup;
