import { http } from "./httpService";
export const getCities = () => {
  return http.get("/misc/getCities");
};
