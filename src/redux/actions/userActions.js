import { SUCCESS } from "../../services/httpService";
import { getProfile } from "../../services/userService";

export const TOGGLE_AUTH = "TOGGLE_AUTH";
export const GET_PROFILE = "GET_PROFILE";
export const RESET_USER = "RESET_USER";

export const toggleIsAuth = (isAuth) => {
  return { type: TOGGLE_AUTH, payload: isAuth };
};

export const getProfileAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await getProfile();
      if (data.AZSVR === SUCCESS) {
        dispatch({
          type: GET_PROFILE,
          payload: { user: data.User, badges: data.Badges },
        });
      } else return;
    } catch (error) {}
  };
};

export const resetUser = () => {
  return { type: RESET_USER };
};
