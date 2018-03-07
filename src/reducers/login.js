import { LOGIN, REQUEST_LOGIN, RESPONSE_LOGIN } from "../actions";
const login = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, payloads: action.payloads, inProgress: false };
    case "REQUEST_LOGIN":
      return { ...state, inProgress: true };
    case "RESPONSE_LOGIN":
      return { ...state, inProgress: false };
    default:
      return state;
  }
};

export default login;
