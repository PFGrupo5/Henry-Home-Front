import axios from "axios";
import { ALL_HOTELS, DETAIL, GOOGLE_LOGIN, GOOGLE_LOGOUT, CREATE_HOUSE, ADMIN_STATUS, SIGNIN, SIGNUP, USER_DETAIL } from "../Const Types/constActions"

export function getHotels(page = 1, size = 10) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `https://henry-home-back.herokuapp.com/api/houses?page=${page}&size=${size}`
      );
      return dispatch({
        type: ALL_HOTELS,
        payload: json.data,
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

export function SignIn(values, history) {
  return async function (dispatch) {
    try {
      const json = await axios.post("https://henry-home-back.herokuapp.com/api/user/login", values)
      console.log(json.data)
      dispatch({
        type: SIGNIN,
        payload: json.data
      })

    } catch (error) {
      console.log(error)
    }
  }
}

export function SignUp(values, history) {
  return async function (dispatch) {
    try {
      const json = await axios.post("https://henry-home-back.herokuapp.com/api/user/register", values)
      console.log(json.data)
      dispatch({
        type: SIGNUP,
        payload: json.data
      })
      history.push("/home")
    } catch (error) {
      console.log(error)
    }
  }
}

export function getUserDetail(id, role) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`https://henry-home-back.herokuapp.com/api/user/${id}/${role}`);
      dispatch({
        type: USER_DETAIL,
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function createHouse(payload, token) {
  return async function (dispatch) {
    try {
      var json = await axios.post(`https://henry-home-back.herokuapp.com/api/houses`,
        payload,
        {
          headers: {
            'Authorization': token
          }
        }
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
      var json = await axios.patch(`https://henry-home-back.herokuapp.com/api/houses/status`, payload)
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