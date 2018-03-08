import { REQUEST_LOGGED_IN_AGENT, RESPONSE_LOGGED_IN_AGENT } from "../actions";

const profile = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_LOGGED_IN_AGENT:
            return {
                ...state
            }
        case RESPONSE_LOGGED_IN_AGENT:
            return { ...action.payload.data }

        default:
            return state;
    }
}
export default profile;