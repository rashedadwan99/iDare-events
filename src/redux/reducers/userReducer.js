import { getUserToken } from "../../services/userService";
import { GET_PROFILE, RESET_USER, TOGGLE_AUTH } from "../actions/userActions";

const initialState = {
  isAuth: getUserToken(),
  value: {},
  badges: [],
  isSendingRequest: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_AUTH:
      return { ...state, isAuth: action.payload };
    case GET_PROFILE:
      return {
        ...state,
        value: action.payload.user,
        badges: action.payload.badges,
      };
    case RESET_USER:
      return { ...state, value: {}, badges: [] };
    default:
      return state;
  }
};
