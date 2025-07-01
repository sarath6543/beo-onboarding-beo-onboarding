// import React from "react";
// import "./FormWrapper.css"; // optional, based on your styling setup

// const FormWrapper = ({ columns = 2, children, onSave }) => {
//   return (
//     <div className="form-wrapper-container">
//       <div className={`form-wrapper cols-${columns}`}>
//         {children}
//       </div>

//       {onSave && (
//         <div className="form-wrapper-save">
//           <button
//             onClick={onSave}
//             className="save-button"
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
import "./FormWrapper.css"; // optional, based on your styling setup

const FormWrapper = ({ columns = 2, children, onSave }) => {
  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  }[columns] || "grid-cols-2";

  return (
    <div className="space-y-4">
      <div className={`grid gap-4 ${gridColsClass}`}>
        {children}
      </div>

      {onSave && (
        <div className="flex justify-end">
          <button
            onClick={onSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};



export default FormWrapper;
