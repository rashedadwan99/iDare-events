import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const storageBaseURL = process.env.REACT_APP_STORAGE_BASE_URL;

export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
