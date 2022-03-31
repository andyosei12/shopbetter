import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import { UserContext } from "../../contexts/user-context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./Navigation.styles.scss";
import CartContext from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { showCartDropdown, handleCartDropdown } = useContext(CartContext);

  const cartDropdownHandler = () => {
    handleCartDropdown();
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGNIN
            </Link>
          )}
          <CartIcon onCartIconClick={cartDropdownHandler} />
        </div>
        {showCartDropdown && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
