import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { JustChildrenProp } from '@/types';
import { CartProvider } from '@providers/CartContext';
import { ProductsProvider } from '@providers/ProductsContext';
import { SessionProvider } from '@providers/SessionContext';
import { blackMarketTheme } from '@styles/theme';

export const AppProvider: React.FC<JustChildrenProp> = ({ children }) => (
  <ProductsProvider>
    <CartProvider>
      <SessionProvider>
        <ChakraProvider theme={blackMarketTheme}>
          <BrowserRouter>{children}</BrowserRouter>
        </ChakraProvider>
      </SessionProvider>
    </CartProvider>
  </ProductsProvider>
);
