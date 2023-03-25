import {
  AUTH_MODAL_CLOSE,
  AUTH_MODAL_OPEN,
  SET_LOGIN_PAGE_RELOAD,
  SET_USER_PROFILE_DATA,
} from "../types";
const initialState = {
  isAuthenticated: false,
  loginToken: null,
  userProfile: null,
  authModal: false,
  extra: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_PAGE_RELOAD:
      return {
        ...state,
        loginToken: action.payload,
      };
    case SET_USER_PROFILE_DATA:
      return {
        ...state,
        userProfile: action.payload,
      };
    case AUTH_MODAL_OPEN:
      return {
        ...state,
        authModal: action.payload,
      };

    case AUTH_MODAL_CLOSE:
      return {
        ...state,
        authModal: action.payload,
      };

    default:
      return state;
  }
}
