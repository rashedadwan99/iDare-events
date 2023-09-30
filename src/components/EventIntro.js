import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { getImageSrc } from "../services/imageServices";
import EventSectionContainer from "./common/EventSectionContainer";
import AosContainer from "./common/Aos";
import AboutEvent from "./AboutEvent";

function EventIntro({ event }) {
  return (
    <EventSectionContainer name="about-event">
      <Row className="justify-content-center about-event-section">
        <Col xs={12} sm={11}>
          <Row className="justify-content-center align-items-start mt-3">
            {event.about_image && (
              <Col xs={12} sm={12} lg={6}>
                <AosContainer
                  animation_name_scroll_down="zoom-in"
                  animation_name_scroll_up="zoom-out"
                >
                  <Row>
                    <Image
                      src={getImageSrc(event.about_image)}
                      alt="about"
                      className="event__about-image"
                    />
                  </Row>
                </AosContainer>
              </Col>
            )}
            <Col xs={12} sm={12} lg={event.about_image ? 6 : 12}>
              <AosContainer
                animation_name_scroll_down="zoom-in"
                animation_name_scroll_up="zoom-out"
              >
                <Row>
                  <AboutEvent event={event} />
                </Row>
              </AosContainer>
            </Col>
          </Row>
        </Col>
      </Row>
    </EventSectionContainer>
  );
}

export default EventIntro;
