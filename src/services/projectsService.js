import { http } from "./httpService";

export const getProjects = () => {
  return http.get("/projects");
};
