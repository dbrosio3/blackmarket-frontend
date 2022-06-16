import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { AppLayout } from '@components/Layout/AppLayout';
import { Dashboard } from '@features/products/routes/Dashboard';

import { PATHS } from './paths';

const App = () => (
  <AppLayout>
    <Outlet />
  </AppLayout>
);

export const protectedRoutes = [
  {
    path: PATHS.APP,
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
