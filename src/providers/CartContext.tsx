import React from 'react';

import { JustChildrenProp } from '../types';

const CartContext = React.createContext({});

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

const useCart = () => React.useContext(CartContext);

export { CartProvider, useCart };
