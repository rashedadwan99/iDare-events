import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { isArabic } from "../locales/language";
import FormElement from "./common/FormElement";
import CommonButton from "./common/Button";
import "../styles/event-form.css";
import {
  handlePrimaryButtonStyle,
  handlePrimaryButtonStyleWhenHover,
} from "../styles/eventStyles";
function EventForm({ event }) {
  const { t } = useTranslation();
  const [data, setData] = useState({
    event_id: event.id,
    ticket_type_id: "",
  });
  return (
    <Row
      className={`justify-content-center event-form ${isArabic() ? "ar" : ""}`}
    >
      <Col xs={11} sm={11}>
        <Row>
          <FormElement
            data={data}
            setData={setData}
            value={isArabic() ? event.name_ar : event.name}
            disabled={true}
          />
        </Row>
      </Col>
      <Col xs={11} sm={11}>
        <Row>
          <FormElement
            element="select"
            data={data}
            setData={setData}
            defaultOption={t("ticket-type")}
            options={event.ticket_types}
            name="ticket_type_id"
            path="name"
          />
        </Row>
      </Col>
      <Col xs={11} sm={11}>
        <Row>
          <CommonButton
            primaryStyle={handlePrimaryButtonStyle(event)}
            primaryStyleHover={handlePrimaryButtonStyleWhenHover(event)}
            label={t("register-event")}
          />
        </Row>
      </Col>
    </Row>
  );
}

export default EventForm;
