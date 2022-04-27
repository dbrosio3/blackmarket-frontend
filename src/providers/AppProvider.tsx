import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from './CartContext';
import { ProductsProvider } from './ProductsContext';
import { SessionProvider } from './SessionContext';

type AppProviderProps = { children: React.ReactNode };

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <ProductsProvider>
    <CartProvider>
      <SessionProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </SessionProvider>
    </CartProvider>
  </ProductsProvider>
);
