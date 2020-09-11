import { combineReducers } from "redux";
import { StoreState } from "../models";
import userReducer from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";

export default combineReducers<StoreState>({
  user: userReducer,
  cart: cartReducer,
});
