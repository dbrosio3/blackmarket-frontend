import React from 'react';
import { Helmet } from 'react-helmet';

import { AppRoutes } from './routes';

const App = () => (
  <>
    <Helmet>
      <title>Black Market</title>
    </Helmet>
    <AppRoutes />
  </>
);

export default App;
