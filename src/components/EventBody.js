import React from "react";
import { memo } from "react";
import { Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import EventFooter from "./EventFooter";

const EventBody = memo(function ({ event }) {
  const isArabic = useSelector((state) => state.language.isArabic);

  return (
    <Row className={`event-page  ${isArabic ? "arabic" : ""}`}>
      <Outlet />
      <EventFooter event={event} />
    </Row>
  );
});
export default EventBody;
