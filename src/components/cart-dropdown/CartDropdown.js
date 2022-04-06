import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../contexts/cart.context";
import Button from "../button/Button";
import CartItem from "../cart-items/CartItem";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems, handleCartDropdown, showCartDropdown } =
    useContext(CartContext);
  const goToCheckoutHandler = () => {
    navigate("/checkout");
    handleCartDropdown(!showCartDropdown);
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
