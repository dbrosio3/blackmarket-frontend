import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { JustChildrenProp } from '../types';

import { CartProvider } from './CartContext';
import { ProductsProvider } from './ProductsContext';
import { SessionProvider } from './SessionContext';

export const AppProvider: React.FC<JustChildrenProp> = ({ children }) => (
  <ProductsProvider>
    <CartProvider>
      <SessionProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </SessionProvider>
    </CartProvider>
  </ProductsProvider>
);
