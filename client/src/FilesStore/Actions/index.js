import axios from "axios";

export function getHotels() {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "https://henry-home-back.herokuapp.com/api/houses"
      );
      return dispatch({
        type: "ALL_HOTELS",
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
        type: "DETAIL",
        payload: json.data,
      })
    }
    catch (error) {
      console.log(error)
    }
  }
}