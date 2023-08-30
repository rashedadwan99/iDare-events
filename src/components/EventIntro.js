import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { getImageSrc } from "../services/imageServices";
import { useTranslation } from "react-i18next";
import CommonButton from "./common/Button";
import {
  handlePrimaryButtonStyle,
  handlePrimaryButtonStyleWhenHover,
} from "../styles/eventStyles";
import EventSectionContainer from "./common/EventSectionContainer";
import { useDispatch } from "react-redux";
import { toggleOpenCanvasAction } from "../redux/actions/canvasActions";
import AboutEvent from "./AboutEvent";

function EventIntro({ event }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleOpenCanvas = () => {
    dispatch(
      toggleOpenCanvasAction(<AboutEvent event={event} />, t("about-event"))
    );
  };
  return (
    <EventSectionContainer name="about-event">
      <Row className="justify-content-center about-event-section">
        <Col xs={11} sm={10} md={7} lg={5}>
          <Row className="justify-content-center">
            <Col sm={12}>
              <Row>
                <Image
                  src={getImageSrc(event.about_image)}
                  alt="about"
                  className="event__about-image"
                />
              </Row>
            </Col>

            <Col sm={12} className="mt-3">
              <Row>
                <CommonButton
                  label={t("read-event")}
                  primaryStyle={() => handlePrimaryButtonStyle(event)}
                  primaryStyleHover={() =>
                    handlePrimaryButtonStyleWhenHover(event)
                  }
                  onClick={handleOpenCanvas}
                />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </EventSectionContainer>
  );
}

export default EventIntro;
