import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import reducer from "./reducers";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "react-router-redux";
import store from "./store";
import api from "./services/api";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App isAuthenticated={api.Auth.isAuthorized()} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
