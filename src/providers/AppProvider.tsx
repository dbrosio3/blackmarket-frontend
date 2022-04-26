import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from './CartContext';
import { ProductsProvider } from './ProductsContext';
import { SessionProvider } from './SessionContext';

export type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children = [] }: AppProviderProps) => (
  <ProductsProvider>
    <CartProvider>
      <SessionProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </SessionProvider>
    </CartProvider>
  </ProductsProvider>
);
