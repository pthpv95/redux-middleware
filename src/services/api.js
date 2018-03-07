import Axios from "axios";

const API_ROOT = "http://unicorn.vn:9090/api/v1";

const Auth = {
  login: (username, password) => {
    const authParams = {
      grantType: "password",
      userName: username,
      password: password
    };
    return Axios.post("/accounts/token", authParams);
  },
  current: () => {}
};

const requests = {
  get: url => {
    Axios.get(`${API_ROOT}${url}`);
  }
};

export default {
  Auth
};
