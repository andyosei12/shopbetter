import { createContext, useState } from "react";

const CartDropdownContext = createContext({
  showCartDropdown: false,
  handleCartDropdown: () => {},
});

export const CartDropdownProvider = ({ children }) => {
  const [cartDropdown, setCartDropdown] = useState(false);
  const cartDropdownHandler = () => {
    setCartDropdown(!cartDropdown);
  };
  const defaultValues = {
    showCartDropdown: cartDropdown,
    handleCartDropdown: cartDropdownHandler,
  };
  return (
    <CartDropdownContext.Provider value={defaultValues}>
      {children}
    </CartDropdownContext.Provider>
  );
};

export default CartDropdownContext;
