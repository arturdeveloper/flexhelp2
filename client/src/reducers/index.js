import { combineReducers } from "redux";
import { items, itemsHasErrored, itemsIsLoading } from "./CatalogItems";

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading
});
