const initialState = {
  items: []
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case "FILTER_OFFERS_BY_CATEGORY":
      return {
        ...state,
        items: action.payload.filter(e => e.catalog.catalogId == action.filter)
      };

    default:
      return state;
  }
}
