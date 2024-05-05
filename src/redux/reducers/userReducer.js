import { getUserToken } from "../../services/userService";
import { GET_PROFILE, RESET_USER, TOGGLE_AUTH } from "../actions/userActions";

const initialState = {
  isAuth: getUserToken(),
  value: {},
  isSendingRequest: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_AUTH:
      return { ...state, isAuth: action.payload };
    case GET_PROFILE:
      return { ...state, value: action.payload };
    case RESET_USER:
      return { ...state, value: {} };
    default:
      return state;
  }
};
