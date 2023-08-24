import { TOGGLE_LANGUAGE } from "../actions/languageActions";

const initialState = { isSwitched: false };

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LANGUAGE:
      return { ...state, isSwitched: !state.isSwitched };
    default:
      return state;
  }
};
