// import React, { Suspense } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import routes from "./allroutes";
// import ProtectedRoute from "./ProtectedRoute";

// const RouteRenderer = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         {routes.map((route, index) => {
//           const { path, value: Component, isAuthProtected, role } = route;
//           return (
//             <Route
//               key={index}
//               path={path}
//               element={
//                 <ProtectedRoute
//                   isAuthProtected={isAuthProtected}
//                   requiredRole={role}
//                 >
//                   <Component />
//                 </ProtectedRoute>
//               }
//             />
//           );
//         })}
//         <Route path="*" element={<Navigate to="/beo-onboard" />} />
//       </Routes>
//     </Suspense>
//   );
// };

// export default RouteRenderer;
// src/routes/RouteRenderer.jsx
import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./allroutes";
import ProtectedRoute from "./ProtectedRoute";

const renderRoutes = (routesList) =>
  routesList.map(({ path, value: Component, isAuthProtected, role, children, index }, i) => {
    const element = (
      <ProtectedRoute isAuthProtected={isAuthProtected} requiredRole={role}>
        <Component />
      </ProtectedRoute>
    );

    return (
      <Route key={i} path={path} index={index} element={element}>
        {children && renderRoutes(children)}
      </Route>
    );
  });

const RouteRenderer = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {renderRoutes(routes)}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default RouteRenderer;
