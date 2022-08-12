import React, { useState } from "react";

const cartDefaultState = {
  cartItems: [],
  addItemToCart: (item) => {},
  increaseItemCount: (itemId) => {},
  decreaseItemCount: (itemId) => {},
  removeItemFromCart: (itemId) => {},
};

export const CartContext = React.createContext(cartDefaultState);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    // if item is already in the cart
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.data.id === item.data.id
    );
    if (itemIndex !== -1) {
      const newCartItems = cartItems.map((cartItem, index) => {
        if (index === itemIndex) {
          return { ...cartItem, amount: (cartItem.amount += item.amount) };
        } else {
          return cartItem;
        }
      });

      setCartItems(newCartItems);
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const removeItemFromCart = (itemId) => {
    const newItems = cartItems.filter((item) => item.data.id !== itemId);
    setCartItems(newItems);
  };

  const increaseItemCount = (itemId) => {
    const newItems = cartItems.map((item) => {
      if (item.data.id === itemId) {
        return { ...item, amount: (item.amount += 1) };
      }
      return item;
    });

    setCartItems(newItems);
  };

  const decreaseItemCount = (itemId) => {
    const newItems = cartItems.map((item) => {
      if (item.data.id === itemId) {
        return { ...item, amount: item.amount < 2 ? 1 : (item.amount -= 1) };
      }
      return item;
    });

    setCartItems(newItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        increaseItemCount,
        decreaseItemCount,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
