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
    name: "AdminHome",
    value: React.lazy(() => import("../pages/Admin/AdminHomeMain")),
    isAuthProtected: false,
    children: [
      {
        index: true,
        value: React.lazy(() => import("../pages/Admin/Candidates/CandidatesMain")),
      },
      {
        path: "admin-candidates",
        value: React.lazy(() => import("../pages/Admin/Candidates/CandidatesMain")),
      },
      {
        path: "admin-candidates/:id",
        value: React.lazy(() => import("../pages/Admin/Candidates/CandidateDetail")),
      },
      {
        path: "admin-clients",
        value: React.lazy(() => import("../pages/Admin/Clients/ClientsMain")),
      },
      {
        path: "admin-reports",
        value: React.lazy(() => import("../pages/Admin/Reports/ReportsMain")),
      },
      {
        path: "admin-employee_register",
        value: React.lazy(() => import("../pages/Admin/EmployeeRegister/EmployeeRegisterMain")),
      },
    ],
  },



];

export default routes;
