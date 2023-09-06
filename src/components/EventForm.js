import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { isArabic } from "../locales/language";
import CommonButton from "./common/Button";
import StaticEventForm from "./StaticEventForm";
import DaynamicEventForm from "./DaynamicEventForm";
import {
  handlePrimaryButtonStyle,
  handlePrimaryButtonStyleWhenHover,
} from "../styles/eventStyles";
import { Toast } from "./common/Toast";
import { registerEvent } from "../services/eventsService";
import { SUCCESS } from "../services/httpService";
import { useDispatch } from "react-redux";
import { getMyEventsAction } from "../redux/actions/eventActions";
import { toggleOpenModal } from "../redux/actions/modalAction";
import "../styles/event-form.css";
function EventForm({ event }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [staticData, setStaticData] = useState({
    event_id: event.id,
    ticket_type_id: "",
  });
  const [daynamicData, setDaynamicData] = useState({});
  useEffect(() => {
    let obj = {};
    event.additional_fields.map((f) => {
      const { name } = f;
      return (obj = { ...obj, [name]: "" });
    });
    setDaynamicData(obj);
  }, [event.additional_fields]);

  const handleSubmit = async () => {
    if (!staticData.ticket_type_id) {
      return Toast("info", t("please fill fields"));
    }
    const allAdditionalRequired = event.additional_fields.filter(
      (a) => a.required === 1
    );
    if (allAdditionalRequired.length) {
      for (const key in daynamicData) {
        const field = event.additional_fields.find((a) => a.name === key);

        if (
          key === field.name &&
          !daynamicData[key].length &&
          allAdditionalRequired.includes(field)
        ) {
          return Toast("info", t("please fill fields"));
        }
      }
    }
    const allData = { ...staticData, ...daynamicData };
    const { data } = await registerEvent(allData);
    if (data.AZSVR === SUCCESS) {
      dispatch(getMyEventsAction());
      dispatch(toggleOpenModal());
      return Toast("info", t("event-register"));
    }
  };

  return (
    <Row
      className={`justify-content-center event-form ${isArabic() ? "ar" : ""}`}
    >
      <StaticEventForm
        event={event}
        data={staticData}
        setData={setStaticData}
      />

      <DaynamicEventForm
        event={event}
        setData={setDaynamicData}
        data={daynamicData}
      />

      <Col xs={11} sm={11}>
        <Row>
          <CommonButton
            primaryStyle={handlePrimaryButtonStyle(event)}
            primaryStyleHover={handlePrimaryButtonStyleWhenHover(event)}
            label={t("register-event")}
            onClick={handleSubmit}
          />
        </Row>
      </Col>
    </Row>
  );
}

export default EventForm;
