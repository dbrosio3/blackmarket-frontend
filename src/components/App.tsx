import React from 'react';
import { Helmet } from 'react-helmet';

import { AppRoutes } from '@/routes';

export const App = () => (
  <>
    <Helmet>
      <title>Black Market</title>
    </Helmet>
    <AppRoutes />
  </>
);
