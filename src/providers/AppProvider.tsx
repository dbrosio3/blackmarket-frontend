import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { blackMarketTheme } from '@/theme';
import { JustChildrenProp } from '@/types';
import { CartProvider } from '@providers/CartContext';
import { ProductsProvider } from '@providers/ProductsContext';
import { SessionProvider } from '@providers/SessionContext';

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
