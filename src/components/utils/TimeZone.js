import moment from "moment-timezone";
import "moment/locale/ar";
import { useSelector } from "react-redux";
export const HandleTimeZone = (date) => {
  const isArabic = useSelector((state) => state.language.isArabic);
  moment.locale(isArabic ? "ar" : "en");
  const timeZone = "UTC";
  const utcTime = moment.utc(date);

  const zonedTime = moment.tz(utcTime, timeZone).format();

  return moment(zonedTime).format("hh:mm a");
};
export const HandleDate = (date) => {
  const isArabic = useSelector((state) => state.language.isArabic);
  moment.locale(isArabic ? "ar" : "en");

  return moment(date).format("MMMM D, YYYY");
};
