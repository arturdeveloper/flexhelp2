import { combineReducers } from "redux";
import { items, itemsHasErrored, itemsIsLoading } from "./CatalogItems";
import offers from "./OfferItems";

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  offers
});
