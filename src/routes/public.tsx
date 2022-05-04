import React from 'react';

import { AuthRoutes } from '@features/auth';

import { PATHS } from './paths';

export const publicRoutes = [
  {
    path: `${PATHS.AUTH}/*`,
    element: <AuthRoutes />,
  },
];
