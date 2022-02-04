import axios from "axios";

export function getHotels() {
    return async function (dispatch) {
        var json = await axios.get("https://henry-home-back.herokuapp.com/api/houses")
        return dispatch({
            type: "ALL_HOTELS",
            payload: json.data
        })
    }
}

/**
 * 
(node:5892) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:5892) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.

 */