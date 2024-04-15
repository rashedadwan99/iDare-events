import { GET_PROJECTS } from "../actions/projectAction";

const initialState = {
  value: [],
};
export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
