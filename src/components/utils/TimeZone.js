import moment from "moment-timezone";
import "moment/locale/ar";
import { useSelector } from "react-redux";
export const HandleTimeZone = (date) => {
  const isArabic = useSelector((state) => state.language.isArabic);
  moment.locale(isArabic ? "ar" : "en");

  const timeZone = "Asia/Amman";
  const zonedTime = moment.tz(date, timeZone).utcOffset(date);

  return zonedTime.format("hh:mm A");
};
export const HandleDate = (date) => {
  const isArabic = useSelector((state) => state.language.isArabic);
  moment.locale(isArabic ? "ar" : "en");

  return moment(date).format("MMMM D, YYYY");
};
