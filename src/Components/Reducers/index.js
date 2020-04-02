import { combineReducers } from "redux";
import AddDataReduer from "./AddDataReducer";

export default combineReducers({
  userData: AddDataReduer
});
