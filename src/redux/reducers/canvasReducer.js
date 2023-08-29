import { CLOSE_CANVAS, TOGGLE_OPEN_CANVAS } from "../actions/canvasActions";

const initialState = {
  Component: "",
  title: "",
  show: false,
};

export const canvasReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPEN_CANVAS:
      return {
        ...state,
        Component: action.payload.Component,
        title: action.payload.title,
        show: true,
      };
    case CLOSE_CANVAS:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};
