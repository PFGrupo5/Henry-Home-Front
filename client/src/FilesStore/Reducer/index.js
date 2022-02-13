import { ALL_HOTELS, DETAIL, GOOGLE_LOGIN, GOOGLE_LOGOUT, CREATE_HOUSE, ADMIN_STATUS, SIGNIN, SIGNUP, USER_DETAIL, GET_SERVICES, GET_FACILITIES, LOCATIONS } from "../Const Types/constActions"
const initialState = {
  hotels: [],
  allHotels: [],
  detail: [],
  userDetail: [],
  services: [],
  locations: [],
  facilities: [],
  authData: null,
  count: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_HOTELS:
      return {
        ...state,
        hotels: action.payload.rows,
        allHotels: action.payload.rows,
        count: action.payload.count
      };

    case DETAIL:
      return {
        ...state,
        detail: action.payload
      };

    case USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload
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
    case CREATE_HOUSE:
      return {
        ...state,
      }
    case ADMIN_STATUS:
      return {
        ...state
      }
    case SIGNIN:
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }))
      window.location.replace("/home")
      return {
        ...state
      }
    case SIGNUP:
      return {
        ...state
      }

    case GET_SERVICES:
      return {
        ...state,
        services: action?.payload
      }

    case GET_FACILITIES:
      return {
        ...state,
        facilities: action?.payload
      }

    case LOCATIONS:
      return {
        ...state,
        locations: action?.payload
      }

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;