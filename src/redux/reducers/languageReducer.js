import { language } from "../../locales/language";
import { TOGGLE_LANGUAGE } from "../actions/languageActions";

const initialState = {
  isSwitched: false,
  isArabic: language() === "ar",
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LANGUAGE:
      return {
        ...state,
        isSwitched: !state.isSwitched,
        isArabic: language() === "ar",
      };
    default:
      return state;
  }
};
