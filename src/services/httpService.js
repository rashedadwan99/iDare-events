import axios from "axios";

axios.defaults.baseURL = "https://idare.bitsblend.org/api/v1";

export const storageBaseURL = "https://idare.bitsblend.org/storage/";

export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
