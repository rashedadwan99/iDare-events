import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getImageSrc } from "../services/imageServices";
import HandleTimeComponent from "./HandleTimeComponent";
import EventFooterSection from "./EventFooterSection";
import { isArabic } from "../locales/language";
import { GoLocation } from "react-icons/go";
import EventTimeLocation from "./EventTimeLocation";
import EventPageLinks from "./EventPageLinks";

function EventFooter() {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));
  return (
    <Row className="justify-content-center align-items-start py-5  event-footer">
      <EventFooterSection title={isArabic() ? event.name_ar : event.name}>
        <Col sm={12}>
          <Row className="align-items-center">
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
  );
}

export default EventFooter;
