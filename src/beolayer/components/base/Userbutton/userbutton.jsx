import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserButton = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const options = [
    {
      label: 'Dashboard',
      onClick: () => {
        setShowOptions(false);
        navigate('/');
      },
    },
    {
      label: 'Logout',
      onClick: () => {
        setShowOptions(false);
        navigate('/app/setup');
      },
    },
  ];

  return (
    <div className="relative h-full z-40" ref={dropdownRef}>
      <div
        onClick={() => setShowOptions(!showOptions)}
        className="flex items-center justify-end p-2 mx-5 cursor-pointer"
      >
        <div className="font-semibold ml-2.5 flex items-center">
          <span className="text-3xl">
            <i className="fa-solid fa-user"></i>
          </span>
        </div>
      </div>

      {showOptions && (
        <div className="absolute w-40 bg-white top-14 right-10 border rounded shadow-md ">
          <ul className="flex container items-center flex-col text-sm py-2">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-9 py-2 cursor-pointer rounded-lg hover:bg-gray-200"
                onClick={option.onClick}
              >
                <span className="text-base text-black">{option.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserButton;
