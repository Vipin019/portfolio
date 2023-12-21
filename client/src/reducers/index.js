import { combineReducers } from "redux";
import {
  setShortProfileDisp,
  setShortProfileContainerDisp,
} from "./changeNavbar";
const rootReducer = combineReducers({
  setShortProfileDisp,
  setShortProfileContainerDisp,
});

export default rootReducer;
