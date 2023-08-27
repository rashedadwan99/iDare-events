import React from "react";
import { Row, Col } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { isArabic } from "../locales/language";
import HandleTimeComponent from "./HandleTimeComponent";
import { handleOrganizersBackgroundStyle } from "../styles/eventStyles";

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
        <Row className="justify-content-start align-items-center my-2">
          <GoLocation />
          <span>{event.location}</span>
        </Row>
        <Row className="justify-content-start align-items-center">
          <BiTimeFive />
          <span>
            <HandleTimeComponent data={event} />
          </span>
        </Row>
      </Col>
    </Row>
  );
}

export default EventFirstSection;
