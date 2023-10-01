import React from "react";
import { memo } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import EventFormBtn from "./common/EventFormBtn";
import EventInfo from "./EventInfo";
import { handleBackgroundStyle } from "../styles/eventStyles";

const EventFirstSection = memo(function ({ event }) {
  const isArabic = useSelector((state) => state.language.isArabic);

  return (
    <Row
      className="justify-content-center first-event-section"
      style={handleBackgroundStyle(event.main_image)}
    >
      <div className="first-event-section__blur-background" />
      <Col xs={11} sm={11} md={9} lg={10}>
        <Row className="justify-content-start">
          <h4>{isArabic ? event.slogan_ar : event.slogan}</h4>
        </Row>
        <Row className="mt-3">
          <Col xs={12} sm={10} md={8} lg={4}>
            <EventInfo event={event} />
          </Col>
        </Row>
        <Row className="justify-content-start align-items-center mt-3">
          <Col xs={7} sm={4} md={6} lg={4}>
            <Row>
              <EventFormBtn event={event} />
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
});
export default EventFirstSection;
