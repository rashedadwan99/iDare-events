import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getImageSrc } from "../services/imageServices";
import EventFooterSection from "./EventFooterSection";
import { isArabic } from "../locales/language";
import EventTimeLocation from "./EventTimeLocation";
import EventPageLinks from "./EventPageLinks";
import { handleFooterStyle } from "../styles/eventStyles";
import EventFormBtn from "./common/EventFormBtn";

function EventFooter({ event }) {
  const myEvents = useSelector((state) => state.events.myEvents);
  const isInMyEvents = myEvents.find((e) => e.event_id === event.id);

  return (
    <Col sm={12} style={handleFooterStyle(event)}>
      <Row className="justify-content-center align-items-start py-5 event-footer">
        <EventFooterSection title={isArabic() ? event.name_ar : event.name}>
          <Col xs={12} sm={12}>
            <Row className="align-items-center justify-content-start">
              <img src={getImageSrc(event.image)} alt="event-logo" />
            </Row>
          </Col>
        </EventFooterSection>
        <EventFooterSection title="page-links">
          <EventPageLinks event={event} />
        </EventFooterSection>

        <EventFooterSection title="event_info">
          <EventTimeLocation event={event} />
          {event && !isInMyEvents && (
            <Col className="mt-3" xs={5} sm={8}>
              <Row>
                <EventFormBtn event={event} />
              </Row>
            </Col>
          )}
        </EventFooterSection>
      </Row>
    </Col>
  );
}

export default EventFooter;
