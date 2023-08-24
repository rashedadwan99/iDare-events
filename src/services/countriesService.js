import { http } from "./httpService";
export const getCountries = () => {
  return http.get("/misc/getCountries");
};
