import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import Button from "../button/Button";
import CartItem from "../cart-items/CartItem";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const showCartDropdown = useSelector(selectIsCartOpen);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(!showCartDropdown));
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length === 0 && <p>Your cart is empty</p>}
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
