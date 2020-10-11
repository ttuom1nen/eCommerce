import {ShopData} from "../../models"

export enum ActionTypes {
  UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS",
}

export const updateCollections = (collectionsMap: ShopData) => ({
  type: ActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
})