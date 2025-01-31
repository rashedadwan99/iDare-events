import moment from "moment-timezone";
import "moment/locale/ar";
import { useSelector } from "react-redux";
export const useHandleTimeZone = (date) => {
  const isArabic = useSelector((state) => state.language.isArabic);

  // Set locale
  moment.locale(isArabic ? "ar" : "en");

  // Convert the date to the correct time zone
  const timeZone = "Asia/Amman";
  const zonedTime = moment.tz(date, timeZone);

  return zonedTime.format("hh:mm A"); // 12-hour format with AM/PM
};
export const HandleDate = (date) => {
  const isArabic = useSelector((state) => state.language.isArabic);
  moment.locale(isArabic ? "ar" : "en");

  return moment(date).format("MMMM D, YYYY");
};
