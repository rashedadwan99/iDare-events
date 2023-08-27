import { GET_ALL_EVENTS, TOGGLE_LOADING } from "../actions/eventActions";

const initialState = { allEvents: [], myEvents: [], isLoading: true };

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EVENTS:
      return { ...state, allEvents: [...action.payload], isLoading: false };
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
