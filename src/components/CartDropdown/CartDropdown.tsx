import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ShoppingCartItem, StoreState } from "../../models";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";

import "./CartDropdown.styles.scss";

const CartDropdown: React.FC = () => {
  const dispatch = useDispatch();

  const cartItems: ShoppingCartItem[] = useSelector(
    (state: StoreState) => state.cart.cartItems
  );

  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <>
          <div className="cart-items">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem}></CartItem>
            ))}
          </div>
          <Link to="/checkout">
            <CustomButton onClick={() => dispatch(toggleCartHidden())}>
              GO TO CHECKOUT
            </CustomButton>
          </Link>
        </>
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
  );
};

export default CartDropdown;
