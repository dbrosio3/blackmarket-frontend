import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Dashboard, MockRoute } from '@features/misc';

import { PATHS } from './paths';

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
    path: PATHS.APP,
    element: <App />,
    children: [
      { path: PATHS.MOCK_ROUTE, element: <MockRoute /> },
      { index: true, element: <Dashboard /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
