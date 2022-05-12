import { useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartCount } from "../../store/cart/cart.selector";

import "./CartIcon.styles.scss";

export type CartIconProps = {
  onCartIconClick: () => void;
};

const CartIcon = ({ onCartIconClick }: CartIconProps) => {
  const cartCount = useSelector(selectCartCount);

  return (
    <div className="cart-icon-container" onClick={onCartIconClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
