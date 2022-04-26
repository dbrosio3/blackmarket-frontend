import React from 'react';

import { AppProviderProps } from './AppProvider';

const CartContext = React.createContext({});

const CartProviderComponent = ({ children }: AppProviderProps) => {
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
