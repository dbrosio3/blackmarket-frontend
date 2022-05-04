import React, { createContext, useContext } from 'react';

import { JustChildrenProp } from '@/types';

const ProductsContext = createContext({});

const ProductsProvider: React.FC<JustChildrenProp> = ({ children }) => {
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

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
