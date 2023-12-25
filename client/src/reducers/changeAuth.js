const iniAuthContainerDisp = "auth_container-h";
const iniAuthDisp = "auth-h";
const iniAuthState = "login";

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
