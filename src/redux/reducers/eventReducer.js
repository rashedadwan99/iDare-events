import {
  GET_ALL_EVENTS,
  GET_MY_EVENTS,
  GET_RECOMMENDED_EVENTS,
  RESET_MY_EVENTS,
  TOGGLE_LOADING,
} from "../actions/eventActions";

const initialState = {
  allEvents: [],
  myEvents: [],
  recommendedEvents: [],
  isLoading: true,
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EVENTS:
      return { ...state, allEvents: [...action.payload], isLoading: false };
    case GET_MY_EVENTS:
      return { ...state, myEvents: [...action.payload] };
    case GET_RECOMMENDED_EVENTS:
      return { ...state, recommendedEvents: [...action.payload] };

    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case RESET_MY_EVENTS:
      return { ...state, myEvents: [] };
    default:
      return state;
  }
};
