import _ from "lodash";
import {
  GET_UPCOMING_EVENTS,
  GET_MY_EVENTS,
  GET_RECOMMENDED_EVENTS,
  RESET_MY_EVENTS,
  TOGGLE_LOADING,
} from "../actions/eventActions";
import { sortData } from "../../components/utils/sort";

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
        allEvents: sortData(action.payload, "id", "desc"),
        upcomingEvents: sortData(action.payload, "id", "desc"),
        isLoading: false,
      };
    case GET_MY_EVENTS:
      return {
        ...state,
        allEvents: _.unionBy(
          state.allEvents,
          sortData(action.payload, "id", "desc"),
          "id"
        ),
        myEvents: sortData(action.payload, "id", "desc"),
      };
    case GET_RECOMMENDED_EVENTS:
      return {
        ...state,
        allEvents: _.unionBy(
          state.allEvents,
          sortData(action.payload, "id", "desc"),
          "id"
        ),
        recommendedEvents: sortData(action.payload, "id", "desc"),
      };

    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case RESET_MY_EVENTS:
      return { ...state, myEvents: [], recommendedEvents: [] };
    default:
      return state;
  }
};
