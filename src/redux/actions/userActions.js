export const TOGGLE_AUTH = "TOGGLE_AUTH";

export const toggleIsAuth = (isAuth) => {
  return { type: TOGGLE_AUTH, payload: isAuth };
};
