import { http } from "./httpService";
export const registerUser = async (data) => {
  return http.get("/user/register", {
    params: data,
  });
};

export const getToken = (data) => {
  const { email, password } = data;
  return http.get("/user/getToken", {
    params: { email, password },
  });
};

export const resetPassword = (data) => {
  const { phone, national_number, new_password } = data;
  return http.get("/user/resetPassword", {
    params: { phone, national_number, new_password },
  });
};

export const setToken = (token) => {
  localStorage.setItem("api_token", token);
};

export const getUserToken = () => {
  return localStorage.getItem("api_token");
};

export const logout = () => {
  localStorage.removeItem("api_token");
};
export const getProfile = () => {
  return http.get("/user/getProfile", {
    params: {
      api_token: getUserToken(),
    },
  });
};
export const updateProfile = (data) => {
  return http.get("/user/updateProfile", {
    params: {
      api_token: getUserToken(),
      ...data,
    },
  });
};
