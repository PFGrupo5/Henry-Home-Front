import axios from "axios";
import { URL_BACK } from "../../config";
import {
  ALL_HOTELS,
  DETAIL,
  GOOGLE_LOGIN,
  GOOGLE_LOGOUT,
  CREATE_HOUSE,
  ADMIN_STATUS,
  SIGNIN,
  /*  SIGNUP, */
  USER_DETAIL,
  GET_SERVICES,
  GET_FACILITIES,
  LOCATIONS,
  ERROR_LOGIN,
  CLEAN_ERROR,
} from "../Const Types/constActions";

export function getHotels(page = 1, size = 10) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `${URL_BACK}/houses?page=${page}&size=${size}`
      );
      return dispatch({
        type: ALL_HOTELS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`${URL_BACK}/houses/${id}`);
      return dispatch({
        type: DETAIL,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function googleLogIn(result, token) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: GOOGLE_LOGIN,
        payload: { result, token },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function googleLogOut() {
  return async function (dispatch) {
    try {
      return dispatch({ type: GOOGLE_LOGOUT });
    } catch (error) {
      console.log(error);
    }
  };
}

export function SignIn(values, history) {
  return async function (dispatch) {
    try {
      const json = await axios.post(`${URL_BACK}/user/login`, values);
      console.log(json.data);
      dispatch({
        type: SIGNIN,
        payload: json.data
      })
      history.push("/home")
    } catch (error) {
      dispatch({
        type: ERROR_LOGIN,
        payload: error
      })
      console.log(error)
    }
  };
}

/* export function SignUp(values, history) {
  return async function (dispatch) {
    try {
      const json = await axios.post("https://henry-home-back.herokuapp.com/api/user/register", values)
      console.log(json.data)
      dispatch({
        type: SIGNUP,
        payload: json.data
      })
    } catch (error) {
      dispatch({
        type: ERROR_LOGIN,
        payload: error,
      });
      console.log(error.message);
    }
  }
} */

export function getUserDetail(id, role) {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        `https://henry-home-back.herokuapp.com/api/user/${id}/${role}`
      );
      dispatch({
        type: USER_DETAIL,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function createHouse(formData, token) {
  return async function (dispatch) {
    try {
      var json = await axios.post(
        `https://henry-home-back.herokuapp.com/api/houses`,
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("aaa", json);
      return dispatch({
        type: CREATE_HOUSE,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function adminStatus(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.patch(
        `https://henry-home-back.herokuapp.com/api/houses/status`,
        payload
      );
      console.log(json.data);
      return dispatch({
        type: ADMIN_STATUS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getFacilities() {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `https://henry-home-back.herokuapp.com/api/facilities`
      );
      return dispatch({
        type: GET_FACILITIES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getServices() {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `https://henry-home-back.herokuapp.com/api/services`
      );
      return dispatch({
        type: GET_SERVICES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getLocations() {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `https://henry-home-back.herokuapp.com/api/locations`
      );
      return dispatch({
        type: LOCATIONS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function cleanError() {
  return { type: CLEAN_ERROR, payload: {} }
}

