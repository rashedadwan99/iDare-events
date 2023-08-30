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
import "../styles/event-form.css";
import { Toast } from "./common/Toast";
import { registerEvent } from "../services/eventsService";
import { getUserToken } from "../services/userService";
function EventForm({ event }) {
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
      obj = { ...obj, [name]: "" };
    });
    setDaynamicData(obj);
  }, []);
  console.log(daynamicData);

  const handleSubmit = async () => {
    if (!getUserToken()) return Toast("info", t("login_first"));
    if (!staticData.ticket_type_id) {
      return Toast("info", t("please fill all fields"));
    }
    const allAdditionalRequired = event.additional_fields.filter(
      (a) => a.required === 1
    );
    if (allAdditionalRequired.length) {
      for (const key in daynamicData) {
        const field = event.additional_fields.find((a) => a.name === key);

        if (key === field.name && !daynamicData[key].length) {
          return Toast("info", t("please fill all fields"));
        }
      }
    }
    const allData = { ...staticData, ...daynamicData };
    const { data } = await registerEvent(allData);
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
