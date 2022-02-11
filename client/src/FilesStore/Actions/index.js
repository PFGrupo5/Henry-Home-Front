import axios from "axios";
import { ALL_HOTELS, DETAIL, GOOGLE_LOGIN, GOOGLE_LOGOUT, } from "../Const Types/constActions"

export function getHotels() {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "https://henry-home-back.herokuapp.com/api/houses"
      );
      return dispatch({
        type: ALL_HOTELS,
        payload: json.data.rows,
      });
    }
    catch (error) {
      console.log(error)
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`https://henry-home-back.herokuapp.com/api/houses/${id}`)
      return dispatch({
        type: DETAIL,
        payload: json.data,
      })
    }
    catch (error) {
      console.log(error)
    }
  }
}

export function googleLogIn(result, token) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: GOOGLE_LOGIN,
        payload: { result, token }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function googleLogOut() {
  return async function (dispatch) {
    try {
      return dispatch({ type: GOOGLE_LOGOUT })
    } catch (error) {
      console.log(error)
    }
  }
}