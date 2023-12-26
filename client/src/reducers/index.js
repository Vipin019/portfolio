import { combineReducers } from "redux";
import {
  setShortProfileDisp,
  setShortProfileContainerDisp,
} from "./changeNavbar";
import {
  setAuthContainerDisp,
  setAuthDisp,
  setAuthState,
  setLoginState,
} from "./changeAuth";
const rootReducer = combineReducers({
  setShortProfileDisp,
  setShortProfileContainerDisp,
  setAuthContainerDisp,
  setAuthDisp,
  setAuthState,
  setLoginState,
});

export default rootReducer;
