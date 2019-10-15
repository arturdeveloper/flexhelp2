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
        // error: action.payload.error,
        error: action.hasErrored,
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

// export function itemsHasErrored(state = false, action) {
//   switch (action.type) {
//     case "ITEMS_HAS_ERRORED":
//       return action.hasErrored;
//     default:
//       return state;
//   }
// }

// export function itemsIsLoading(state = false, action) {
//   switch (action.type) {
//     case "ITEMS_IS_LOADING":
//       return action.isLoading;
//     default:
//       return state;
//   }
// }

// export function items(state = [], action) {
//   switch (action.type) {
//     case "ITEMS_FETCH_DATA_SUCCESS":
//       return action.items;
//     default:
//       return state;
//   }
// }
