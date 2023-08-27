import React from "react";
import { Row, Col } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { isArabic } from "../locales/language";
import HandleTimeComponent from "./HandleTimeComponent";
import {
  handleOrganizersBackgroundStyle,
  handlePrimaryButtonStyle,
  handlePrimaryButtonStyleWhenHover,
} from "../styles/eventStyles";
import CommonButton from "./common/Button";
import { t } from "i18next";
import { useDispatch } from "react-redux";
import { toggleOpenModal } from "../redux/actions/modalAction";
import CommonModal from "./common/CommonModal";

function EventFirstSection({ event }) {
  const dispatch = useDispatch();
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
        <Row className="justify-content-start align-items-center mt-3">
          <Col xs={11} sm={11} md={6} lg={4}>
            <Row>
              <CommonButton
                primaryStyle={handlePrimaryButtonStyle(event)}
                primaryStyleHover={handlePrimaryButtonStyleWhenHover(event)}
                label={t("register-event")}
                onClick={() => dispatch(toggleOpenModal())}
              />
              <CommonModal title={t("register-event")}>
                <>p</>
              </CommonModal>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default EventFirstSection;
