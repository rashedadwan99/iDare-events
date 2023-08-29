import React from "react";
import { Col, Row } from "react-bootstrap";
import { getImageSrc } from "../services/imageServices";
import EventFooterSection from "./EventFooterSection";
import { isArabic } from "../locales/language";
import EventTimeLocation from "./EventTimeLocation";
import EventPageLinks from "./EventPageLinks";
import { handleFooterStyle } from "../styles/eventStyles";

function EventFooter({ event }) {
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
        </EventFooterSection>
      </Row>
    </Col>
  );
}

export default EventFooter;
