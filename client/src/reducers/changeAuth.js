import getCookie from "../utils/getCookieByName";

const iniAuthContainerDisp = "auth_container-h";
const iniAuthDisp = "auth-h";
const iniAuthState = "login";
const iniLoginState = getCookie("login");
const iniForgetState = false;
const iniAuthId = null;
const iniEmailVerified = false;

export const setAuthContainerDisp = (state = iniAuthContainerDisp, action) => {
  if (action.type === "setAuthContainerDisp") {
    return state === "auth_container" ? "auth_container-h" : "auth_container";
  }
  return state;
};

export const setAuthDisp = (state = iniAuthDisp, action) => {
  if (action.type === "setAuthDisp") {
    return action.payload;
  }
  return state;
};

export const setAuthState = (state = iniAuthState, action) => {
  if (action.type === "setAuthState") {
    return action.payload;
  }
  return state;
};
export const setLoginState = (state = iniLoginState, action) => {
  if (action.type === "setLoginState") {
    return action.payload;
  }
  return state;
};
export const setForgetState = (state = iniForgetState, action) => {
  if (action.type === "setForgetState") {
    return action.payload;
  }
  return state;
};
export const setAuthId = (state = iniAuthId, action) => {
  if (action.type === "setAuthId") {
    return action.payload;
  }
  return state;
};
export const setEmailVerified = (state = iniEmailVerified, action) => {
  if (action.type === "setEmailVerified") {
    return action.payload;
  }
  return state;
};
