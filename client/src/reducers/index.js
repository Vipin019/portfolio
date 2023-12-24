import { combineReducers } from "redux";
import {
  setShortProfileDisp,
  setShortProfileContainerDisp,
} from "./changeNavbar";
import { setAuthContainerDisp, setAuthDisp } from "./changeAuth";
const rootReducer = combineReducers({
  setShortProfileDisp,
  setShortProfileContainerDisp,
  setAuthContainerDisp,
  setAuthDisp,
});

export default rootReducer;
