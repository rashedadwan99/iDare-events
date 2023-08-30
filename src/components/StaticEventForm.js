import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import FormElement from "./common/FormElement";
import { isArabic } from "../locales/language";

function StaticEventForm({ event, data, setData }) {
  const { t } = useTranslation();

  return (
    <>
      <Col xs={11} sm={11}>
        <Row className="align-items-center mb-2">
          <FormElement
            data={data}
            setData={setData}
            value={isArabic() ? event.name_ar : event.name}
            disabled={true}
          />
        </Row>
      </Col>
      <Col xs={11} sm={11}>
        <Row className="align-items-center mb-2">
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
    </>
  );
}

export default StaticEventForm;
