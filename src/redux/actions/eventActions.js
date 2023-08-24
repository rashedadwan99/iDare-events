import { getAllEvents } from "../../services/eventsService";
import { SUCCESS } from "../../services/httpService";

export const GET_ALL_EVENTS = "GET_ALL_EVENTS";
export const GET_MY_EVENTS = "GET_MY_EVENTS";
export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const getAllEventsAction = () => {
  return async (dispatch) => {
    const { data } = await getAllEvents();
    if (data.AZSVR === SUCCESS)
      dispatch({ type: GET_ALL_EVENTS, payload: data.Events });
  };
};
