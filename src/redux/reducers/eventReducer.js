import _ from "lodash";
import {
  GET_UPCOMING_EVENTS,
  GET_MY_EVENTS,
  GET_RECOMMENDED_EVENTS,
  RESET_MY_EVENTS,
  TOGGLE_LOADING,
  GET_EVENT_MEDIA,
} from "../actions/eventActions";
import { sortData } from "../../components/utils/sort";

const initialState = {
  upcomingEvents: [],
  myEvents: [],
  recommendedEvents: [],
  allEvents: [],
  eventMedia: {
    images: [],
    videos: [],
  },
  isLoading: true,
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENT_MEDIA:
      return { ...state, eventMedia: action.payload };
    case GET_UPCOMING_EVENTS:
      return {
        ...state,
        allEvents: sortData(action.payload, "start_time", "asc"),
        upcomingEvents: sortData(action.payload, "start_time", "asc"),
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case GET_MY_EVENTS: {
      const myEvents = sortData(
        state.allEvents.filter((item) => action.payload.includes(item.id)),
        "start_time",
        "asc"
      );

      return {
        ...state,
        myEvents: [...myEvents],
      };
    }
    case GET_RECOMMENDED_EVENTS:
      return {
        ...state,
        allEvents: _.unionBy(
          state.allEvents,
          sortData(action.payload, "start_time", "asc"),
          "id"
        ),
        recommendedEvents: sortData(action.payload, "start_time", "asc"),
      };

    case RESET_MY_EVENTS:
      return { ...state, myEvents: [], recommendedEvents: [] };
    default:
      return state;
  }
};
