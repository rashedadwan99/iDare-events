import { storageBaseURL } from "./httpService";

export const getImageSrc = (img) => {
  return storageBaseURL + img;
};
