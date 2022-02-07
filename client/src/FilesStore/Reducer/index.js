const initialState = {
  hotels: [],
  allHotels: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_HOTELS":
      return {
        ...state,
        hotels: action.payload,
        allHotels: action.payload,
      };
    case "DETAIL":
      return {
        ...state,
        detail: action.payload
      }

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;