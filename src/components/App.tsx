import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes';

const App = () => (
  <BrowserRouter>
    <Helmet>
      <title>Black Market</title>
    </Helmet>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
