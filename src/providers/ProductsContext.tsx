import React from 'react';

import { JustChildrenProp } from '../types';

const ProductsContext = React.createContext({});

const ProductsProviderComponent: React.FC<JustChildrenProp> = ({ children }) => {
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
