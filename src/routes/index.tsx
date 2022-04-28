import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Landing } from '@features/Landing';
import { Login } from '@features/Login';

export const AppRoutes = () => {
  const routes = [{ path: '/', element: <Landing /> }, { path: '/login', element: <Login /> }];
  return useRoutes(routes);
};
