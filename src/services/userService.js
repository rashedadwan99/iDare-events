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
    allergies,
    disability,
  } = data;
  return http.get("/user/register", {
    params: {
      email,
      name,
      phone,
      password,
      gender_id,
      country_id,
      national_number,
      is_disabled,
      allergies,
      disability,
    },
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
