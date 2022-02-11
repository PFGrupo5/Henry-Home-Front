import { ALL_HOTELS, DETAIL, GOOGLE_LOGIN, GOOGLE_LOGOUT, } from "../Const Types/constActions"

const initialState = {
  hotels: [],
  allHotels: [],
  detail: [],
  authData: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_HOTELS:
      return {
        ...state,
        hotels: action.payload,
        allHotels: action.payload,
      };

    case DETAIL:
      return {
        ...state,
        detail: action.payload
      };

    case GOOGLE_LOGIN:
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }))
      return {
        ...state,
        authData: action?.payload
      };

    case GOOGLE_LOGOUT:
      localStorage.clear()
      return {
        ...state,
        authData: null
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
