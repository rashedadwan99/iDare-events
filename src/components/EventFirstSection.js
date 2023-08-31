import React from "react";
import { Row, Col } from "react-bootstrap";
import { isArabic } from "../locales/language";
import {
  handleOrganizersBackgroundStyle,
  handlePrimaryButtonStyle,
  handlePrimaryButtonStyleWhenHover,
} from "../styles/eventStyles";
import CommonButton from "./common/Button";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenModal } from "../redux/actions/modalAction";
import CommonModal from "./common/CommonModal";
import EventTimeLocation from "./EventTimeLocation";
import EventForm from "./EventForm";
import { getUserToken } from "../services/userService";
import { Toast } from "./common/Toast";
import { useTranslation } from "react-i18next";
import { is } from "date-fns/esm/locale";

function EventFirstSection({ event }) {
  const myEvents = useSelector((state) => state.events.myEvents);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isInMyEvents = myEvents.find((e) => e.event_id === event.id);
  const handleOpenModal = () => {
    if (!getUserToken()) return Toast("info", t("login_first"));
    if (isInMyEvents) return;
    dispatch(toggleOpenModal());
  };

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
              <CommonButton
                primaryStyle={handlePrimaryButtonStyle(event)}
                primaryStyleHover={handlePrimaryButtonStyleWhenHover(event)}
                label={
                  getUserToken()
                    ? isInMyEvents
                      ? t("already_registered")
                      : t("register-event")
                    : t("register-event")
                }
                onClick={handleOpenModal}
              />
              <CommonModal title={t("register-event")}>
                <EventForm event={event} />
              </CommonModal>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default EventFirstSection;
