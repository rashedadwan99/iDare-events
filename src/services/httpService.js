import axios from "axios";
import { loginPageRoute } from "../routes";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const storageBaseURL = process.env.REACT_APP_STORAGE_BASE_URL;

export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = loginPageRoute;
      localStorage.removeItem("api_token");
    }

    return Promise.reject(error);
  }
);

export const http = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
};

export default axiosInstance;
