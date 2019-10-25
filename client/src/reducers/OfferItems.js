const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function offerReducer(state = initialState, action) {
  switch (action.type) {
    case "OFFERS_HAS_ERRORED":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    case "OFFERS_IS_LOADING":
      return {
        ...state,
        loading: true,
        error: null
      };

    case "OFFERS_FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload.items
      };

    default:
      return state;
  }
}
