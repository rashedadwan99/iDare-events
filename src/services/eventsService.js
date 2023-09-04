import { http } from "./httpService";
import { getUserToken } from "./userService";

export const getAllEvents = () => {
  return http.get("/events");
};

export const registerEvent = (data) => {
  return http.get("/events/register", {
    params: { ...data, api_token: getUserToken() },
  });
};

export const getMyEvents = () => {
  return http.get("/events/getMyEvents", {
    params: {
      api_token: getUserToken(),
    },
  });
};
