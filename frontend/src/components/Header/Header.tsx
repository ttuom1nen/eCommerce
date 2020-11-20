import React from "react";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { User, StoreState } from "../../models";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./Header.style";

import { signOutStart } from "../../redux/user/user.actions";

const Header = () => {
  const dispatch = useDispatch();

  const cartHidden: boolean = useSelector(
    (state: StoreState) => state.cart.hidden
  );

  const currentUser: User | null = useSelector(
    (state: StoreState) => state.user.currentUser
  );

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo"></Logo>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {cartHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default React.memo(Header);
