import {
  SET_AUTH_MODAL_HIDE,
  SET_AUTH_MODAL_SHOW,
  SET_PRICE_VALUE,
  SET_RECOMMENDED_PRICE,
  SET_SELECTED_ITEM,
  SET_STEP,
  GET_ALL_SKIN,
  GET_ALL_SKIN_FALSE,
} from "../types";

export const setStep = (data) => {
  return {
    type: SET_STEP,
    payload: data,
  };
};

export const setPriceValue = (data) => {
  return {
    type: SET_PRICE_VALUE,
    payload: data,
  };
};

export const setSelectedItem = (data) => {
  return {
    type: SET_SELECTED_ITEM,
    payload: data,
  };
};

export const getAllskin = () => {
  return {
    type: GET_ALL_SKIN,
    payload: true,
  };
};
export const getAllskinFalse = () => {
  console.log("get all skin false");

  return {
    type: GET_ALL_SKIN_FALSE,
    payload: false,
  };
};
export const setRecomendedPrice = (data) => {
  return {
    type: SET_RECOMMENDED_PRICE,
    payload: data,
  };
};

export const setAuthModalShow = () => {
  return {
    type: SET_AUTH_MODAL_SHOW,
    payload: true,
  };
};

export const setAuthModalHide = () => {
  return {
    type: SET_AUTH_MODAL_HIDE,
    payload: false,
  };
};
