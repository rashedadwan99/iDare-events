import { format } from "date-fns";
import React from "react";

function HandleTimeComponent({ data }) {
  const handleDate = (date) => {
    // return format(new Date(date), "MM/d/yyyy h:mm a");
    return format(new Date(date), "MMMM d, yyyy");
  };
  // const handleHours = (date) => {
  //   return format(new Date(date), "h:mm a");
  // };
  return (
    <>
      <div>
        {handleDate(data.start_time)}- {handleDate(data.end_time)}
      </div>
      {/* <div>
        {handleHours(data.start_time)}-{handleHours(data.end_time)}
      </div> */}
    </>
  );
}

export default HandleTimeComponent;
