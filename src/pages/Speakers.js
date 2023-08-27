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

  return (
    <Row className="my-5">
      <Col sm={12}>
        <Row>
          {event.rooms && (
            <Table cols={getSpeakersCols(t, event)} rows={event.speakers} />
          )}
        </Row>
      </Col>
    </Row>
  );
}

export default Speakers;
