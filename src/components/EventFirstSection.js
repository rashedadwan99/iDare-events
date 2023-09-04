import React from "react";
import { Row, Col } from "react-bootstrap";
import { isArabic } from "../locales/language";
import { handleOrganizersBackgroundStyle } from "../styles/eventStyles";
import EventTimeLocation from "./EventTimeLocation";

import EventFormBtn from "./common/EventFormBtn";

function EventFirstSection({ event }) {
  return (
    <Row
      className="justify-content-center first-event-section"
      style={handleOrganizersBackgroundStyle(event.main_image)}
    >
      <div className="first-event-section__blur-background" />
      <Col xs={11} sm={11} md={6}>
        <Row className="justify-content-start">
          <h4>{isArabic() ? event.slogan_ar : event.slogan}</h4>
        </Row>
        <Row className="mt-3">
          <EventTimeLocation event={event} />
        </Row>
        <Row className="justify-content-start align-items-center mt-3">
          <Col xs={8} sm={4} md={4} lg={4}>
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
