import { SET_ACTIVE_STATIC_BAR, SET_MOBILE_BAR_DATA,SET_MDS_DATA, SET_ITEM_ON_SALE_DATA, SET_RECOMMENDED_PRICE, SET_MIDDLE_LOADER, SET_DDS_DATA, SET_SDS_DATA } from "../types";

const initialState = {
    activeBar: null,
    mobileBar: false,
    mdsData:[],
    ddsData:[],
    sdsData:[],
    itemOnSaleData:[],
    recomPrice:[],
    middleLoader:false

  };

  export default function staticBarReducer(state = initialState, action) {
    switch (action.type) {
      case SET_ACTIVE_STATIC_BAR:
        return {
          ...state,
          activeBar: action.payload,
        };
        case SET_MOBILE_BAR_DATA:
          return {
            ...state,
            mobileBar: action.payload,
          };
          case SET_MDS_DATA:
          return {
            ...state,
            mdsData: action.payload,
          };
          case SET_DDS_DATA:
            return {
              ...state,
              ddsData: action.payload,
            };
            case SET_SDS_DATA:
              return {
                ...state,
                sdsData: action.payload,
              };
            
          case SET_ITEM_ON_SALE_DATA:
            return {
              ...state,
              itemOnSaleData: action.payload,
            };
            case SET_RECOMMENDED_PRICE:
              return {
                ...state,
                recomPrice: action.payload,
              };
              case SET_MIDDLE_LOADER :
                return {
                  ...state,
                  middleLoader: action.payload,
                };
              
            
      default:
        return state;
    }
  }