import { TOGGLE_LANGUAGE } from "../actions/languageActions";

const initialState = {
  isSwitched: false,
  isArabic: localStorage.getItem("lng") === "ar",
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LANGUAGE:
      return {
        ...state,
        isSwitched: !state.isSwitched,
        isArabic: localStorage.getItem("lng") === "ar",
      };
    default:
      return state;
  }
};
