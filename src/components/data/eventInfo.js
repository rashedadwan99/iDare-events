import { format } from "date-fns-tz";

import { IoLocationSharp } from "react-icons/io5";
import {
  BsFillCalendarFill,
  BsFillClockFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { handleTimeZone } from "../utils/TimeZone";
const handleDate = (date) => {
  return format(new Date(date), "MMMM d, yyyy");
};

export const getEventInfo = (event) => {
  let eventInfo = [
    { icon: <IoLocationSharp />, data: event.location },
    {
      icon: <BsFillCalendarFill />,
      data: `${handleDate(event.start_time)} - ${handleDate(event.end_time)}`,
    },
    {
      icon: <BsFillClockFill />,
      data: `${handleTimeZone(event.start_time)} - ${handleTimeZone(
        event.end_time
      )}`,
    },
  ];
  if (event.contact) {
    eventInfo = [
      ...eventInfo,
      {
        icon: <BsFillTelephoneFill />,
        data: event.contact,
      },
    ];
  }
  return eventInfo;
};
