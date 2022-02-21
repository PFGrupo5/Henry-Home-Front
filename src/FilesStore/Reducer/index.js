import {
  ALL_HOTELS,
  DETAIL,
  GOOGLE_LOGIN,
  GOOGLE_LOGOUT,
  SIGNIN,
  LOG_OUT,
  USER_DETAIL,
  GET_SERVICES,
  GET_FACILITIES,
  LOCATIONS,
  ERROR_LOGIN,
  CLEAN_ERROR,
} from "../Const Types/constActions";

const initialState = {
  hotels: [],
  allHotels: [],
  detail: null,
  userDetail: null,
  signUser: null,
  services: [],
  locations: [],
  facilities: [],
  errors: {},
  count: null,
};

const cases = {};

cases[ALL_HOTELS] = (state, payload) => {
  if (payload.rows) {
    return ({
      ...state,
      hotels: payload.rows,
      allHotels: payload.rows,
      count: payload.count,
    }
    )
  } else {
    return ({
      ...state,
      hotels: payload.message,
      allHotels: payload.message,
    })
  }
}

cases[DETAIL] = (state, payload) => ({
  ...state,
  detail: payload,
});
cases[USER_DETAIL] = (state, payload) => ({
  ...state,
  userDetail: payload,
});

cases[GOOGLE_LOGIN] = (state, payload) => {
  // console.log(...payload)
  localStorage.setItem("profile", JSON.stringify({ ...payload }));
  window.location.reload()
  return {
    ...state,
    signUser: payload,
  };
};

cases[GOOGLE_LOGOUT] = (state, payload) => {
  localStorage.clear();
  return {
    ...state,
    signUser: null,
    userDetail: null
  };
};
cases[SIGNIN] = (state, payload) => {
  console.log("aaaaaa", payload)
  localStorage.setItem("profile", JSON.stringify({ ...payload }));
  return {
    ...state,
    signUser: payload,
  };
};
cases[GET_SERVICES] = (state, payload) => {
  return {
    ...state,
    services: payload,
  };
};
cases[GET_FACILITIES] = (state, payload) => {
  return {
    ...state,
    facilities: payload,
  };
};

cases[LOCATIONS] = (state, payload) => {
  return {
    ...state,
    locations: payload,
  };
};

cases[ERROR_LOGIN] = (state, payload) => {
  return {
    ...state,
    errors: payload,
  };
};

cases[CLEAN_ERROR] = (state, payload) => {
  return {
    ...state,
    errors: payload,
  };
};

cases[LOG_OUT] = (state, payload) => {
  return {
    ...state,
    signUser: null,
  };
}

export default function reducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}



/* 
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_HOTELS:
      return {
        ...state,
        hotels: action.payload.rows,
        allHotels: action.payload.rows,
        count: action.payload.count,
      };

    case DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
      };

    case GOOGLE_LOGIN:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        authData: action?.payload,
      };

    case GOOGLE_LOGOUT:
      localStorage.clear();
      return {
        ...state,
        authData: null,
      };
    case CREATE_HOUSE:
      return {
        ...state,
      };

    case ADMIN_STATUS:
      return {
        ...state,
      };
    case SIGNIN:
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      window.location.replace("/home");
      return {
        ...state,
      };
    case GET_SERVICES:
      return {
        ...state,
        services: action?.payload,
      };

    case GET_FACILITIES:
      return {
        ...state,
        facilities: action?.payload,
      };

    case LOCATIONS:
      return {
        ...state,
        locations: action?.payload,
      };

    case ERROR_LOGIN:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAN_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case ADD_FAV:
      return {
        ...state,
      }
    case DELETE_FAV:
      return {
        ...state,
      }
    case LOG_OUT:
      return {
        ...state,
        userDetail: []
      }

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer; */
