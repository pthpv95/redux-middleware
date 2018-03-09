import api from "../services/api";
import googleApi from "../services/google-api";

export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const RESPONSE_LOGIN = "RESPONSE_LOGIN";
export const REQUEST_LOGGED_IN_AGENT = "REQUEST_LOGGED_IN_AGENT";
export const RESPONSE_LOGGED_IN_AGENT = "RESPONSE_LOGGED_IN_AGENT";
export const LOGIN_PAGE_UNLOADED = "LOGIN_PAGE_UNLOADED";
export const REDIRECT = "REDIRECT";
export const UNAUTHORIZED = "UNAUTHORIZED";
export const REQUEST_GOOGLE_BOOKS = "REQUEST_GOOGLE_BOOKS";
export const RESPONSE_GET_GOOGLE_BOOKS = "RESPONSE_GET_GOOGLE_BOOKS";

export function login(credentials) {
  return function (dispatch) {
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
  }
}

function requestBooks(title) {
  return {
    type: REQUEST_GOOGLE_BOOKS,
    title
  }
}

function getBooksSuccessfully(payload) {
  return {
    type: RESPONSE_GET_GOOGLE_BOOKS,
    payload
  }
}

export function searchGoogleBook(title) {
  return function (dispatch) {
    dispatch(requestBooks(title));
    return googleApi.searchBooks(title)
      .then(res => {
        console.log(res);
        
        const payload = res;
        dispatch(getBooksSuccessfully(payload));
      })
  }
}

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
  unloadLogginPage,
  searchGoogleBook
};
