import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { eventsReducer } from "./eventReducer";
import { languageReducer } from "./languageReducer";
import { ModalReducer } from "./modalReducer";
import { canvasReducer } from "./canvasReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  events: eventsReducer,
  language: languageReducer,
  modal: ModalReducer,
  canvas: canvasReducer,
});
