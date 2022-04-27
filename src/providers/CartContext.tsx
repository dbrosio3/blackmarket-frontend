import React from 'react';

const CartContext = React.createContext({});

type CartProviderProps = { children: React.ReactNode };

const CartProviderComponent: React.FC<CartProviderProps> = ({ children }) => {
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
