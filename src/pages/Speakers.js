import React from "react";
import Table from "../components/common/Table";
import { getSpeakersCols } from "../components/data/speakersCols";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Speakers() {
  const { t } = useTranslation();
  const { id } = useParams();
  const allEvents = useSelector((state) => state.events.allEvents);
  const event = allEvents.find((e) => e.id === parseInt(id));
  const isArabic = useSelector((state) => state.language.isArabic);

  return (
    <Col sm={12} lg={12}>
      <Row className="my-5">
        <Col sm={12}>
          <Row className="justify-content-center mb-5">
            <h3 className="event-section-name">{t("speakers")}</h3>
          </Row>
        </Col>
        <Col sm={12}>
          <Row>
            <Table
              cols={getSpeakersCols(t, event, isArabic)}
              rows={event.speakers}
            />
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default Speakers;
