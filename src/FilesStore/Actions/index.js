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
  ADD_FAV,
  DELETE_FAV,
  LOG_OUT,
  /*  SIGNUP, */
  USER_DETAIL,
  GET_SERVICES,
  GET_FACILITIES,
  LOCATIONS,
  ERROR_LOGIN,
  CLEAN_ERROR,
  PATCH_HOUSE,
} from "../Const Types/constActions";
import filterUrl from "../../utils/FilterUrl"

export function getHotels(page = 1, size = 10, filter) {
  return async function (dispatch) {

    const URL = filterUrl(page, size, filter)
    try {
      var json = await axios.get(URL);
      // &minPrice=${filter?.minPrice}&maxPrice=${filter?.maxPrice}&location=${filter?.location}&stars=${filter?.stars}&numberofPeople=${filter?.numberofPeople}&numberOfBeds=${filter?.numberOfBeds}
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
      const { data } = await axios.post(`${URL_BACK}/user/login`, values);
      console.log(data);
      dispatch({
        type: SIGNIN,
        payload: data,
      });

      if (data.result.role === "Moderator") {
        console.log('si')
        history.push(`/owner/${data.result.id}`);
      } else {
        console.log("noe");
        history.push("/home");
      }
    } catch (error) {
      dispatch({
        type: ERROR_LOGIN,
        payload: error,
      });
      console.log(error);
    }
  };
}

export function getUserDetail(id, role) {
  return async function (dispatch) {
    console.log(id, role, "aca");
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
  return { type: CLEAN_ERROR, payload: {} };
}

export function AddFav(id, token) {
  return async function (dispatch) {
    try {
      var json = await axios.post(
        `https://henry-home-back.herokuapp.com/api/favs`,
        { HousingId: id },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("AGREGAR");
      return dispatch({
        type: ADD_FAV,
        payload: json.data,
      });
    } catch (error) {
      console.log("AddFav:", error);
    }
  };
}

export function DelFav(id, token) {
  return async function (dispatch) {
    try {
      var json = await axios.delete(
        `https://henry-home-back.herokuapp.com/api/favs`,
        {
          headers: {
            Authorization: token,
          },
          data: { HousingId: id },
        }
      );
      console.log(json.data);

      console.log("BORRAR");
      return dispatch({
        type: DELETE_FAV,
        payload: json.data,
      });
    } catch (error) {
      console.log("DelFav:", error);
    }
  };
}

export function logOut() {
  return { type: LOG_OUT, payload: {} };
}

export function patchHouse(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.patch(
        `https://henry-home-back.herokuapp.com/api/houses`,
        payload
      );
      console.log(json);
      return dispatch({
        type: PATCH_HOUSE,
        payload: json.data,
      });
    } catch (error) {
      console.log("Error action");
      console.log(error);
    }
  };
}
