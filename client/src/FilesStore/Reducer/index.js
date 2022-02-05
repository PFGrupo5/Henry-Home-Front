const initialState = {
  hotels: [],
  allHotels: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_HOTELS":
      return {
        ...state,
        hotels: action.payload,
        allHotels: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;