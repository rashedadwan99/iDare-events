import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import FormElement from "./common/FormElement";
import { useSelector } from "react-redux";

function StaticEventForm({ event, data, setData }) {
  const { t } = useTranslation();
  const isArabic = useSelector((state) => state.language.isArabic);

  return (
    <>
      <Col xs={11} sm={11}>
        <Row className="align-items-center mb-2">
          <FormElement
            data={data}
            setData={setData}
            value={isArabic ? event.name_ar : event.name}
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
            path2={event.is_premium ? "price" : null}
            path="name"
          />
        </Row>
      </Col>
    </>
  );
}

export default StaticEventForm;
