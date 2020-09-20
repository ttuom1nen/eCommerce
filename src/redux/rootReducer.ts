import { combineReducers } from "redux";
import { StoreState } from "../models";
import userReducer from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

export default combineReducers<StoreState>({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
