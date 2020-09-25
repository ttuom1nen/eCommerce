import { SHOP_DATA } from "./shop.data";
import { ShopState } from "../../models";

const INITIAL_STATE: ShopState = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE) => {
  return state;
};

export default shopReducer;
