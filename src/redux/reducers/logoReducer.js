import { HIDE_EVENT_LOGO, SHOW_EVENT_LOGO } from "../actions/logoActions";

const initalState = { show: false };
export const logoReducer = (state = initalState, action) => {
  switch (action.type) {
    case SHOW_EVENT_LOGO:
      return {
        ...state,
        show: true,
      };
    case HIDE_EVENT_LOGO:
      return { ...state, show: false };
    default:
      return state;
  }
};
