import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { language } from "../locales/language";
import { storageBaseURL } from "../services/httpService";

function EventSecondSection({ event }) {
  const { t } = useTranslation();
  return (
    <Row className="justify-content-center my-5 second-event-section">
      <Col sm={12}>
        <Row className="justify-content-center my-3">
          <h3>{t("about-event")}</h3>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col xs={11} sm={6}>
            <img src={storageBaseURL + event.about_image} alt="about" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={11} sm={11} md={9} lg={7}>
            {language() === "ar"
              ? event.long_description_ar
              : event.long_description}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default EventSecondSection;
