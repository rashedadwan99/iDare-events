import _ from "lodash";
import {
  GET_UPCOMING_EVENTS,
  GET_MY_EVENTS,
  GET_RECOMMENDED_EVENTS,
  RESET_MY_EVENTS,
  TOGGLE_LOADING,
} from "../actions/eventActions";

const initialState = {
  upcomingEvents: [],
  myEvents: [],
  recommendedEvents: [],
  allEvents: [],
  isLoading: true,
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UPCOMING_EVENTS:
      return {
        ...state,
        allEvents: _.union(state.allEvents, [...action.payload]),
        upcomingEvents: [...action.payload],
        isLoading: false,
      };
    case GET_MY_EVENTS:
      return {
        ...state,
        allEvents: _.union(state.allEvents, [...action.payload]),
        myEvents: [...action.payload],
      };
    case GET_RECOMMENDED_EVENTS:
      return {
        ...state,
        allEvents: _.union(state.allEvents, [...action.payload]),
        recommendedEvents: [...action.payload],
      };

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
