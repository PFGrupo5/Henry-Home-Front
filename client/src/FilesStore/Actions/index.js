import axios from "axios";

export const ALL_HOTELS = "ALL_HOTELS";

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