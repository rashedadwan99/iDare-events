import { format } from "date-fns";
import React from "react";

function EventTime({ event }) {
  const handleDate = (date) => {
    return format(new Date(date), "MMMM d, yyyy");
  };
  return (
    <>
      {handleDate(event.start_time)} - {handleDate(event.end_time)}
    </>
  );
}

export default EventTime;
