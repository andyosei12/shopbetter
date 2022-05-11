import {
  createAction,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { CategoryItem } from "../categories/category.types";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
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

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

// export type AddItemToCart = ActionWithPayload<
//   CART_ACTION_TYPES.SET_CART_ITEMS,
//   CartItem
// >;

// export type RemoveItemFromCart = ActionWithPayload<
//   CART_ACTION_TYPES.SET_CART_ITEMS,
//   CartItem
// >;

// export type ClearItemFromCart = ActionWithPayload<
//   CART_ACTION_TYPES.SET_CART_ITEMS,
//   CartItem
// >;

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN,
  Boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = withMatcher(
  (cartItems: CartItem[], productToAdd: CategoryItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
  }
);

export const removeItemFromCart = withMatcher(
  (cartItems: CartItem[], cartItemToRemove: CartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
  }
);

export const clearItemFromCart = withMatcher(
  (cartItems: CartItem[], cartItemToRemove: CartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
  }
);
