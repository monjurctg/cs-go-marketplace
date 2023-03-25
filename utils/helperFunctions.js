import {toast} from "react-toastify";

export const getToken = () => {
  if (typeof window !== "undefined") {
    let token = localStorage.getItem("cs_go_client_token");
    return token;
  }
};
export const getUser = () => {
  if (typeof window !== "undefined") {
    let user = localStorage.getItem("cs_go_user");
    return user;
  }
};
export const setUser = (data) => {
  localStorage.setItem("cs_go_user", data);
};
export const removeUser = () => {
  localStorage.removeItem("cs_go_user");
};
export const setToken = (token) => {
  localStorage.setItem("cs_go_client_token", token);
};
export const setDevice = (device) => {
  localStorage.setItem("cs_go_client_device", device);
};

export const removeToken = () => {
  localStorage.removeItem("cs_go_client_token");
};
export const successNotification = (message) => {
  toast.success(`${message}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
export const errorNotification = (message) => {
  toast.error(`${message}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const calculatePercentage = (price, percent) => {
  const calculatePercentagePrice = parseFloat(price + (price * percent) / 100);
  return calculatePercentagePrice.toFixed(2);
};

export const balancePercentageReduce = (price, percent) => {
  const calculatePercentagePrice = parseFloat(price - (price * percent) / 100);
  return calculatePercentagePrice.toFixed(2);
};

export const getPercentage = (base_price, price, percent) => {
  if (!price || !base_price) return "price and base_price nedded";
  const calculatePercentagePrice = parseFloat(price + (price * percent) / 100);
  const dif = base_price - calculatePercentagePrice;
  const percentage_base = (dif * 100) / base_price;
  // const percentage_price = (dif * 100) / price;
  // console.log(dif, price, base_price, percentage_base, percentage_price);
  return percentage_base.toFixed(2);
};

let getAuthHeader = () => {
  let token = getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

let getAuthHeaderWithFormData = () => {
  let token = getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
};

let getAuthHeaderWithJson = () => {
  let token = getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

let getAuthHeaderWithJsonAndFormData = () => {
  let token = getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Content-Type": "multipart/form-data",
    },
  };
};

let getAuthHeaderWithJsonAndFormDataAndUrlEncoded = () => {
  let token = getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Content-Type": "multipart/form-data",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
};
