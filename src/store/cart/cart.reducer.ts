import { CartItem } from "./cart.types";
import { setIsCartOpen, setCartItems } from "./cart.action";
import { AnyAction } from "redux";

export type CartState = {
  readonly showCartDropdown: Boolean;
  readonly cartItems: CartItem[];
};
const CART_INITIAL_STATE: CartState = {
  showCartDropdown: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      showCartDropdown: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
