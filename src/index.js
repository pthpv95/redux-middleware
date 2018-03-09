import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import reducer from "./reducers";
import App from "./App";
import { Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "react-router-redux";
import store from "./store";
import api from "./services/api";
import history from "./history";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
