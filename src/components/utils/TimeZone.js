import { format, utcToZonedTime } from "date-fns-tz";

export const handleTimeZone = (date) => {
  const timeZone = "UTC";
  const utcTime = new Date(date);

  const zonedTime = utcToZonedTime(utcTime, timeZone);

  return format(zonedTime, "hh:mm a", { timeZone });
};
