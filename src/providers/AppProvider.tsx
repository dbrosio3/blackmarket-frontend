import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { JustChildrenProp } from '@/types';
import { ToastContainer } from '@/utils/customStandaloneToast';
import { ErrorFallback } from '@components/Misc';
import { CartProvider } from '@providers/CartContext';
import { ProductsProvider } from '@providers/ProductsContext';
import { SessionProvider } from '@providers/SessionContext';
import { blackMarketTheme } from '@styles/theme';

export const AppProvider: React.FC<JustChildrenProp> = ({ children }) => (
  <ChakraProvider theme={blackMarketTheme}>
    <ToastContainer />
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
