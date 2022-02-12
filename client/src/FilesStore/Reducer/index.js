const initialState = {
  hotels: [],
  allHotels: [],
  detail: [],
  created: "",
};

function rootReducer(state = initialState, {type, payload}) {
  switch (type) {
    case "ALL_HOTELS":
      return {
        ...state,
        hotels: payload,
        allHotels: payload,
      };
    case "DETAIL":
      return {
        ...state,
        detail: payload,
      };
    case "CREATE_HOUSE":
      return {
        ...state,
      }
    case "ADMIN_STATUS":
      return{
        ...state
      }

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
