import { http } from "./httpService";

export const getAllEvents = () => {
  return http.get("/events");
};
