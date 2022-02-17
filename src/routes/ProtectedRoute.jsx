import React from "react";
import { Redirect, Route } from "react-router-dom";

// En algun momento va a haber que proteger las rutas

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log("this", isAuthenticated);

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />
            }
        />
    );
}

export default ProtectedRoute;