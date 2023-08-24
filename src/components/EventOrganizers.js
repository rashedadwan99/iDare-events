import React from "react";
import { isArabic, language } from "../locales/language";
import { storageBaseURL } from "../services/httpService";
import { Image, Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";
import { getImageSrc } from "../services/imageServices";

function EventOrganizers({ handleBackgroundStyle, event }) {

  return (
    <Row
      className="justify-content-center my-3 py-5"
      style={handleBackgroundStyle(event.secondary_image)}
    >
      {event.organizers.map((o) => {
        return (
          <Col
            xs={11}
            sm={11}
            md={9}
            lg={7}
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
                <Row className="p-3">
                  <h5 className="organizer-name">
                    {isArabic() ? o.name_ar : o.name}
                  </h5>
                  <span className="organizer-description">
                    {isArabic() ? o.description_ar : o.description}
                  </span>
                </Row>
              </Col>
            </Row>
          </Col>
        );
      })}
    </Row>
  );
}

export default EventOrganizers;
