// import React from "react";

// const FormWrapper = ({ columns = 2, children, onSave }) => {
//   // Responsive grid column logic
//   const gridColsClass = {
//     1: "grid-cols-1",
//     2: "grid-cols-1 sm:grid-cols-2",
//     3: "grid-cols-1 sm:grid-cols-3",
//     4: "grid-cols-1 sm:grid-cols-4",
//   }[columns] || "grid-cols-1 sm:grid-cols-2";

//   return (
//     <div className="flex flex-col gap-4">
//       {/* Grid content */}
//       <div className={`grid gap-4 ${gridColsClass}`}>
//         {children}
//       </div>

//       {/* Save button */}
//       {onSave && (
//         // <div className="bg-gray-300 px-4 py-3 flex justify-end border-t border-gray-300">
//             <div className= "px-4 py- flex justify-end ">
//           <button
//             onClick={onSave}
//             // className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300 text-base"
//               className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300 text-base border-1 border-[#DADADA]"
//           >
//             Save
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FormWrapper;
import React from "react";

/**
 * A simple responsive form grid wrapper.
 * 
 * Props:
 * - columns (1-4): Number of columns to show at larger breakpoints
 * - children: Form fields to render inside the grid
 */
const FormWrapper = ({ columns = 2, children }) => {
  // Tailwind grid column responsiveness
  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-4",
  }[columns] || "grid-cols-1 sm:grid-cols-2";

  return (
    <div className="flex flex-col gap-4 p-10">
      <div className={`grid gap-4 ${gridColsClass}`}>
        {children}
      </div>
    </div>
  );
};

export default FormWrapper;
