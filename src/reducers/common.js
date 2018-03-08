import { RESPONSE_LOGIN } from "../actions";

const common = (state = {}, action) => {
    switch (action.type) {
        case RESPONSE_LOGIN:
            return {
                ...state, redirectTo: '/'
            }
        default:
            return state;
    }
}

export default common;