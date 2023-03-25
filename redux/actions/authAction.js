import axios from "axios";

import {getToken} from "../../utils/helperFunctions";
import {
  AUTH_MODAL_CLOSE,
  AUTH_MODAL_OPEN,
  SET_LOGIN_PAGE_RELOAD,
  SET_USER_PROFILE_DATA,
} from "../types";

export const setLoginCondition = (data) => {
  return {
    type: SET_LOGIN_PAGE_RELOAD,
    payload: data,
  };
};

export const getUserProfileDataAction = () => (dispatch) => {
  const token = getToken();
  if (token) {
    axios
      .get("/auth/user", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        dispatch({
          type: SET_USER_PROFILE_DATA,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_USER_PROFILE_DATA,
          payload: null,
        });
      });
    // if(){}
  }
};
export const setOpenModal = () => {
  return {
    type: AUTH_MODAL_OPEN,
    payload: true,
  };
};

export const setCloseModal = () => {
  return {
    type: AUTH_MODAL_CLOSE,
    payload: false,
  };
};
