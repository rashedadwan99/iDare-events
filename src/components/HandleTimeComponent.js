import { format } from "date-fns";
import React from "react";

function HandleTimeComponent({ data }) {
  const handleDate = (date) => {
    return format(new Date(date), "MMMM d, yyyy");
  };

  const handleHours = (date) => {
    return format(new Date(date), "hh:mm a");
  };
  return (
    <>
      {handleDate(data.start_time)}- {handleDate(data.end_time)}
      <br />
      {handleHours(data.start_time)}-{handleHours(data.end_time)}
    </>
  );
}

export default HandleTimeComponent;
