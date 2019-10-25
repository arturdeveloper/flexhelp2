export function offersHasErrored(error) {
  return {
    type: "OFFERS_HAS_ERRORED",
    // hasErrored: bool
    payload: { error }
  };
}

export function offersIsLoading(bool) {
  return {
    type: "OFFERS_IS_LOADING",
    isLoading: bool
  };
}

export function offersFetchDataSuccess(items) {
  return {
    type: "OFFERS_FETCH_DATA_SUCCESS",
    // items // ES6 destructuring. This is the unique store key.
    offers: items,
    payload: { items }
  };
}

export function offersFetchData(url) {
  return dispatch => {
    dispatch(offersIsLoading(true));
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(offersIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(offersFetchDataSuccess(items)))
      .catch(() => dispatch(offersHasErrored(true)));
  };
}
