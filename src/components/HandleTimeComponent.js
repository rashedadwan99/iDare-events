import { format } from "date-fns";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function HandleTimeComponent({ data }) {
  const { t } = useTranslation();
  const handleDate = (date) => {
    return format(new Date(date), "MMMM d, yyyy");
  };

  const handleHours = (date) => {
    return format(new Date(date), "hh:mm a");
  };
  return (
    <>
      <Col xs={12} sm={12}>
        <Row>
          {handleDate(data.start_time)}- {handleDate(data.end_time)}
        </Row>
      </Col>
      <Col xs={12} sm={12} className="my-2">
        <Row>{`${t("start")} : ${handleHours(data.start_time)}`}</Row>
      </Col>
      <Col xs={12} sm={12}>
        <Row> {`${t("end")} : ${handleHours(data.end_time)}`}</Row>
      </Col>
    </>
  );
}

export default HandleTimeComponent;
