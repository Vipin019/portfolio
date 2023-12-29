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
  setForgetState,
} from "./changeAuth";
const rootReducer = combineReducers({
  setShortProfileDisp,
  setShortProfileContainerDisp,
  setAuthContainerDisp,
  setAuthDisp,
  setAuthState,
  setLoginState,
  setForgetState,
});

export default rootReducer;
