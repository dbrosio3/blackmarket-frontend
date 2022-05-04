import React, { createContext, useContext } from 'react';

import { JustChildrenProp } from '@/types';

const CartContext = createContext({});

const CartProvider: React.FC<JustChildrenProp> = ({ children }) => {
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

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
