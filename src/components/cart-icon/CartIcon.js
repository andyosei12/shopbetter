import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./CartIcon.styles.scss";

const CartIcon = ({ onCartIconClick }) => {
  return (
    <div className="cart-icon-container" onClick={onCartIconClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
