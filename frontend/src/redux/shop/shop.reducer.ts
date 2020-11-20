// import { SHOP_DATA } from "./shop.data"; Data is fetched from Firebase
import { ShopState, ShopData } from "../../models";
import { ActionTypes } from "./shop.actions"

const INITIAL_STATE: ShopState = {
  fetching: false,
  collections: null,
  errorMessage: "",
};

const shopReducer = (state = INITIAL_STATE, action: {type: string, payload: ShopData}) => {
  switch (action.type){
    case ActionTypes.FETCH_COLLECTIONS_START:
      return {...state, fetching: true}
    case ActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {...state, collections: action.payload, fetching: false}
    case ActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {...state, collections: action.payload, fetching: false}
    default:
      return state;
  }
};

export default shopReducer;
