import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./allroutes";
import ProtectedRoute from "./ProtectedRoute";

const RouteRenderer = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route, index) => {
          const { path, value: Component, isAuthProtected, role } = route;
          return (
            <Route
              key={index}
              path={path}
              element={
                <ProtectedRoute
                  isAuthProtected={isAuthProtected}
                  requiredRole={role}
                >
                  <Component />
                </ProtectedRoute>
              }
            />
          );
        })}
        <Route path="*" element={<Navigate to="/beo-onboard" />} />
      </Routes>
    </Suspense>
  );
};

export default RouteRenderer;
