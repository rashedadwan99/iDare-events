import React from "react";
import { isArabic } from "../locales/language";
import { Image, Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";
import { getImageSrc } from "../services/imageServices";
import { handleOrganizersBackgroundStyle } from "../styles/eventStyles";
import EventSectionContainer from "./common/EventSectionContainer";
import SlideShow from "./common/SlideShow";

function EventOrganizers({ event, isInActiveSection }) {
  const activeOrganizers = event.organizers.filter((o) => o.active !== 0);
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
              {activeOrganizers.map((o) => {
                return (
                  <Col xs={11} sm={12} key={o.id} className="mx-0 py-1">
                    <Row className="align-items-center justify-content-center organizer">
                      <Col xs={12} sm={12} md={4} lg={4}>
                        <Row className="justify-content-center">
                          <Image
                            src={getImageSrc(o.image)}
                            alt="organizer logo"
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
          </Col>
        </Row>
      </EventSectionContainer>
    )
  );
}

export default EventOrganizers;
