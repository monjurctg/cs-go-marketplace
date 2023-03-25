import {
  SET_CARD_DETAILS_ACTIVE,
  SET_CARD_DETAILS_DEACTIVE,
  SET_UNREAD_NOTI_LENGTH,
} from "../types";

export const setUnreadNotiLength = (data) => {
  return {
    type: SET_UNREAD_NOTI_LENGTH,
    payload: data,
  };
};
export const setCardDetailsActive = () => {
  return {
    type: SET_CARD_DETAILS_ACTIVE,
  };
};
export const setCardDetailsDeActive = () => {
  return {
    type: SET_CARD_DETAILS_DEACTIVE,
  };
};
