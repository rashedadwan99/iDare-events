import {
  getAllEvents,
  getMyEvents,
  getRecommendedEvents,
} from "../../services/eventsService";
import { FAILED, SUCCESS } from "../../services/httpService";

export const GET_ALL_EVENTS = "GET_ALL_EVENTS";
export const GET_MY_EVENTS = "GET_MY_EVENTS";
export const GET_RECOMMENDED_EVENTS = "GET_RECOMMENDED_EVENTS";
export const RESET_MY_EVENTS = "RESET_MY_EVENTS";
export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const getAllEventsAction = () => {
  return async (dispatch) => {
    const { data } = await getAllEvents();
    if (data.AZSVR === SUCCESS)
      dispatch({ type: GET_ALL_EVENTS, payload: data.Events });
    else if (data.AZSVR === FAILED) return;
  };
};
export const getMyEventsAction = () => {
  return async (dispatch) => {
    const { data } = await getMyEvents();
    if (data.AZSVR === SUCCESS)
      dispatch({ type: GET_MY_EVENTS, payload: data.EventRegisters });
    else if (data.AZSVR === FAILED) return;
  };
};
export const getRecommendedEventAction = () => {
  return async (dispatch) => {
    const { data } = await getRecommendedEvents();
    if (data.AZSVR === SUCCESS)
      dispatch({
        type: GET_RECOMMENDED_EVENTS,
        payload: data.RecommendedEvents,
      });
    else if (data.AZSVR === FAILED) return;
  };
};

export const resetEvents = () => {
  return { type: RESET_MY_EVENTS };
};
