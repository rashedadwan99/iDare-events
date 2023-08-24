import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { eventsReducer } from "./eventReducer";
import { languageReducer } from "./languageReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  events: eventsReducer,
  language: languageReducer,
});
