import React, { memo, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import RightHeaderSide from "./RightHeaderSide";
import LeftHeaderSide from "./LeftHeaderSide";
import { headerEventStyle } from "../styles/eventStyles";

const Header = memo(function () {
  const allEvents = useSelector((state) => state.events.allEvents);
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  useEffect(() => {
    if (id) setEvent(allEvents.find((e) => e.id === parseInt(id)));
  }, [id,allEvents]);
  return (
    <Row
      className={`header py-2 ${event ? "event-header" : ""}`}
      style={event && headerEventStyle(event)}
    >
      <LeftHeaderSide event={event} />
      <RightHeaderSide />
    </Row>
  );
});

export default Header;
