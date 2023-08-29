export const TOGGLE_OPEN_CANVAS = "TOGGLE_OPEN_CANVAS";
export const CLOSE_CANVAS = "CLOSE_CANVAS";

export const toggleOpenCanvasAction = (Component, title) => {
  return {
    type: TOGGLE_OPEN_CANVAS,
    payload: {
      Component,
      title,
    },
  };
};
export const closeCanvasAction = () => {
  return {
    type: CLOSE_CANVAS,
  };
};
