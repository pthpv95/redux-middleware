import {
  REQUEST_LOGIN,
  RESPONSE_LOGIN,
  LOGIN_PAGE_UNLOADED,
  UNAUTHORIZED
} from "../actions";

const login = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return { ...state, inProgress: true };
    case RESPONSE_LOGIN:
      return {
        ...state,
        inProgress: false,
        error: action.payload.errors ? action.payload.errors : null
      };
    case LOGIN_PAGE_UNLOADED:
      return {};
    case UNAUTHORIZED:
      return {
        ...state,
        error: 'UNAUTHORIZED'
      };
    default:
      return state;
  }
};

export default login;
