import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/Routes.jsx";
import { store } from "./FilesStore/Store";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import "./index.css";
import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Routes />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
