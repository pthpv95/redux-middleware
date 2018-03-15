import { REQUEST_GOOGLE_BOOKS, RESPONSE_GET_GOOGLE_BOOKS } from "../actions";

const book = (state = [], action) => {
    switch (action.type) {
        case REQUEST_GOOGLE_BOOKS:
            return {
                ...state, isFetching: true
            }
        case RESPONSE_GET_GOOGLE_BOOKS:
            return {
                ...state, isFetching: false, ...action.payload
            }
        default:
            return state;
    }
}

export default book;