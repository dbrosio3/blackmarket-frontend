import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Dashboard, MockRoute } from '@features/misc';

const App = () => {
  return (
    <>
      App Layout
      <Outlet />
    </>
  );
};

export const protectedRoutes = [
  {
    path: 'app',
    element: <App />,
    children: [
      { path: 'mockroute', element: <MockRoute /> },
      { index: true, element: <Dashboard /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
