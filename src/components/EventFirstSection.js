import React from "react";
import { Row, Col } from "react-bootstrap";
// import { isArabic } from "../locales/language";
import { handleBackgroundStyle } from "../styles/eventStyles";
import EventTimeLocation from "./EventTimeLocation";

import EventFormBtn from "./common/EventFormBtn";
import { useSelector } from "react-redux";
import EventInfo from "./EventInfo";

function EventFirstSection({ event }) {
  const isArabic = useSelector((state) => state.language.isArabic);

  return (
    <Row
      className="justify-content-center first-event-section"
      style={handleBackgroundStyle(event.main_image)}
    >
      <div className="first-event-section__blur-background" />
      <Col xs={11} sm={11} md={8} lg={7}>
        <Row className="justify-content-start">
          <h4>{isArabic ? event.slogan_ar : event.slogan}</h4>
        </Row>
        <Row className="mt-3">
          <Col xs={12} sm={10} md={8} lg={5}>
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
}

export default EventFirstSection;
