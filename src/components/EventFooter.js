import React from "react";
import { Col, Row } from "react-bootstrap";
import { getImageSrc } from "../services/imageServices";
import EventFooterSection from "./EventFooterSection";
import EventTimeLocation from "./EventTimeLocation";
import EventPageLinks from "./EventPageLinks";
import { handleFooterStyle } from "../styles/eventStyles";
import EventFormBtn from "./common/EventFormBtn";
import Logo from "../images/Logo";
import { useSelector } from "react-redux";

function EventFooter({ event }) {
  const isArabic = useSelector((state) => state.language.isArabic);
  return (
    <Col sm={12} style={handleFooterStyle(event)}>
      <Row className="justify-content-center align-items-start py-5 event-footer">
        <EventFooterSection title={isArabic ? event.name_ar : event.name}>
          <Col xs={12} sm={12}>
            <Row className="align-items-center justify-content-start">
              <Logo
                src={getImageSrc(event.image)}
                alt="event-logo"
                className="event-logo"
                event={event}
              />
            </Row>
          </Col>
        </EventFooterSection>
        <EventFooterSection title="page-links">
          <EventPageLinks event={event} />
        </EventFooterSection>

        <EventFooterSection title="event_info">
          <EventTimeLocation event={event} />
          <Col className="mt-3" xs={5} sm={8}>
            <Row>
              <EventFormBtn event={event} />
            </Row>
          </Col>
        </EventFooterSection>
      </Row>
    </Col>
  );
}

export default EventFooter;
