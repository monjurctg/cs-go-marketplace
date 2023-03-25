import {combineReducers} from "redux";
import authReducer from "./authReducer";
import staticBarReducer from "./staticBarReducer";
import steamReducer from "./steamReducer";
import utilsReducer from "./utlisReducers";
// import StaticsBars from "../../components/layouts/StaticsBars";
// import authReducer from "./authReducer";
// import productReducer from "./productReducer";

export default combineReducers({
  auth: authReducer,
  //   products: productReducer,

  staticBar: staticBarReducer,
  steamRed: steamReducer,
  utils: utilsReducer,
});
