import axios from "axios";

const AuthServices = {};

AuthServices.Steamlogin = () => {
  let url = "auth/steam";
  let res = axios.get(url);
  return res;
};

AuthServices.checkToken = (token) => {
  let url = "/auth/token/check";
  let res = axios
    .post(url, {token})
    .then((res) => res)
    .catch((err) => err);
  return res;
};

AuthServices.getUser = () => {
  let url = "auth/user";
  let res = axios.get(url);
  return res;
};


AuthServices.authUserVerified = () => {
  let url = "auth/user/verified";
  let res = axios.get(url);
  return res;
};

AuthServices.accessToken = () => {
  let url = "sumsub/access-token";
  let res = axios.get(url);
  return res;
};
export default AuthServices;
