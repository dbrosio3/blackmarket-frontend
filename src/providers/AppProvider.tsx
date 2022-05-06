import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { JustChildrenProp } from '@/types';
import { ErrorFallback } from '@components/ErrorFallback';
import { CartProvider } from '@providers/CartContext';
import { ProductsProvider } from '@providers/ProductsContext';
import { SessionProvider } from '@providers/SessionContext';
import { blackMarketTheme } from '@styles/theme';

export const AppProvider: React.FC<JustChildrenProp> = ({ children }) => (
  <ChakraProvider theme={blackMarketTheme}>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ProductsProvider>
        <CartProvider>
          <SessionProvider>
            <BrowserRouter>{children}</BrowserRouter>
          </SessionProvider>
        </CartProvider>
      </ProductsProvider>
    </ErrorBoundary>
  </ChakraProvider>
);
