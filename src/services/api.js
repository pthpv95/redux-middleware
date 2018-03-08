import axios from 'axios';
export const API_ROOT = "http://unicorn.vn:9090/api/v1";

const Auth = {
  login: (credentials) => {
    const authParams = {
      grantType: "password",
      userName: credentials.username,
      password: credentials.password
    };
    return axios.post(`${API_ROOT}/accounts/token`, authParams)
      .then((res) => {
        window.localStorage.setItem('access_token', res.data.access_token);
      });
  },
  current: () => {
    const header = {
      "Authorization": `Bearer ${window.localStorage.getItem('access_token')}`
    }
    return axios.get(`${API_ROOT}/agents/get-current-agent-details`, { headers: header });
  }
};



const requests = {
  get: url => {
    axios.get(`${API_ROOT}${url}`);
  }
};

export default {
  Auth
};
