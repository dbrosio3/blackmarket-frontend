import React from 'react';

const ProductsContext = React.createContext({});

type ProductsProviderProps = { children: React.ReactNode };

const ProductsProviderComponent: React.FC<ProductsProviderProps> = ({ children }) => {
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
