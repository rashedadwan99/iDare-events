import { getUserToken } from "../../services/userService";
import { TOGGLE_AUTH } from "../actions/userActions";

const initialState = { isAuth: getUserToken() };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};
