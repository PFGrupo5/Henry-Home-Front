import axios from "axios";
import { ALL_HOTELS, DETAIL, GOOGLE_LOGIN, GOOGLE_LOGOUT, CREATE_HOUSE, ADMIN_STATUS } from "../Const Types/constActions"

export function getHotels(page=1 , size=10) {
  return async function (dispatch) {
    try {
      
      var json = await axios.get(
        `https://henry-home-back.herokuapp.com/api/houses?page=${page}&size=${size}`
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

export function createHouse(payload,token) {
  return async function (dispatch) {
    try {
      console.log("semando")
      var json = await axios.post(`https://henry-home-back.herokuapp.com/api/houses`,payload,{headers: {
        'Authorization': token
      }}
        )
        console.log(json)
      return dispatch({
        type: CREATE_HOUSE,
        payload: json.data,
      })
    }
    catch (error) {
      console.log(error)
    }
  }
}

export function adminStatus(payload) {
  return async function (dispatch) {
    try {
      console.log("status mandado")
      var json = await axios.patch(`https://henry-home-back.herokuapp.com/api/houses/status`,payload)
      console.log(json.data)
      return dispatch({
        type: ADMIN_STATUS,
        payload: json.data,
      })
    }
    catch (error) {
      console.log(error)
    }
  }
}