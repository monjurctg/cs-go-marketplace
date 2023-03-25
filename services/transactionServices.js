import axios from "axios";

const TransactionServices = {};

TransactionServices.getAllTransactionBalance = (data) => {
  const url = "/transaction/auth/user";
  return axios.post(url, data);
};
TransactionServices.getAllTransactionHistory = () => {
  const url = "/dojo/inventory/transaction/history";
  return axios.get(url);
};

TransactionServices.getPaypalLink = (amouont) => {
  const url = "/paypal";
  const res = axios.post(url, amouont);
  return res;
};

TransactionServices.getPaypalSuccess = (token) => {
  const url = `/paypal/success?token=${token}`;
  const res = axios.get(url);
  return res;
};

TransactionServices.getStripeLink = (amouont) => {
  const url = "/stripe";
  const res = axios.post(url, amouont);
  return res;
};

TransactionServices.getStripeSuccess = (session_id) => {
  const url = `/stripe/success?session_id=${session_id}`;
  const res = axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
  return res;
};

export default TransactionServices;
