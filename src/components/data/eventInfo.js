import "moment/locale/ar";
import { IoLocationSharp } from "react-icons/io5";
import {
  BsFillCalendarFill,
  BsFillClockFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { HandleDate, HandleTimeZone } from "../utils/TimeZone";

export const getEventInfo = (event) => {
  let eventInfo = [
    { icon: <IoLocationSharp />, data: event.location },
    {
      icon: <BsFillCalendarFill />,
      data: `${HandleDate(event.start_time)} - ${HandleDate(event.end_time)}`,
    },
    {
      icon: <BsFillClockFill />,
      data: `${HandleTimeZone(event.start_time)} - ${HandleTimeZone(
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
