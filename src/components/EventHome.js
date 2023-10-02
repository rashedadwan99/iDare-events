import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import EventFirstSection from "./EventFirstSection";
import EventIntro from "./EventIntro";
import EventOrganizers from "./EventOrganizers";
import EventRooms from "./EventRooms";
import EventSponsors from "./EventSponsors";

const EventHome = memo(function () {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));
  const isInActiveSection = (dataSection) => {
    const inActiveArray = dataSection.filter((o) => o.active === 0);
    const isAllinActivated = dataSection.length === inActiveArray.length;
    return isAllinActivated;
  };
  const [showSections, setShowSections] = useState(false);
  useEffect(() => {
    setShowSections(true);
    return () => setShowSections(false);
  }, []);
  return (
    <>
      <Col xs={12} sm={12}>
        <EventFirstSection event={event} />
      </Col>
      {showSections && (
        <>
          <EventIntro event={event} />
          <EventOrganizers
            event={event}
            isInActiveSection={isInActiveSection}
          />
          <EventRooms event={event} isInActiveSection={isInActiveSection} />
          <EventSponsors event={event} />
        </>
      )}
    </>
  );
});
export default EventHome;
