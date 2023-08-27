import { format } from "date-fns";
import React from "react";

function HandleTimeComponent({ data }) {
  const handleDate = (date) => {
    // return format(new Date(date), "MM/d/yyyy h:mm a");
    return format(new Date(date), "eeee MMMM d, yyyy h:mm a");
  };
  return (
    <>
      {handleDate(data.start_time)}- {handleDate(data.end_time)}
    </>
  );
}

export default HandleTimeComponent;
