import React from "react";
const routes = [
  {
    path: "/app/setup",
    name: "AppSetup",
    value: React.lazy(() => import("../pages/appsetup/AppSetUp")),
    isAuthProtected: false,
  },
  {
    path: "/",
    name: "Dashboard",
    value: React.lazy(() => import("../pages/Dashboard/Dashboard")),
    isAuthProtected: true,
    role: null,
  },
  {
    path: "*",
    name: "NotFound",
    value: React.lazy(() => import("../pages/errors/NotFound")),
    isAuthProtected: false,
  },
  {
  path: "/page1",
  name: "Page1",
  value: React.lazy(() => import("../pages/Page1/Page1")),
  isAuthProtected: false,
  role: null,
},
{
  path: "/page2",
  name: "Page2",
  value: React.lazy(() => import("../pages/Page2/Page2")),
  isAuthProtected: false,
  role: null,
},
{
  path: "/page3",
  name: "Page3",
  value: React.lazy(() => import("../pages/Page3/Page3")),
  isAuthProtected: false,
  role: null,
},
];

export default routes;
