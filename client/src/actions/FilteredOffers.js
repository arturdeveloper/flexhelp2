export function filterByCategory(offers, criteria) {
  return {
    type: "FILTER_OFFERS_BY_CATEGORY",
    payload: offers,
    filter: criteria
  };
}

export function filterOffers(offers, criteria) {
  return dispatch => {
    dispatch(filterByCategory(offers, criteria));
  };
}
