import React from "react";
import { useRoutes } from "react-router-dom";

import Landing from "./Landing";
import Login from "./Login";

const AppRoutes = () => {
  const routes = [
    { path: "/", element: <Landing /> },
    { path: "/login", element: <Login /> }
  ];
  const element = useRoutes(routes);
  return <>{element}</>;
};

export default AppRoutes;
