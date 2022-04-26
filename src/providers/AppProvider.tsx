import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { SessionProvider } from './SessionContext';

export type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children = [] }: AppProviderProps) => (
  <SessionProvider>
    <BrowserRouter>{children}</BrowserRouter>
  </SessionProvider>
);
