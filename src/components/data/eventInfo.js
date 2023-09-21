import { IoLocationSharp } from "react-icons/io5";
import {
  BsFillCalendarFill,
  BsFillClockFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { format } from "date-fns";
const handleDate = (date) => {
  return format(new Date(date), "MMMM d, yyyy");
};
const handleHours = (date) => {
  return format(new Date(date), "hh:mm a");
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
      data: `${handleHours(event.start_time)} - ${handleHours(event.end_time)}`,
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
