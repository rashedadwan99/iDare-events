import { SUCCESS } from "../../services/httpService";
import { getProfile } from "../../services/userService";

export const TOGGLE_AUTH = "TOGGLE_AUTH";
export const GET_PROFILE = "GET_PROFILE";

export const toggleIsAuth = (isAuth) => {
  return { type: TOGGLE_AUTH, payload: isAuth };
};

export const getProfileAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await getProfile();
      if (data.AZSVR === SUCCESS) {
        dispatch({ type: GET_PROFILE, payload: data.User });
      } else return;
    } catch (error) {}
  };
};
