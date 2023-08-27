import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getImageSrc } from "../services/imageServices";
import HandleTimeComponent from "./HandleTimeComponent";
import EventFooterSection from "./EventFooterSection";
import { isArabic } from "../locales/language";

function EventFooter() {
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));
  return (
    <Row className="justify-content-center align-items-start py-5 px-4 event-footer">
      <EventFooterSection title={isArabic() ? event.name_ar : event.name}>
        <img src={getImageSrc(event.image)} alt="event-logo" />
      </EventFooterSection>
      <EventFooterSection title="page-links"></EventFooterSection>

      <EventFooterSection title="event_time">
        <HandleTimeComponent data={event} />
      </EventFooterSection>
    </Row>
  );
}

export default EventFooter;
