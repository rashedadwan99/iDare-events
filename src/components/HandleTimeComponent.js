import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { HandleDate, HandleTimeZone } from "./utils/TimeZone";

function HandleTimeComponent({ data }) {
  const { t } = useTranslation();

  return (
    <>
      <Col xs={12} sm={12}>
        <Row>
          {HandleDate(data.start_time)} - {HandleDate(data.end_time)}
        </Row>
      </Col>
      <Col xs={12} sm={12} className="my-2">
        <Row>{`${t("start")} : ${HandleTimeZone(data.start_time)}`}</Row>
      </Col>
      <Col xs={12} sm={12}>
        <Row> {`${t("end")} : ${HandleTimeZone(data.end_time)}`}</Row>
      </Col>
    </>
  );
}

export default HandleTimeComponent;
