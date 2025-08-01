import React from "react";
const routes = [
  {
    path: "/app/setup",
    name: "AppSetup",
    value: React.lazy(() => import("../pages/appsetup/AppSetUp")),
    isAuthProtected: false,
  },
  // {
  //   path: "/",
  //   name: "Dashboard",
  //   value: React.lazy(() => import("../pages/Dashboard/Dashboard")),
  //   isAuthProtected: false,
  //   role: null,
  // },
    {
    path: "/",
    name: "Home",
    value: React.lazy(() => import("../pages/Home/Home")),
    isAuthProtected: false,
    role: null,
  },
  {
    path: "*",
    name: "NotFound",
    value: React.lazy(() => import("../pages/errors/NotFound")),
    isAuthProtected: false,
  },
  {
  path: "/offer",
  name: "offer",
  value: React.lazy(() => import("../pages/Offer/Offer")),
  isAuthProtected: false,
  role: null,
},
{
  path: "/back-ground-verification-main",
  name: "back-ground-verification-main",
  value: React.lazy(() => import("../pages/BackGroundVerification/BackGroundVerificationMain")),
  isAuthProtected: false,
  role: null,
},
{
  path: "/admin-home",
  name: "admin-home",
  value: React.lazy(() => import("../pages/Admin/AdminHomeMain")),
  isAuthProtected: false,
  role: null,
},
// Admin
{
  path: "/admin-candidates",
  name: "admin-candidates",
  value: React.lazy(() => import("../pages/Admin/Candidates/CandidatesMain")),
  isAuthProtected: false,
  role: null,
},
{
  path: "/admin-clients",
  name: "admin-clients",
  value: React.lazy(() => import("../pages/Admin/Clients/ClientsMain")),
  isAuthProtected: false,
  role: null,
},
{
  path: "/admin-reports",
  name: "admin-reports",
  value: React.lazy(() => import("../pages/Admin/Reports/ReportsMain")),
  isAuthProtected: false,
  role: null,
},
{
  path: "/admin-employee_register",
  name: "admin-employee_register",
  value: React.lazy(() => import("../pages/Admin/EmployeeRegister/EmployeeRegisterMain")),
  isAuthProtected: false,
  role: null,
},

];

export default routes;
