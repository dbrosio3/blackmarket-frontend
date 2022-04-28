import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Landing } from '@features/landing';
import { Login } from '@features/login';
import { Register } from '@features/register';

export const AppRoutes = () => {
  const routes = [
    { path: '/', element: <Landing /> },
    { path: '/login', element: <Login /> },
    { path: '/sign-up', element: <Register /> },
  ];
  return useRoutes(routes);
};
