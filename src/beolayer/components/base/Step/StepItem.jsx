import React from 'react';
import { useNavigate } from 'react-router-dom';
//import './styles.css';
import review_icon from'../../../../assets/review_icon.svg'

const StepItem = ({ label, status, path, icon }) => {
  const navigate = useNavigate();

  const getStatusClasses = () => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'bg-green-300 text-green-900';
      case 'inprogress':
        return 'bg-orange-300 text-orange-900';
      case 'yet to start':
        return 'bg-gray-300 text-black-900';
      default:
        return 'bg-gray-300 text-black-900';
    }
  };

  return (
    <li
      className="flex items-start justify-between p-3 mb-2 bg-white border-b-[1.5px] border-gray-200 cursor-pointer hover:bg-gray-100 transition"
      onClick={() => navigate(path)}
    >
      {/* Icon */}
      <div className="rounded-full w-12 h-12 bg-black mr-4 flex justify-center items-center">
        <img src={icon} alt="step icon" className="w-6 h-6 object-contain" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col pb-4">
        <span className="text-base text-[22px] mb-1">{label}</span>
        <span
          className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-medium w-fit ${getStatusClasses()}`}
        >
          {status}
        </span>
      </div>

      {/* Arrow */}
      <div className="text-lg ml-3 text-gray-500">➔</div>
    </li>
  );
};
export default StepItem;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// //import './styles.css';
// import review_icon from'../../../../assets/review_icon.svg'


// const StepItem = ({label, status, path }) => {
//   const navigate = useNavigate();

//   const getStatusClasses = () => {
//     switch (status?.toLowerCase()) {
//       case 'completed':
//         return 'bg-green-300 text-green-900';
//       case 'inprogress':
//         return 'bg-orange-300  text-orange-900';
//       case 'yet to start':
//         return 'bg-gray-300  text-black-900';
//       default:
//         return 'bg-gray-300  text-black-900';
//     }
//   };

//   return (
//     <li
//       className="flex items-start justify-between p-3 mb-2 bg-white border-b-[1.5px] border-gray-200 cursor-pointer hover:bg-gray-100 transition"
//       onClick={() => navigate(path)}
//     >
//       {/* Icon */}
//       <div className="rounded-full w-12 h-12 bg-black text-[20px] mr-4 flex justify-center items-center">
//       <img src={review_icon} alt="" />
//         </div>

//       {/* Content */}
//       <div className="flex-1 flex flex-col pb-4">
//         <span className="text-base text-[22px] mb-1">{label}</span>
//         <span
//           className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-medium w-fit ${getStatusClasses()}`}
//         >
//           {status}
//         </span>
//       </div>

//       {/* Arrow */}
//       <div className="text-lg ml-3 text-gray-500">➔</div>
//     </li>
//   );
// };

// export default StepItem;
