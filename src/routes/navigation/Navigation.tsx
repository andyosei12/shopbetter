import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import "./Navigation.styles.scss";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const showCartDropdown = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const cartDropdownHandler = () => {
    dispatch(setIsCartOpen(!showCartDropdown));
  };

  const signOutUser = () => dispatch(signOutStart());

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
