import api from "../services/api";

export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const RESPONSE_LOGIN = "RESPONSE_LOGIN";
export const REQUEST_LOGGED_IN_AGENT = "REQUEST_LOGGED_IN_AGENT";
export const RESPONSE_LOGGED_IN_AGENT = "RESPONSE_LOGGED_IN_AGENT";
export const LOGIN_PAGE_UNLOADED = "LOGIN_PAGE_UNLOADED";
export const REDIRECT = "REDIRECT";
export const UNAUTHORIZED = "UNAUTHORIZED";

export const login = credentials => dispatch => {
  dispatch({ type: REQUEST_LOGIN });
  const payload = {};
  return api.Auth.login(credentials).then(
    res => {
      payload.errors = null;
      dispatch({ type: RESPONSE_LOGIN, payload });
    },
    err => {
      payload.err = err;
    }
  );
};

export const getCurrentAgent = () => dispatch => {
  dispatch({ type: REQUEST_LOGGED_IN_AGENT });
  return api.Auth.current().then(
    res => {
      const payload = res.data;
      dispatch({ type: RESPONSE_LOGGED_IN_AGENT, payload });
    },
    err => {
      dispatch({ type: UNAUTHORIZED, error: err });
    }
  );
};

export const unloadLogginPage = () => {
  return {
    type: LOGIN_PAGE_UNLOADED
  };
};

export default {
  login,
  getCurrentAgent,
  unloadLogginPage
};
