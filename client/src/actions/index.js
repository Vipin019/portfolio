export const setShortProfileDisp = (val) => {
  return {
    type: "setShortProfileDisp",
    payload: val,
  };
};

export const setShortProfileContainerDisp = () => {
  return { type: "setShortProfileContainerDisp" };
};

export const setAuthContainerDisp = () => {
  return { type: "setAuthContainerDisp" };
};
export const setAuthDisp = (val) => {
  return { type: "setAuthDisp", payload: val };
};
export const setAuthState = (val) => {
  return { type: "setAuthState", payload: val };
};
export const setLoginState = (val) => {
  return { type: "setLoginState", payload: val };
};
export const setForgetState = (val) => {
  return { type: "setForgetState", payload: val };
};
export const setAuthId = (val) => {
  return { type: "setAuthId", payload: val };
};
export const setEmailVerified = (val) => {
  return { type: "setEmailVerified", payload: val };
};
