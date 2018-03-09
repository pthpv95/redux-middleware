import login from "../reducers/login";
import profile from "../reducers/profile";
import common from "../reducers/common"
import book from "../reducers/book";

import { combineReducers } from "redux";

export default combineReducers({
    login, profile, common, book
});
