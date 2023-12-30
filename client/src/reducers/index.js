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
  setAuthId,
  setEmailVerified,
} from "./changeAuth";
const rootReducer = combineReducers({
  setShortProfileDisp,
  setShortProfileContainerDisp,
  setAuthContainerDisp,
  setAuthDisp,
  setAuthState,
  setLoginState,
  setForgetState,
  setAuthId,
  setEmailVerified,
});

export default rootReducer;
