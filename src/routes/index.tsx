import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { useSession } from '@providers/SessionContext';

import { PATHS } from './paths';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

const loginPath = `${PATHS.AUTH}/${PATHS.LOGIN}`;

export const AppRoutes = () => {
  const { isAuthenticated } = useSession();

  const commonRoutes = [
    {
      path: '*',
      element: <Navigate to={isAuthenticated ? PATHS.APP : loginPath} />,
    },
  ];
  const routes = isAuthenticated ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
