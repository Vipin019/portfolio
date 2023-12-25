import { combineReducers } from "redux";
import {
  setShortProfileDisp,
  setShortProfileContainerDisp,
} from "./changeNavbar";
import { setAuthContainerDisp, setAuthDisp, setAuthState } from "./changeAuth";
const rootReducer = combineReducers({
  setShortProfileDisp,
  setShortProfileContainerDisp,
  setAuthContainerDisp,
  setAuthDisp,
  setAuthState,
});

export default rootReducer;
