// import { SHOP_DATA } from "./shop.data"; Data is fetched from Firebase
import { ShopState, ShopData } from "../../models";
import { ActionTypes } from "./shop.actions"

const INITIAL_STATE: ShopState = {
  collections: null
};

const shopReducer = (state = INITIAL_STATE, action: {type: string, payload: ShopData}) => {
  switch (action.type){
    case ActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
      }
      default:
        return state;
  }
};

export default shopReducer;
