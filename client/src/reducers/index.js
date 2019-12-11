import { combineReducers } from "redux";
import { items, itemsHasErrored, itemsIsLoading } from "./CatalogItems";
import offers from "./OfferItems";
import filteredOffers from "./FilteredOffers";

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  offers,
  filteredOffers
});
