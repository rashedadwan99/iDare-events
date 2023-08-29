import { http } from "./httpService";
import { getUserToken } from "./userService";

export const getAllEvents = () => {
  return http.get("/events");
};

export const registerEvent = ({ event_id, ticket_type_id }) => {
  return http.get("/events/register", {
    params: { event_id, ticket_type_id, api_token: getUserToken() },
  });
};

export const getMyEvents = () => {
  return http.get("/events/getMyEvents", {
    params: {
      api_token: getUserToken(),
    },
  });
};
