import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { isArabic } from "../locales/language";

import DomParser from "./common/DomParser";
import { getImageSrc } from "../services/imageServices";
import Canvas from "./common/Canvas";
import { useTranslation } from "react-i18next";
import CommonButton from "./common/Button";

function EventSecondSection({
  event,
  handlePrimaryButtonStyle,
  handlePrimaryButtonStyleWhenHover,
}) {
  const { t } = useTranslation();
  return (
    <Row className="justify-content-center mt-5 about-event-section">
      <Col xs={11} sm={9} md={8}>
        <Row className="justify-content-center">
          <Col xs={11} sm={9} md={8}>
            <Image
              src={getImageSrc(event.about_image)}
              alt="about"
              className="event__about-image"
            />
          </Col>

          <Col xs={11} sm={9} md={8}>
            <Row className="mt-4">
              <Canvas
                label={t("about-event")}
                bodyComponent={
                  <div className="about-event__description">
                    <DomParser
                      htmlResponse={
                        isArabic()
                          ? event.long_description_ar
                          : event.long_description
                      }
                    />
                  </div>
                }
              >
                <Col sm={12}>
                  <CommonButton
                    label={t("read-event")}
                    primaryStyle={handlePrimaryButtonStyle}
                    primaryStyleHover={handlePrimaryButtonStyleWhenHover}
                  />
                </Col>
              </Canvas>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default EventSecondSection;
