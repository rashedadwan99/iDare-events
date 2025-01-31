import "moment/locale/ar";
import { IoLocationSharp } from "react-icons/io5";
import {
  BsFillCalendarFill,
  BsFillClockFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { HandleDate, useHandleTimeZone } from "../utils/TimeZone";
import { useSelector } from "react-redux";

export const GetEventInfo = (event) => {
  const isArabic = useSelector((state) => state.language.isArabic);
  let eventInfo = [
    {
      icon: <IoLocationSharp />,
      data: isArabic ? event.location_ar : event.location,
    },
    {
      icon: <BsFillCalendarFill />,
      data: `${HandleDate(event.start_time)} - ${HandleDate(event.end_time)}`,
    },
    {
      icon: <BsFillClockFill />,
      data: `${useHandleTimeZone(event.start_time)} - ${useHandleTimeZone(
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
