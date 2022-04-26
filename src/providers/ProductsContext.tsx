import React from 'react';

import { AppProviderProps } from './AppProvider';

const ProductsContext = React.createContext({});

const ProductsProviderComponent = ({ children }: AppProviderProps) => {
  const products = {};

  const getProducts = () => {};

  return (
    <ProductsContext.Provider
      value={{
        products,
        getProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const ProductsProvider = ProductsProviderComponent;

const useProducts = () => React.useContext(ProductsContext);

export { ProductsProvider, useProducts };
