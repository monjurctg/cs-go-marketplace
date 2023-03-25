import MarketService from "../../services/MarketService";
import {
  SET_ACTIVE_STATIC_BAR,
  SET_DDS_DATA,
  SET_ITEM_ON_SALE_DATA,
  SET_MDS_DATA,
  SET_MIDDLE_LOADER,
  SET_MOBILE_BAR_DATA,
  SET_RECOMMENDED_PRICE,
  SET_SDS_DATA,
} from "../types";

export const setActiveStaticBar = (data) => {
  return {
    type: SET_ACTIVE_STATIC_BAR,
    payload: data,
  };
};

export const setActiveMobileBar = (data) => {
  return {
    type: SET_MOBILE_BAR_DATA,
    payload: data,
  };
};
export const mdsApiCall = (data) => async (dispatch) => {
  // console.log("data", data);
  let res = await MarketService.marketListening(data);
  // console.log(res, "from mds api");

  dispatch({type: SET_MDS_DATA, payload: res});
};

export const itemOnSaleApiCall = (data) => async (dispatch) => {
  // console.log('query', query)
  // console.log('first')
  let res = await MarketService.itemOnSale(data);
  dispatch({type: SET_ITEM_ON_SALE_DATA, payload: res?.data});
};
export const ddsApiCall = (data) => async (dispatch) => {
  // console.log('query', query)
  let res = await MarketService.dojoInventory(data);
  // console.log('ressdcsdfdsf', res)
  dispatch({type: SET_DDS_DATA, payload: res?.data});
};

export const sdsApiCall = (data) => async (dispatch) => {
  // console.log('query', query)
  let res = await MarketService.steamInventory(data);
  console.log("ressdcsdfdsf", res);
  dispatch({type: SET_SDS_DATA, payload: res?.data});
};

export const setRecomPrice = (data) => {
  return {
    type: SET_RECOMMENDED_PRICE,
    payload: data,
  };
};

export const setMiddleLoader = (data) => {
  return {
    type: SET_MIDDLE_LOADER,
    payload: data,
  };
};
