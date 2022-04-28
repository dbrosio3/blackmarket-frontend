import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { JustChildrenProp } from '@/types';
import { CartProvider } from '@providers/CartContext';
import { ProductsProvider } from '@providers/ProductsContext';
import { SessionProvider } from '@providers/SessionContext';

export const AppProvider: React.FC<JustChildrenProp> = ({ children }) => (
  <ProductsProvider>
    <CartProvider>
      <SessionProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </SessionProvider>
    </CartProvider>
  </ProductsProvider>
);
