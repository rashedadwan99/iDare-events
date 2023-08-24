export const language = () => {
  return localStorage.getItem("lng");
};

export const ar = "ar";
export const en = "en";

export const isArabic = () => {
  return language() === ar;
};
