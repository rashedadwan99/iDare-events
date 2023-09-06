import { TOGGLE_AUTH } from "../actions/userActions";

const initialState = { isAuth: false };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};
