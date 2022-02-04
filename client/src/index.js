import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes.jsx';
import { store } from "./FilesStore/Store";
import { Provider } from "react-redux";


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

