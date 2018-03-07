import api from "../services/api";

export const LOGIN = "LOGIN";
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const RESPONSE_LOGIN = "RESPONSE_LOGIN";

export const login = payloads => dispatch => {
  dispatch({ type: REQUEST_LOGIN });
  return api.Auth.login(payloads.username, payloads.password).then(
    dispatch({ type: RESPONSE_LOGIN })
  );
};
