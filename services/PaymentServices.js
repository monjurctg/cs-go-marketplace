import axios from "axios";

const PaymentServices = {};

PaymentServices.paypalSuccess = (query) => {
  let url = "/paypal/success";
  //  '/steam/get-user-inventory'

  let res = axios.get(url);
  // console.log("res", res);
  return res;
};
PaymentServices.paypal = (data) => {
  let url = "/paypal";
  let res = axios.post(url, data);
  // console.log("res", res);
  return res;
};

PaymentServices.withdraw = (data) => {
  let url = "/withdraw";
  let res = axios
    .post(url, data)
    .then((res) => res)
    .catch((err) => err);
  // console.log("res", res);
  return res;
};
PaymentServices.countries = () => {
  let url = "/withdraw/countries";
  let res = axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
  // console.log("res", res);
  return res;
};

export default PaymentServices;
