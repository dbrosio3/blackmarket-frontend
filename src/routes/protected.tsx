import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { AppLayout } from '@components/Layout/AppLayout';
import { Dashboard, MockRoute } from '@features/misc';

import { PATHS } from './paths';

const App = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
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
