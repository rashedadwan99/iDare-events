import {
  getUpcomingEvents,
  getMyEvents,
  getRecommendedEvents,
} from "../../services/eventsService";
import { FAILED, SUCCESS } from "../../services/httpService";
import { getUserToken } from "../../services/userService";

export const GET_UPCOMING_EVENTS = "GET_UPCOMING_EVENTS";
export const GET_MY_EVENTS = "GET_MY_EVENTS";
export const GET_RECOMMENDED_EVENTS = "GET_RECOMMENDED_EVENTS";
export const RESET_MY_EVENTS = "RESET_MY_EVENTS";
export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const GET_ALL_EVENTS = "GET_ALL_EVENTS";
export const GET_EVENT_MEDIA = "GET_EVENT_MEDIA";
export const GetEventMedia = (media) => {
  return { type: GET_EVENT_MEDIA, payload: media };
};
export const getUpcomingEventsAction = () => {
  return async (dispatch) => {
    const { data } = await getUpcomingEvents();
    if (getUserToken()) {
      dispatch(getMyEventsAction());
    }
    if (data.AZSVR === SUCCESS) {
      dispatch({ type: GET_UPCOMING_EVENTS, payload: data.Events });
      dispatch({ type: TOGGLE_LOADING });
    } else if (data.AZSVR === FAILED) return;
  };
};
export const getMyEventsAction = () => {
  return async (dispatch) => {
    const { data } = await getMyEvents();
    if (data.AZSVR === SUCCESS)
      dispatch({
        type: GET_MY_EVENTS,
        payload: data.EventRegisters.map((e) => e.event_id),
      });
    else if (data.AZSVR === FAILED) return;
  };
};
export const getRecommendedEventAction = () => {
  return async (dispatch) => {
    const { data } = await getRecommendedEvents();
    if (data.AZSVR === SUCCESS)
      dispatch({
        type: GET_RECOMMENDED_EVENTS,
        payload: data.RecommendedEvents.map((e) => e.event),
      });
    else if (data.AZSVR === FAILED) return;
  };
};

export const resetEvents = () => {
  return { type: RESET_MY_EVENTS };
};
