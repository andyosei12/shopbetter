import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //info: find if cart items contains product to add
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //info: If found increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //info: return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToRemove) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

const CartContext = createContext({
  showCartDropdown: false,
  handleCartDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cartDropdown, setCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    );
    setCartTotal(total);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const clearItemFromCart = (cartItemToRemove) => {
    setCartItems(clearCartItem(cartItems, cartItemToRemove));
  };
  const cartDropdownHandler = () => {
    setCartDropdown(!cartDropdown);
  };
  const defaultValues = {
    showCartDropdown: cartDropdown,
    handleCartDropdown: cartDropdownHandler,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };
  return (
    <CartContext.Provider value={defaultValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
