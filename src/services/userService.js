import { http } from "./httpService";
export const registerUser = async (data) => {
  const {
    email,
    name,
    phone,
    password,
    gender_id,
    national_number,
    country_id,
    is_disabled,
  } = data;
  return http.get("/user/register", {
    params: {
      email,
      name: name.trim(),
      phone,
      password,
      gender_id,
      country_id,
      national_number,
      is_disabled,
    },
  });
};

export const getToken = (data) => {
  const { email, password } = data;
  return http.get("/user/getToken", {
    params: { email, password },
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
