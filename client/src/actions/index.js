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
