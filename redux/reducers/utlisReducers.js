import {
  SET_CARD_DETAILS_ACTIVE,
  SET_CARD_DETAILS_DEACTIVE,
  SET_UNREAD_NOTI_LENGTH,
} from "../types";
const initialState = {
  unreadNotificationLength: 0,
  cardDetailsActive: true,
};

export default function utilsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_UNREAD_NOTI_LENGTH:
      return {
        ...state,
        unreadNotificationLength: action.payload,
      };
    case SET_CARD_DETAILS_ACTIVE:
      return {
        ...state,
        cardDetailsActive: true,
      };
    case SET_CARD_DETAILS_DEACTIVE:
      return {
        ...state,
        cardDetailsActive: false,
      };

    default:
      return state;
  }
}
