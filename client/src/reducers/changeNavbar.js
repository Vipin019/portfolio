const iniShortProfileDisp = "shortProfile-h";
const iniShortProfileContainerDisp = "shortProfile_container-h";

export const setShortProfileDisp = (state = iniShortProfileDisp, action) => {
  if (action.type === "setShortProfileDisp") {
    // console.log(action);
    return action.payload;
  }
  return state;
};

export const setShortProfileContainerDisp = (
  state = iniShortProfileContainerDisp,
  action
) => {
  if (action.type === "setShortProfileContainerDisp") {
    return state === "shortProfile_container"
      ? "shortProfile_container-h"
      : "shortProfile_container";
  }
  return state;
};
