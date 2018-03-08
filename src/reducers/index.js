import login from "../reducers/login";
import profile from "../reducers/profile";
import common from "../reducers/common"
import { combineReducers } from "redux";

export default combineReducers({
    login, profile, common
});
