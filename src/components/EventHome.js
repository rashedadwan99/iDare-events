import React from "react";
import { Col } from "react-bootstrap";
import EventFirstSection from "./EventFirstSection";
import EventIntro from "./EventIntro";
import EventOrganizers from "./EventOrganizers";
import EventRooms from "./EventRooms";
import EventSponsors from "./EventSponsors";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AosContainer from "./common/Aos";

function EventHome() {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));
  const isInActiveSection = (dataSection) => {
    const inActiveArray = dataSection.filter((o) => o.active === "0");
    const isAllinActivated = dataSection.length === inActiveArray.length;
    return isAllinActivated;
  };
  return (
    <>
      <Col sm={12} lg={12}>
        <EventFirstSection event={event} />
      </Col>
      <AosContainer>
        <EventIntro event={event} />
      </AosContainer>
      <AosContainer>
        <EventOrganizers event={event} isInActiveSection={isInActiveSection} />
      </AosContainer>
      <AosContainer>
        <EventRooms event={event} isInActiveSection={isInActiveSection} />
      </AosContainer>
      <AosContainer>
        <EventSponsors event={event} />
      </AosContainer>
    </>
  );
}

export default EventHome;
