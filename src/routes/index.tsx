import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Landing } from '@features/Landing';
import { useSession } from '@providers/SessionContext';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const { isAuthenticated } = useSession();

  const commonRoutes = [{ index: true, element: <Landing /> }];
  const routes = isAuthenticated ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
