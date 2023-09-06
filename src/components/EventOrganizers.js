import React, { useState } from "react";
import { isArabic } from "../locales/language";
import { Image, Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";
import { getImageSrc } from "../services/imageServices";
import { handleOrganizersBackgroundStyle } from "../styles/eventStyles";
import EventSectionContainer from "./common/EventSectionContainer";
import SlideShow from "./common/SlideShow";

function EventOrganizers({ event, isInActiveSection }) {
  return (
    !isInActiveSection(event.organizers) && (
      <EventSectionContainer name="organizers">
        <Row
          className="justify-content-center my-3 py-5 organizers-section"
          style={handleOrganizersBackgroundStyle(event.secondary_image)}
        >
          <Col
            xs={11}
            sm={11}
            md={10}
            lg={9}
            className="m-3 py-1 organizer-container"
          >
            <SlideShow>
              {event.organizers.map((o) => {
                if (o.active)
                  return (
                    <Col xs={11} sm={12} key={o.id} className="mx-0 py-1">
                      <Row className="align-items-center justify-content-center organizer">
                        <Col xs={12} sm={12} md={4} lg={4}>
                          <Row className="justify-content-center">
                            <Image
                              src={getImageSrc(o.image)}
                              alt="organizer logo"
                              // fluid
                            />
                          </Row>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={8}>
                          <Row className="px-3">
                            <p className="organizer-name">
                              {isArabic() ? o.name_ar : o.name}
                            </p>
                          </Row>
                          <Row className="px-3">
                            <span className="organizer-description">
                              {isArabic() ? o.description_ar : o.description}
                            </span>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  );
              })}
            </SlideShow>
            {/* {event.organizers.map((o) => {
              if (o.active)
                return (
                  <Col
                    xs={11}
                    sm={11}
                    md={9}
                    lg={9}
                    key={o.id}
                    className="m-3 py-1 organizer-container"
                  >
                    <Row className="align-items-center justify-content-center">
                      <Col xs={12} sm={12} md={4} lg={4}>
                        <Row className="justify-content-center">
                          <Image
                            src={getImageSrc(o.image)}
                            alt="organizer logo"
                            fluid
                          />
                        </Row>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={8}>
                        <Row className="px-3">
                          <h5 className="organizer-name">
                            {isArabic() ? o.name_ar : o.name}
                          </h5>
                        </Row>
                        <Row className="px-3">
                          <span className="organizer-description">
                            {isArabic() ? o.description_ar : o.description}
                          </span>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                );
            })} */}
          </Col>
        </Row>
      </EventSectionContainer>
    )
  );
}

export default EventOrganizers;
