import React, { createContext, useContext } from 'react';

import { JustChildrenProp } from '@/types';

const CartContext = createContext({});

const CartProviderComponent: React.FC<JustChildrenProp> = ({ children }) => {
  const cart = {};

  const addToCart = () => {};

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const CartProvider = CartProviderComponent;

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
