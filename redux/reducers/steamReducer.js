import {
  SET_ACTIVE_STATIC_BAR,
  SET_MOBILE_BAR_DATA,
  SET_MDS_DATA,
  SET_ITEM_ON_SALE_DATA,
  SET_RECOMMENDED_PRICE,
  SET_MIDDLE_LOADER,
  SET_STEP,
  SET_PRICE_VALUE,
  SET_SELECTED_ITEM,
  SET_AUTH_MODAL_SHOW,
  SET_AUTH_MODAL_HIDE,
  GET_ALL_SKIN,
  GET_ALL_SKIN_FALSE,
} from "../types";

const initialState = {
  step: 1,
  priceValue: [],
  selectedItem: [],
  recommendedPrice: [],
  authModalShow: false,
  isGetAgain: false,
};

export default function steamReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRICE_VALUE:
      return {
        ...state,
        priceValue: action.payload,
      };
    case SET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.payload,
      };
    case SET_RECOMMENDED_PRICE:
      return {
        ...state,
        recommendedPrice: action.payload,
      };
    case SET_AUTH_MODAL_HIDE:
      return {
        ...state,
        authModalShow: action.payload,
      };
    case SET_AUTH_MODAL_SHOW:
      return {
        ...state,
        authModalShow: action.payload,
      };
    case GET_ALL_SKIN:
      return {
        ...state,
        isGetAgain: action.payload,
      };
    case GET_ALL_SKIN_FALSE:
      return {
        ...state,
        isGetAgain: action.payload,
      };
    //   case SET_MIDDLE_LOADER :
    //     return {
    //       ...state,
    //       middleLoader: action.payload,
    //     };

    default:
      return state;
  }
}
