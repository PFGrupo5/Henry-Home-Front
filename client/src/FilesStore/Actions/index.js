import axios from "axios";

export function getHotels() {
  return async function (dispatch) {
    var json = await axios.get(
      "https://henry-home-back.herokuapp.com/api/houses"
    );
    return dispatch({
      type: "ALL_HOTELS",
      payload: json.data,
    });
  };
}