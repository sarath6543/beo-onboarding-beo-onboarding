import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children, isAuthProtected, requiredRole }) => {
  const location = useLocation();
  const token = localStorage.getItem("accessToken");
  const userRole = Cookies.get("role");

  if (isAuthProtected && !token) {
    return <Navigate to="/app/setup" state={{ from: location }} replace />;
  }

  if (requiredRole && requiredRole !== userRole) {
    return <Navigate to="/access-denied" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
